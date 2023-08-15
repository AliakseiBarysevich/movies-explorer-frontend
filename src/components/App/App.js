import './App.css';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';
import { useCallback, useEffect, useState } from 'react';
import { register, authorize, checkToken } from '../../utils/auth';
import CurrentUserContext from '../../context/CurrentUserContext';
import { mainApi } from '../../utils/MainApi';
import { moviesApi } from '../../utils/MoviesApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [currentUser, setCurrentUser] = useState({});
  const [bfMovies, setBfMovies] = useState(JSON.parse(localStorage.getItem('bfMovies')) ?? null);
  const [bfMoviesInputValue, setBfMoviesInputValue] = useState(JSON.parse(localStorage.getItem('bfMoviesSearchQuery')) ?? '');
  const [bfMoviesSearchQuery, setBfMoviesSearchQuery] = useState(JSON.parse(localStorage.getItem('bfMoviesSearchQuery')) ?? '');
  const [bfMoviesIsShort, setBfMoviesIsShort] = useState(JSON.parse(localStorage.getItem('bfMoviesIsShort')) ?? false);
  const [savedBfMovies, setSavedBfMovies] = useState([]);
  const [savedBfMoviesInputValue, setSavedBfMoviesInutValue] = useState('');
  const [savedBfMoviesSearchQuery, setSavedBfMoviesSearchQuery] = useState('');
  const [savedBfMoviesIsShort, setSavedBfMoviesIsShort] = useState(false);
  const [isLoadingBfMovies, setIsLoadingBfMovies] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [searchError, setSearchError] = useState('');
  const [registerError, setRegisterError] = useState(false);
  const [isProfileUpdateSuccessful, setIsProfileUpdateSuccessful] = useState(false);
  const [isSignInSuccessful, setIsSignInSuccessful] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [initialCardsQuantity, setInitialCardsQuantity] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (!bfMovies) {
      if ('bfMovies' in localStorage) {
        setBfMovies(JSON.parse(localStorage.getItem('bfMovies')));
        setBfMoviesSearchQuery(localStorage.getItem('bfMoviesSearchQuery'));
        setBfMoviesIsShort(JSON.parse(localStorage.getItem('bfMoviesIsShort')));
      } else {
        setIsLoadingBfMovies(true);
        moviesApi
          .getMovies()
          .then((movies) => {
            setBfMovies(movies);
            localStorage.setItem('bfMovies', JSON.stringify(movies));
          })
          .catch((err) => {
            console.log(`Ошибка: ${err}`);
            setSearchError(err);
            setIsPopupOpen(true);
          })
          .finally(() => {
            setIsLoadingBfMovies(false)
          });
      }
    }
  }, [bfMovies, bfMoviesSearchQuery, bfMoviesIsShort]);

  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem('bfMoviesSearchQuery', JSON.stringify(bfMoviesSearchQuery));
      localStorage.setItem('bfMoviesIsShort', JSON.stringify(bfMoviesIsShort));
    }
  }, [isLoggedIn, bfMoviesSearchQuery, bfMoviesIsShort]);

  useEffect(() => {
    if (isLoggedIn) {
      mainApi
        .getSavedMovies()
        .then((movies) => {
          setSavedBfMovies(movies);
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
    }
  }, [isLoggedIn]);

  useEffect((() => {
    if (windowWidth > 768) {
      setInitialCardsQuantity(12);
    } else if (windowWidth > 480) {
      setInitialCardsQuantity(8);
    } else {
      setInitialCardsQuantity(5);
    }
  }), [windowWidth]);

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const convertDuration = (minutes) => {
    const min = minutes % 60;
    const hour = Math.floor(minutes / 60);
    return hour ? `${hour}ч ${min}м` : `${min}м`;
  };

  const handleSaveMovieClick = (movie) => {
    const isMovieSaved = savedBfMovies.some((item) => item.movieId === movie.id);
    if (!isMovieSaved) {
      mainApi
        .saveMovie({
          country: movie.country,
          director: movie.director,
          duration: movie.duration,
          year: movie.year,
          description: movie.description,
          image: moviesApi._baseUrl + movie.image.url,
          trailerLink: movie.trailerLink,
          nameRU: movie.nameRU,
          nameEN: movie.nameEN,
          thumbnail: moviesApi._baseUrl + movie.image.formats.thumbnail.url,
          movieId: movie.id,
          owner: movie.owner
        })
        .then((savedMovie) => setSavedBfMovies([savedMovie, ...savedBfMovies]))
        .catch((err) => console.log(`Ошибка: ${err}`));
    } else {
      const savedMovieId = savedBfMovies.find(
        (item) => item.movieId === movie.id
      )._id;
      mainApi
        .deleteMovie(savedMovieId)
        .then(() => {
          setSavedBfMovies((state) =>
            state.filter((item) => item.movieId !== movie.id)
          );
        })
        .catch((err) => console.log(`Ошибка: ${err}`));
    }
  };

  const handleDeleteMovieClick = (movie) => {
    mainApi
      .deleteMovie(movie._id)
      .then(() => {
        setSavedBfMovies((state) =>
          state.filter((item) => item.movieId !== movie.movieId)
        );
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
  };

  const handleRegister = ({ name, email, password }) => {
    setIsFetching(true);
    register(name, email, password)
      .then(() => {
        handleAuthorize({ email, password });
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
        setRegisterError(err);
      })
      .finally(() => {
        setIsFetching(false);
      });
  };

  const handleAuthorize = ({ email, password }) => {
    setIsFetching(true);
    authorize(email, password)
      .then((data) => {
        setIsLoggedIn(true);
        localStorage.setItem("jwt", data.token);
        handleCheckToken();
        navigate("/movies");
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
        setIsSignInSuccessful(false);
        setIsPopupOpen(true);
        setIsLoggedIn(false);
      })
      .finally(() => {
        setIsFetching(false);
      });
  };

  const handleCheckToken = useCallback(() => {
    if (localStorage.getItem('jwt')) {
      let token = localStorage.getItem("jwt");
      setSearchError('');
      checkToken(token)
        .then((data) => {
          const { _id, name, email } = data;
          setIsLoggedIn(true);
          setCurrentUser({ _id, name, email });
        })
        .catch((err) => console.log(`Ошибка: ${err}`))
        .finally(() => {
          console.log("register and login are over, you're redirecting to /movies");
        });
    } else {
      handleSignOut();
    }
  }, []);

  useEffect(() => {
    handleCheckToken();
  }, [handleCheckToken]);

  const handleUpdateProfile = ({ name, email }) => {
    setIsFetching(true);
    mainApi
      .updateProfile(name, email)
      .then((userData) => {
        setCurrentUser({
          name: userData.name,
          email: userData.email,
        });
        setIsProfileUpdateSuccessful(true);
        setIsPopupOpen(true);
      })
      .catch((err) => console.log(`Ошибка: ${err}`))
      .finally(() => {
        setIsFetching(false)
      });
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
    setCurrentUser({
      _id: '',
      name: '',
      email: '',
    });
    localStorage.removeItem('jwt');
    localStorage.removeItem('bfMovies');
    localStorage.removeItem('bfMoviesSearchQuery');
    localStorage.removeItem('bfMoviesIsShort');
    setBfMovies(null);
    setBfMoviesSearchQuery('');
    setBfMoviesIsShort(false);
    setBfMoviesInputValue('');
    setSavedBfMovies(null);
    setSavedBfMoviesSearchQuery('');
    setSavedBfMoviesIsShort(false);
    setSavedBfMoviesInutValue('');
  };

  const filteredMovies = useCallback((movies, searchQuery, isMovieShort) => {
    if (!movies) {
      return null;
    }
    return movies.filter((movie) =>
      (isMovieShort ? movie.duration <= 40 : movie) &&
      movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase()));
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>

        <Route
          exact
          path="/signup"
          element={isLoggedIn ?
            <Navigate to="/movies" /> :
            <Register
            handleRegister={handleRegister}
            isLoggedIn={isLoggedIn}
            isFetching={isFetching}
            registerError={registerError}
          />}
        />

        <Route
          exact
          path="/signin"
          element={isLoggedIn ?
            <Navigate to="/movies" /> :
            <Login
            handleLogin={handleAuthorize}
            isFetching={isFetching}
            isSignInSuccessful={isSignInSuccessful}
            isPopupOpen={isPopupOpen}
            handleClosePopup={closePopup}
          />}
        />

        <Route
          exact
          path="/"
          element={
            isLoggedIn ?
              <Navigate to="/movies" /> :
              <>
                <Header isLoggedIn={isLoggedIn} />
                <Main />
                <Footer />
              </>}
        />

        <Route
          exact
          path="/movies"
          element={
            <ProtectedRoute
              isLoggedIn={isLoggedIn}
            >
              <>
                <Header isLoggedIn={isLoggedIn} />
                <Movies
                  isLoadingBfMovies={isLoadingBfMovies}
                  bfMovies={filteredMovies(bfMovies, bfMoviesSearchQuery, bfMoviesIsShort)}
                  savedBfMovies={savedBfMovies}
                  convertDuration={convertDuration}
                  handleSaveMovieClick={handleSaveMovieClick}
                  handleDeleteMovieClick={handleDeleteMovieClick}
                  searchError={searchError}
                  isPopupOpen={isPopupOpen}
                  handleClosePopup={closePopup}
                  setBfMoviesInputValue={setBfMoviesInputValue}
                  bfMoviesInputValue={bfMoviesInputValue}
                  setBfMoviesIsShort={setBfMoviesIsShort}
                  bfMoviesIsShort={bfMoviesIsShort}
                  setBfMoviesSearchQuery={setBfMoviesSearchQuery}
                  windowWidth={windowWidth}
                  initialCardsQuantity={initialCardsQuantity}
                  setInitialCardsQuantity={setInitialCardsQuantity}
                ></Movies>
                <Footer />
              </>
            </ProtectedRoute>
          } />

        <Route
          exact
          path="/saved-movies"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Header isLoggedIn={isLoggedIn} />
              <SavedMovies
                movies={filteredMovies(savedBfMovies, savedBfMoviesSearchQuery, savedBfMoviesIsShort)}
                convertDuration={convertDuration}
                setSavedBfMoviesSearchQuery={setSavedBfMoviesSearchQuery}
                savedBfMoviesIsShort={savedBfMoviesIsShort}
                setSavedBfMoviesIsShort={setSavedBfMoviesIsShort}
                savedBfMoviesInputValue={savedBfMoviesInputValue}
                setSavedBfMoviesInutValue={setSavedBfMoviesInutValue}
                handleDeleteMovieClick={handleDeleteMovieClick}
                windowWidth={windowWidth}
              />
              <Footer />
            </ProtectedRoute>
          }
        />

        <Route
          exact
          path="/profile"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Header isLoggedIn={isLoggedIn} />
              <Profile
                handleSignOut={handleSignOut}
                handleUpdateProfile={handleUpdateProfile}
                isFetching={isFetching}
                isProfileUpdateSuccessful={isProfileUpdateSuccessful}
                isPopupOpen={isPopupOpen}
                handleClosePopup={closePopup}
              />
            </ProtectedRoute>
          }
        />

        <Route
          exact
          path="*"
          element={<NotFound />}
        />

      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;

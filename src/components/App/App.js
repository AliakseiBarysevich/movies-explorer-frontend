import './App.css';
import {
  Route,
  Routes,
  // useHistory,
  // Redirect
} from 'react-router-dom';
import Header from '../Header/Header';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';
import { useState } from 'react';
import ErrorPopup from '../ErrorPopup/ErrorPopup';

function App() {
  const [isErrorPopupOpen, setIsErrorPopupOpen] = useState(false);

  function closeErrorPopup() {
    setIsErrorPopupOpen(false);
  }

  return (
    <>
      <Routes>
        <Route
          path="/signup"
          element={<Register />}
        />

        <Route
          path="/signin"
          element={<Login />}
        />

        <Route
          exact
          path="/"
          element={
            <>
              <Header isLoggedIn={false} />
              <Main />
              <Footer />
            </>}
        />

        <Route
          exact
          path="/movies"
          element={
            <>
              <Header isLoggedIn={true} />
              <Movies />
              <Footer />
              {/* Popup below is used to present its work */}
              <ErrorPopup isOpen={isErrorPopupOpen} onClose={closeErrorPopup} errorText={'Нешта здарылася!'} />
            </>}
        />

        <Route
          exact
          path="/saved-movies"
          element={
            <>
              <Header isLoggedIn={true} />
              <SavedMovies />
              <Footer />
            </>}
        />

        <Route
          exact
          path="/profile"
          element={
            <>
              <Header isLoggedIn={true} />
              <Profile username='Алёша' useremail='barysevichaliaksei@yandex.by' />
            </>}
        />

        <Route
          exact
          path="/not-found"
          element={<NotFound />}
        />
      </Routes>
    </>
  );
}

export default App;

import React from "react";
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import movieOne from '../../images/movie-1.jpg';
import movieTwo from '../../images/movie-2.jpg';
import movieThree from '../../images/movie-3.jpg';
import movieFour from '../../images/movie-4.jpg';
import movieFive from '../../images/movie-5.jpg';
import movieSix from '../../images/movie-6.jpg';
import movieSeven from '../../images/movie-7.jpg';
import movieEight from '../../images/movie-8.jpg';
import movieNine from '../../images/movie-9.jpg';
import movieTen from '../../images/movie-10.jpg';
import movieEleven from '../../images/movie-11.jpg';
import movieTwelve from '../../images/movie-12.jpg';


function MoviesCardList() {

  return (
    <section className="movie-cards">
        <MoviesCard 
            movieLink={movieOne}
            movieName={'33 слова о дизайне'}
            movieLength={'1ч 17м'}
        />
        <MoviesCard 
            movieLink={movieTwo}
            movieName={'Киноальманах «100 лет дизайна»'}
            movieLength={'1ч 17м'}
            isSaved={true}
        />
        <MoviesCard 
            movieLink={movieThree}
            movieName={'В погоне за Бенкси'}
            movieLength={'1ч 17м'}
        />
        <MoviesCard 
            movieLink={movieFour}
            movieName={'Баския: Взрыв реальности'}
            movieLength={'1ч 17м'}
        />
        <MoviesCard 
            movieLink={movieFive}
            movieName={'Бег это свобода'}
            movieLength={'1ч 17м'}
        />
        <MoviesCard 
            movieLink={movieSix}
            movieName={'Книготорговцы'}
            movieLength={'1ч 17м'}
        />
        <MoviesCard 
            movieLink={movieSeven}
            movieName={'Когда я думаю о Германии ночью'}
            movieLength={'1ч 17м'}
        />
        <MoviesCard 
            movieLink={movieEight}
            movieName={'Gimme Danger: История Игги и The Stooges'}
            movieLength={'1ч 17м'}
        />
        <MoviesCard 
            movieLink={movieNine}
            movieName={'Дженис: Маленькая девочка грустит'}
            movieLength={'1ч 17м'}
        />
        <MoviesCard 
            movieLink={movieTen}
            movieName={'Соберись перед прыжком'}
            movieLength={'1ч 17м'}
        />
        <MoviesCard 
            movieLink={movieEleven}
            movieName={'Пи Джей Харви: A dog called money'}
            movieLength={'1ч 17м'}
        />
        <MoviesCard 
            movieLink={movieTwelve}
            movieName={'По волнам: Искусство звука в кино'}
            movieLength={'1ч 17м'}
        />
    </section>
  );
}

export default MoviesCardList;

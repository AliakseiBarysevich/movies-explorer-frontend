import './Footer.css';
import React from 'react';

function Footer() {

  return (
    <footer className='footer'>
      <p className='footer__heading'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__info-container'>
        <p className='footer__item footer__copyright'>&copy; {new Date().getFullYear()}</p>
        <nav className='footer__links-container'>
          <ul className='footer__links-list'>
            <li className='footer__link-item'>
              <a className='footer__item footer__link footer__yandex-practicum' href='https://practicum.yandex.ru/' target='_blank' rel='noreferrer'>Яндекс.Практикум</a>
            </li>
            <li className='footer__link-item'>
              <a className='footer__item footer__link footer__github' href='https://github.com/AliakseiBarysevich' target='_blank' rel='noreferrer'>Github</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;

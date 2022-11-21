import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'

const Footer: React.FC = (): ReactElement => {
  return (
    <div className='footer'>
      <div className="background-footer">
        <img src="/footerBG.png" alt="404" />
      </div>
      <div className="footer__container">
          <div className="footer__content">
            <div className="footer__links">
              <Link to='/' className="footer__logo"><img className='footer__img' src="/svg/logo.svg" alt="404" /></Link>
              <p className="footer__text">Свежее дыхание в корпоративной жизни и жизни корпоративной дыхание свежее </p>
              <Link to='/' className='footer__tel'>+380 630 130 103</Link>
              <Link to='/' className='footer__email'>example@gmail.com</Link>
              <div className="footer__famous">
                <a href="https://www.facebook.com/" target='_blank' className="footer__fomous" rel="noreferrer"><img src="" alt="404" /></a>
                <a href="https://www.instagram.com/" target='_blank' className="footer__fomous" rel="noreferrer"><img src="" alt="404" /></a>
                <a href="https://www.linkedin.com/" target='_blank' className="footer__fomous" rel="noreferrer"><img src="" alt="404" /></a>
              </div>
            </div>
            <div className="footer__category">
              <p className="footer__title">Категории</p>
              <ul className="footer__list">
                <li className="footer__item">Пошив</li>
                <li className="footer__item">Все товары</li>
                <li className="footer__item">Наборы</li>
               <li className="footer__item">Производство</li>
              </ul>
            </div>
            <div className="footer__information">
            <p className="footer__title">Информация</p>
            <ul className="footer__information">
              <li className="footer__item">О нас</li>
              <li className="footer__item">ЧаВо</li>
              <li className="footer__item">Контакты</li>
            </ul>
            </div>
            <div className="footer__contact">123</div>
          </div>
          <p className="footer__signature">© 2022 . All rights reserved. Политика конфиденциальности</p>
      </div>
    </div>

  )
}

export default Footer

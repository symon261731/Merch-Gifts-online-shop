import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'

const Footer: React.FC = (): ReactElement => {
  return (
    <div className='footer'>
      {/* <div className="background-footer">
        <img src="/footerBG.png" alt="404" />
      </div> */}
      <div className="footer__container">
          <div className="footer__content">
            <div className="footer__links">
              <Link to='/' className="footer__logo"><img className='footer__img' src="/svg/logo.svg" alt="404" /></Link>
              <p className="footer__text">Свежее дыхание в корпоративной жизни и жизни корпоративной дыхание свежее </p>
              <Link to='/' className='footer__tel'>+380 630 130 103</Link>
              <Link to='/' className='footer__email'>example@gmail.com</Link>
              <div className="footer__famous">
                <a href="https://www.facebook.com/" target='_blank' className="footer__fomous" rel="noreferrer"><img src="/svg/facebook.svg" alt="404" /></a>
                <a href="https://www.instagram.com/" target='_blank' className="footer__fomous" rel="noreferrer"><img src="/svg/instagram.svg" alt="404" /></a>
                <a href="https://www.linkedin.com/" target='_blank' className="footer__fomous" rel="noreferrer"><img src="/svg/link.svg" alt="404" /></a>
              </div>
            </div>
            <div className="footer__category">
              <p className="footer__title">Категории</p>
              <ul className="footer__list">
                <Link to='/' className="footer__item">Пошив</Link>
                <Link to='/' className="footer__item">Все товары</Link>
                <Link to='/' className="footer__item">Наборы</Link>
                <Link to='/' className="footer__item">Производство</Link>
              </ul>
            </div>
            <div className="footer__information">
            <p className="footer__title">Информация</p>
            <ul className="footer__list">
              <Link to='/' className="footer__item">О нас</Link>
              <Link to='/' className="footer__item">ЧаВо</Link>
              <Link to='/' className="footer__item">Контакты</Link>
            </ul>
            </div>
            <div className="footer__contact">
              <p className="footer__title">Связаться с менеджером</p>
              <p className="footer__text footer__text_margin">Есть вопрос на который не нашли ответ? Оставьте контакт и наш менеджер свяжеться с вами</p>
              <form className='footer__form' onSubmit={(e) => e.preventDefault()}>
              <input name='telephone' placeholder='Номер телефона' type="text" className="footer__input" />
              <button type='submit' className='footer__button'></button>
              </form>
            </div>
          </div>
          <p className="footer__signature">© 2022 . All rights reserved.  <Link className='footer__signature footer__signature_underline' to='/'>Политика конфиденциальности</Link></p>
      </div>
    </div>

  )
}

export default Footer

import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import './Header.scss'

const Header: React.FC = (): ReactElement => {
  return (
    <div className='header_margin'>
          <div className="background">
            <img className='background-image' src="bg.png" alt="404" />
          </div>
          <div className="header__container">
            <div className="header__info">
              <Link to='/' className="header__picture">
                 <img src="svg/logo.svg" alt="404" className='header__logo' />
              </Link>
              <input type="text" className='header__input' placeholder='Поиск' />
              <button type='button' className='header__button green-button'>+380 630 130 103</button>
              <div className="header__fitcha">
              <a href='/' className='header__link-profile'><img src="svg/user.svg" className='header__img-profile' alt="404"/></a>
              <p className='header__white-dark'>RU/ENG</p>
              </div>
            </div>
          </div>
            <NavBar></NavBar>
    </div>
  )
}

export default Header

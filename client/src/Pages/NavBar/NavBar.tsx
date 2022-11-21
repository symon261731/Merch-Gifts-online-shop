import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.scss'

const NavBar: React.FC = (): ReactElement => {
  return (
        <nav className="header__navbar navbar">
          <ul className='navbar__menu'>
            <li className="navbar__item"><Link to="/sets" className='navbar__link'>Наборы</Link></li>
            <li className="navbar__item"><a href="/" className='navbar__link'>Все Товары</a></li>
            <li className="navbar__item"><Link to="/sewing" className='navbar__link'>Пошив</Link></li>
            <li className="navbar__item"><a href="/" className='navbar__link'>Производство</a></li>
            <li className="navbar__item"><Link to="/info" className='navbar__link'>Информация</Link></li>
          </ul>
          <div className="navbar__second-path">
          <a className='navbar__sale' href="/">Шопперы со скидкой - 25%</a>
          <img className='navbar__packet' src="/packet.png" alt="" />
          </div>
        </nav>
  )
}

export default NavBar

import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import Garanty from '../Garanty/Garanty'
import OneCard from './OneCard/OneCard'
import './Sets.scss'

const Sets: React.FC = (): ReactElement => {
  const arr: [number, number, number, number] = [1, 2, 3, 4]
  return (
        <div className="sets">
          <div className="sets__container">
            <div className="sets__images">
              <img className='sets__first-image' src="/sets/first.png" alt="first" />
              <img className='sets__second-image' src="/sets/second.png" alt="second" />
            </div>
            <div className="sets__intro">
              <h2 className="sets__title">ПОдарочные наборы это необычные......</h2>
              <p className="sets__text">Почему? Потому что это ощутимо и это волнует. Это вовлекает, повышает осведомленность и вызывает эмоции.</p>
              <div className="sets__buttons">
                <Link className="sets__btn purple-button" to='/'> Выбрать готовый бокс</Link>
                <Link className='sets__link' to='/'>Создать свой</Link>
              </div>
            </div>
            <div className="sets__cards cards">
              <h3 className="cards__title">Готовые Наборы</h3>
              <div className="cards__list">
              {arr.map((el, index) => <OneCard key={ index } />)}
              </div>
              <div className="cards__func">
              <button type='button' className="cards__spoiler spoiler">
                <p className="spoiler__text">Показать ещё</p>
                <img src="/svg/spoiler-arrow.svg" className='spoiler__arrow' alt="nope" />
              </button>
              </div>
            </div>
            <div className="sets__garanty">
            <Garanty/>
            </div>
            <div className="sets__form  creative">
              <img src="/sets/Pangolin.svg" alt="creative" className='creative__item' />
              <h2 className="creative__title">Как создать бокс по Вашей идее?</h2>
              <p className="creative__text">У вас своя уникальная идея для бокса или хотите все стилизовать к одному виду?</p>
              <div className="creative__ask">
                <p className="creative__offer">Введите свои контактные данные, и наш менеджер свяжется с Вами <span className='creative__green'> в течении 15 минут </span> </p>
                <form onSubmit={(e) => e.preventDefault()} className='creative__form'>
                  <input type="text" className="creative__input" name='name' />
                  <input type="email" className="creative__input" name='email' />
                  <input type="tel" className="creative__input" name='phone' />
                  <button type='submit' className='creative__button green-button'>Заказать</button>
                </form>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Sets

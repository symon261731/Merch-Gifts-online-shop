import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import './Sets.scss'

const Sets: React.FC = (): ReactElement => {
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
              <div className="cards__one-card">
                <img src="/sets/setOne.jpg" alt="oneSet" className="cards__image" />
                <p className="cards__name">EL003 Elleven Checkpoint-Friendly Compu-Backpack</p>
                <p className="cards__subname">EL003 Elleven Checkpoint-Friendly Compu-Backpack</p>
                <div className="cards__colors">
                  <button className="cards__item"></button>
                  <button className="cards__item"></button>
                </div>
                <div className="cards__footer">
                  <div className="cards__price">
                    <p className="cards__text">From Price</p>
                    <p className="cards__number">$76.43</p>
                  </div>
                  <button className="cards__buy">
                    <img src="/svg/shopping-basket.svg" alt="trush" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Sets

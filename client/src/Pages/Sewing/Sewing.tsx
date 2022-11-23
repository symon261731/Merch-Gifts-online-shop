import React, { ReactElement } from 'react'
import Garanty from '../Garanty/Garanty'
import './Sewing.scss'

const Sewing: React.FC = (): ReactElement => {
  return (
        <div className="sewing">
          <div className="sewing__container">
            <h2 className="sewing__title sewing__title_margin-top">Современный мерч создает современные бренды</h2>
            <p className="sewing__text">
            Почему? Потому что это ощутимо и это волнует. Это вовлекает, повышает осведомленность и вызывает эмоции.
            Наша команда всегда погружается в концепт заказа для того, чтобы предложить вам лучшее решение, при этом оптимизировать затраты.
            У нас широкий ассортимент  готовых моделей, так же изготовим любую продукцию по Вашему дизайну.
            </p>
            <img src="/merch.png" alt="merch" className='sewing__merch' />
            <div className="sewing__info">
              <button className='sewing__butto purple-button' type='button'>Оставить Заявку</button>
              <p className="sewing__number">Минимальное кол-во: 25</p>
            </div>
            <div className="sewing__we-can we-can">
              <h2 className="we-can__title">Мы можем пошить</h2>
              <p className="we-can__sub-title">Товары, которые наиболее часто заказывают наши клиенты</p>
              <div className="we-can__cards">

                <div className="we-can__one-card">
                  <div className="we-can__picture">
                  <img src="/oneCardSewing.jpg" alt="one-card" className='we-can__image' />
                  </div>
                  <p className="we-can__item">Шапки</p>
                </div>

                <div className="we-can__one-card">
                  <div className="we-can__picture">
                  <img src="/oneCardSewing.jpg" alt="one-card" className='we-can__image' />
                  </div>
                  <p className="we-can__item">Худи</p>
                </div>

                <div className="we-can__one-card">
                  <div className="we-can__picture">
                  <img src="/oneCardSewing.jpg" alt="one-card" className='we-can__image' />
                  </div>
                  <p className="we-can__item">Свитшоты</p>
                </div>

                <div className="we-can__one-card">
                  <div className="we-can__picture">
                  <img src="/oneCardSewing.jpg" alt="one-card" className='we-can__image' />
                  </div>
                  <p className="we-can__item">Футболки</p>
                </div>
                <Garanty></Garanty>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Sewing

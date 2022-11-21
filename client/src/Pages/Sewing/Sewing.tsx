import React, { ReactElement } from 'react'
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

              </div>
            </div>
            <div className="sewing__garanty garanty">
              <div className="garanty__flex">
                <div className="garanty__info">
                  <h3 className="garanty__title">Сроки изготовления</h3>
                  <p className="garanty__info">
                  Сроки пошива будут зависеть от объема Вашего заказа и сложности моделей. В среднем изготовление корпоративной продукции занимает  <span className='garanty__bold'> 10 -18 рабочих дней </span> с момента утверждения всех деталей.
                  <br></br>
                  <br></br>
                  <span className='garanty__purple-color'>
                  Если же Вам нужно на вчера - Вы можете согласовать такие условия со своими личным менеджером.
                  </span>
                  </p>
                </div>
                <div className="garanty__info">
                <h3 className="garanty__title">Стоимость</h3>
                  <p className="garanty__info">
                  Стоимость производства брендированной продукции  на заказ  расчитывается
                  индивидуально. Цена зависит от сложности работы, брендирования, материалов, тиража
                  и срочности. Мы подберем для вас оптимальный вариант в соответствии с вашим бюджетом
                  </p>
                </div>
                <div className="garanty__info">
                <h3 className="garanty__title">Брендирование</h3>
                  <p className="garanty__info">
                  Стоимость производства брендированной продукции  на заказ  расчитывается
                  индивидуально. Цена зависит от сложности работы, брендирования, материалов, тиража
                  и срочности. Мы подберем для вас оптимальный вариант в соответствии с вашим бюджетом
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Sewing

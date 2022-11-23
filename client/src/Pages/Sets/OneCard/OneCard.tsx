import React, { ReactElement } from 'react'
import '../Sets.scss'

const OneCard: React.FC = (): ReactElement => {
  return (
    <div className="cards__one-card">
    <img src="/sets/setOne.jpg" alt="oneSet" className="cards__image" />
    <div className="cards__content">
      <p className="cards__name">EL003 Elleven Checkpoint-Friendly Compu-Backpack</p>
      <p className="cards__subname">EL003 Elleven Checkpoint-Friendly Compu-Backpack</p>
      <div className="cards__colors">
       <button className="cards__item"></button>
        <button className="cards__item cards__item_green"></button>
      </div>
      <div className="cards__footer">
       <div className="cards__price">
          <p className="cards__text">From Price</p>
          <p className="cards__number">$76.43</p>
        </div>
        <button className="cards__buy">
          <img className='cards__btn' src="/svg/shopping-basket.svg" alt="trush" />
        </button>
      </div>
    </div>
  </div>
  )
}

export default OneCard

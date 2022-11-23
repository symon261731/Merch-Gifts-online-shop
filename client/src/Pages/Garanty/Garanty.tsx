import React, { ReactElement } from 'react'

const Garanty: React.FC = (): ReactElement => {
  return (
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
  )
}

export default Garanty

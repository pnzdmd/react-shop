import BasketItem from './BasketItem';

function BasketList(props) {
  const { order = [], handleBasketShow = Function.prototype } = props;
  // общая цена
  const totalPrice = order.reduce((sum, el) => {
    return sum + el.regularPrice * el.quantity;
  }, 0);
  return (
    <ul className='collection basket-list'>
      <li className='collection-item active'>Корзина</li>
      {order.length ? (
        order.map((item) => <BasketItem key={item.mainId} {...item} />)
      ) : (
        <li className='collection-item'>Корзина пуста</li>
      )}
      <li className='collection-item active'>
        Общая стоимость: {totalPrice} руб.
      </li>
      <i className='material-icons basket-close' onClick={handleBasketShow}>
        clear
      </i>
    </ul>
  );
}

export { BasketList };

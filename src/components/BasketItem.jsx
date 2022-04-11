function BasketItem(props) {
  const { mainId, displayName, regularPrice, quantity } = props;
  return (
    <div>
      <li className='collection-item'>
        {displayName} x {quantity} шт. = {regularPrice} руб.
        <span className='secondary-content'>
          <i className='material-icons basket-delete'>clear</i>
        </span>
      </li>
    </div>
  );
}

export default BasketItem;

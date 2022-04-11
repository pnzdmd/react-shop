function BasketItem(props) {
  const {
    mainId,
    displayName,
    regularPrice,
    quantity,
    removeFromBasket = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props;
  return (
    <div>
      <li className='collection-item'>
        {displayName}{' '}
        <i
          onClick={() => decQuantity(mainId)}
          className='material-icons basket-quantity'
        >
          remove
        </i>
        x{quantity}
        <i
          onClick={() => incQuantity(mainId)}
          className='material-icons basket-quantity'
        >
          add
        </i>{' '}
        шт. = {regularPrice} руб.
        <span
          className='secondary-content'
          onClick={() => removeFromBasket(mainId)}
        >
          <i className='material-icons basket-delete'>clear</i>
        </span>
      </li>
    </div>
  );
}

export default BasketItem;

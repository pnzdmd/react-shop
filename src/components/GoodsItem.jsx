function GoodsItem(props) {
  const {
    mainId,
    displayName,
    displayDescription,
    displayAssets: [{ background }],
    price: { regularPrice },
    addToBasket = Function.prototype,
  } = props;
  return (
    <div className='card'>
      <div className='card-image'>
        <img src={background} alt={displayName} />
      </div>
      <div className='card-content'>
        <span className='card-title'>{displayName}</span>
        <p>{displayDescription}</p>
      </div>
      <div className='card-action'>
        <button
          onClick={() =>
            addToBasket({
              mainId,
              displayName,
              regularPrice,
            })
          }
          className='btn'
        >
          Купить
        </button>
        <span style={{ fontSize: '1.8rem' }} className='right'>
          {regularPrice} руб.
        </span>
      </div>
    </div>
  );
}

export { GoodsItem };

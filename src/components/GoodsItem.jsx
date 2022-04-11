function GoodsItem(props) {
  const {
    mainId,
    displayName,
    displayDescription,
    displayAssets: [{ background }],
    price: { regularPrice },
  } = props;
  return (
    <div className='card' id={mainId}>
      <div className='card-image'>
        <img src={background} alt={displayName} />
      </div>
      <div className='card-content'>
        <span className='card-title'>{displayName}</span>
        <p>{displayDescription}</p>
      </div>
      <div className='card-action'>
        <button className='btn'>Купить</button>
        <span style={{ fontSize: '1.8rem' }} className='right'>
          {regularPrice} руб.
        </span>
      </div>
    </div>
  );
}

export { GoodsItem };

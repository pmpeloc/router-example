const Card = ({ product }) => {
  return (
    <div>
      <p>{product.title}</p>
      <p>{product.price}</p>
      <img src={product.thumbnail} alt={product.title} />
    </div>
  );
};

export default Card;

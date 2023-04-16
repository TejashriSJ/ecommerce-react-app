function Product(props) {
  const { title, price, category, image, rating } = props.product;

  return (
    <div className="display-single">
      <img src={image} alt="product-img"></img>
      <p className="category">{category}</p>
      <p className="title">{title}</p>
      <p className="price">
        <span className="dollor">$</span>
        {price}
      </p>
      <p className="rating">
        Rating: {rating.rate} ({rating.count})
      </p>
    </div>
  );
}
export default Product;

import { useNavigate } from "react-router-dom";

function Product(props) {
  const { id, title, price, category, image, rating } = props.product;

  const navigate = useNavigate();

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
        Rating:
        {/* <i
          className="fa-solid fa-star fa-sm"
          style={{ color: "#edcf07" }}
        ></i>{" "} */}
        {rating.rate} ({rating.count})
      </p>
    </div>
  );
}
export default Product;

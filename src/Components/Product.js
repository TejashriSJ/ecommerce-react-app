import { Link, useNavigate } from "react-router-dom";

function Product(props) {
  const { id, title, price, category, image, rating } = props.product;

  const navigate = useNavigate();

  return (
    <div className="display-single">
      <img
        src={image}
        alt="product-img"
        onClick={() => {
          navigate(`/product/${id}`);
        }}
      ></img>
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
      <div className="d-flex justify-content-between mb-2 gap-5">
        {" "}
        <button
          className="btn btn-danger btn-sm"
          onClick={props.onRemove}
          id={id}
        >
          Remove
        </button>
        <Link to="/updateProduct">
          <button
            id={id}
            className="btn btn-warning btn-sm"
            onClick={props.onEdit}
          >
            Update
          </button>
        </Link>
      </div>
    </div>
  );
}
export default Product;

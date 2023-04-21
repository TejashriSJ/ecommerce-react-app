import { Link } from "react-router-dom";
import { useState } from "react";

function Product(props) {
  const { id, title, price, category, image, rating } = props.product;
  const [btnClicked, setBtnClicked] = useState(false);

  const onClickPrompt = (event) => {
    if (event.target.name === "yes") {
      props.onRemove(id);
    }
    setBtnClicked(false);
  };

  const removeProduct = (event) => {
    setBtnClicked(true);
  };

  return (
    <div className="display-single">
      <Link className="image" to={`/product/${id}`}>
        <img src={image} alt="product-img"></img>
      </Link>

      <p className="category">{category}</p>
      <p className="title">{title}</p>
      <p className="price">
        <span className="dollor">$</span>
        {price}
      </p>
      <div className="rating d-flex gap-5 mb-2">
        <div>
          <i
            className="fa-solid fa-star fa-sm"
            style={{ color: "#f0dc00" }}
          ></i>
          {rating.rate}
        </div>
        <div>
          <i className="fa-solid fa-user fa-sm"></i> ({rating.count})
        </div>
      </div>
      <div className="d-flex justify-content-between mb-2 gap-5">
        {" "}
        <button
          className="btn btn-danger btn-sm"
          onClick={removeProduct}
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
      {btnClicked && (
        <div className="prompt d-block mx-auto">
          <p>Are you sure you want to remove the item</p>
          <div>
            <button
              className="btn btn-success"
              id={props.id}
              name="yes"
              onClick={onClickPrompt}
            >
              Yes
            </button>
            <button
              className="btn btn-danger"
              name="no"
              onClick={onClickPrompt}
            >
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default Product;

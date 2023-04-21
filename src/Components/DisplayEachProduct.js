import { useState } from "react";

function DisplayEachProduct(props) {
  const { id, title, price, category, image, rating, description } = props.data;

  const [btnState, setBtnState] = useState(
    props.cartData.includes(id) ? "Added to Cart" : "Add to Cart"
  );

  return (
    <>
      <div className="eachProduct container d-flex flex-column align-items-center">
        <img src={image} alt="product"></img>
        <div className="d-flex flex-column align-items-center">
          <p className="category"> {category}</p>
          <h3 className="title w-100">{title}</h3>
          <p className="text-center">{description}</p>
          <p>
            Price: <span className="dollor ">$ </span>
            {price}
          </p>
          Rating:
          <div className="each-rating d-flex mt-2   text-center">
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
          <button
            className={`btn ${
              btnState === "Add to Cart" ? "btn-primary" : "btn-secondary"
            } align-self-center`}
            onClick={(event) => {
              props.setCartData([...props.cartData, id]);

              event.target.style.pointerEvents = "none";
              event.target.style.backgroundColor = "light gray";
              setBtnState("Added to Cart");
            }}
          >
            {btnState}
          </button>
        </div>
      </div>
    </>
  );
}

export default DisplayEachProduct;

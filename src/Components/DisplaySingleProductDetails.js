import React, { Component } from "react";

import { connect } from "react-redux";

import { ADD_PRODUCT_TO_CART } from "../Redux/actionTypes";

class DisplaySingleProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productDetails: { ...this.props.productDetails },
      btnState: this.props.cartProducts.includes(this.props.productDetails.id)
        ? "Added to Cart"
        : "Add to Cart",
    };
  }

  render() {
    let { id, image, category, title, description, price, rating } =
      this.state.productDetails;
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
                this.state.btnState === "Add to Cart"
                  ? "btn-primary"
                  : "btn-secondary"
              } align-self-center`}
              onClick={(event) => {
                this.props.addToCart(id);
                event.target.style.pointerEvents = "none";
                event.target.style.backgroundColor = "light gray";
                this.setState({
                  btnState: "Added to cart",
                });
              }}
            >
              {this.state.btnState}
            </button>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartProducts: state.cart.cartProducts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (productId) => {
      dispatch({
        type: ADD_PRODUCT_TO_CART,
        payload: productId,
      });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplaySingleProductDetails);

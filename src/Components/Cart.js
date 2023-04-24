import React, { Component } from "react";
import { connect } from "react-redux";

import noItemsImg from "../Images/noItemsInCart.png";

import DisplayCartProductDetails from "./DisplayCartProductDetails";

class Cart extends Component {
  render() {
    return (
      <>
        {this.props.cartProducts.length !== 0 &&
          this.props.cartProducts.map((cartProduct) => {
            return (
              <DisplayCartProductDetails
                key={cartProduct.id}
                cartProduct={cartProduct}
              />
            );
          })}
        {this.props.cartProducts.length === 0 && (
          <img
            src={noItemsImg}
            alt="No Items In Cart"
            className="container mx-auto d-block"
          ></img>
        )}
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cartProducts: state.cart.cartProducts,
  };
};

export default connect(mapStateToProps)(Cart);

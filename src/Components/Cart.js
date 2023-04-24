import React, { Component } from "react";
import { connect } from "react-redux";

import noItemsImg from "../Images/noItemsInCart.png";

import DisplayCartProductDetails from "./DisplayCartProductDetails";

class Cart extends Component {
  cartProductDetails = this.props.cartProducts.map((cartProductID) => {
    return this.props.products.find((product) => {
      return product.id === cartProductID;
    });
  });

  render() {
    return (
      <>
        {this.cartProductDetails.length !== 0 &&
          this.cartProductDetails.map((cartProduct) => {
            return (
              <DisplayCartProductDetails
                key={cartProduct.id}
                cartProduct={cartProduct}
              />
            );
          })}
        {this.cartProductDetails.length === 0 && (
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
    products: state.products.listOfProducts,
  };
};

export default connect(mapStateToProps)(Cart);

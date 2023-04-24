import React, { Component } from "react";
import { connect } from "react-redux";

import DisplaySingleProductDetails from "./DisplaySingleProductDetails";

class SingleProductDetails extends Component {
  id = window.location.href.split("/").slice(4);

  singleProductDetails = this.props.products.find((product) => {
    return String(product.id) === this.id[0];
  });

  render() {
    return (
      <DisplaySingleProductDetails productDetails={this.singleProductDetails} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products.listOfProducts,
  };
};

export default connect(mapStateToProps)(SingleProductDetails);

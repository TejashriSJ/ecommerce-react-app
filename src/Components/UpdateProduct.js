import { React, Component } from "react";
import { connect } from "react-redux";

import UpdateProductForm from "./UpdateProductForm";

class UpdateProduct extends Component {
  id = window.location.href.split("/").slice(4);

  dataToBeUpdated = this.props.products.find((product) => {
    return product.id === Number(this.id);
  });

  render() {
    return <UpdateProductForm dataToBeUpdated={this.dataToBeUpdated} />;
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products.listOfProducts,
  };
};
export default connect(mapStateToProps)(UpdateProduct);

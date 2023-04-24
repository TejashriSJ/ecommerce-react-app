import React, { Component } from "react";
import { connect } from "react-redux";
import Product from "./Product";

class Products extends Component {
  render() {
    return (
      <div className="display-all">
        {this.props.products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.products.listOfProducts,
  };
};

export default connect(mapStateToProps)(Products);

import React, { Component } from "react";
import Product from "./Product";

class Products extends Component {
  render() {
    return (
      <div className="display-all">
        {this.props.products.map((product) => {
          return <Product product={product} />;
        })}
      </div>
    );
  }
}
export default Products;

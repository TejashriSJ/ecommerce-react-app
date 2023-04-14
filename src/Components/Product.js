import React, { Component } from "react";

class Product extends Component {
  render() {
    console.log(this.props.product);
    const { title, price, category, image, rating } = this.props.product;
    return (
      <div className="display-single">
        <img src={image} alt="product-img"></img>
        <p className="category">{category}</p>
        <p className="title">{title}</p>
        <p className="price">
          <span className="dollor">$</span>
          {price}
        </p>
        <p className="rating">
          Rating: {rating.rate} ({rating.count})
        </p>
      </div>
    );
  }
}
export default Product;

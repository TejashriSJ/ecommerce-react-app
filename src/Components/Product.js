import React, { Component } from "react";
import { connect } from "react-redux";
import { REMOVE_PRODUCT } from "../Redux/actionTypes";
import { Link } from "react-router-dom";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = { removeBtnClicked: false };
  }

  onClickRemove = (id) => {
    this.setState({ removeBtnClicked: true });
  };
  onClickPrompt = (event) => {
    if (event.target.name === "yes") {
      this.props.removeProduct(this.props.product.id);
    }
    this.setState({ removeBtnClicked: false });
  };

  render() {
    const { id, title, price, category, image, rating } = this.props.product;
    return (
      <div className="display-single">
        <Link to={`/product/${id}`}>
          <img src={image} alt="product-img"></img>
        </Link>
        <p className="category mt-2">{category}</p>
        <p className="title">{title}</p>
        <p className="price">
          <span className="dollor">$</span>
          {price}
        </p>
        <p className="rating">
          Rating: {rating.rate} ({rating.count})
        </p>
        <div className="d-flex gap-5 mb-2">
          <button
            className="btn btn-danger"
            onClick={() => {
              this.onClickRemove(id);
            }}
          >
            Remove
          </button>
          <Link to={`/updateProduct/${id}`}>
            <button className="btn btn-warning text-white">Update</button>
          </Link>
        </div>
        {this.state.removeBtnClicked && (
          <div className="prompt d-block mx-auto">
            <p>Are you sure you want to remove the Product</p>
            <div>
              <button
                className="btn btn-success"
                name="yes"
                onClick={this.onClickPrompt}
              >
                Yes
              </button>
              <button
                className="btn btn-danger"
                name="no"
                onClick={this.onClickPrompt}
              >
                No
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeProduct: (id) => {
      dispatch({
        type: REMOVE_PRODUCT,
        payload: id,
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(Product);

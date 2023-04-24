import React, { Component } from "react";
import { connect } from "react-redux";
import {
  REMOVE_CART_PRODUCT,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "../Redux/actionTypes";

class DisplayCartProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      promptBtnStatus: false,
    };
  }

  removeCartProduct = () => {
    this.setState({ promptBtnStatus: true });
  };

  onClickPrompt = (event) => {
    if (event.target.name === "yes") {
      this.props.removeCartProduct(this.props.cartProduct.id);
    }
    this.setState({ promptBtnStatus: false });
  };

  render() {
    const { id, title, price, category, image, count } = this.props.cartProduct;
    return (
      <>
        <div className="container cartContainer product d-flex">
          <div>
            <img src={image} alt="product"></img>
            <p className="quantity text-center">
              {" "}
              <button
                name="decrement"
                onClick={() => {
                  //   if (this.state.count > 1) {
                  //     this.setState({ count: this.state.count - 1 });
                  //   }
                  this.props.decreaseQuantity(id);
                }}
              >
                -{" "}
              </button>{" "}
              <span className="count">{this.props.cartProduct.quantity}</span>{" "}
              <button
                name="increment"
                onClick={() => {
                  //this.setState({ count: this.state.count + 1 });
                  this.props.increaseQuantity(id);
                }}
              >
                {" "}
                +
              </button>
            </p>
          </div>

          <div className="container discription h-25">
            <p className="cart-title">{title}</p>

            <p className="Category">
              Category: <span>{category}</span>
            </p>
            <p className="cost">
              Cost :{" "}
              <span>
                {" "}
                $ {(price * this.props.cartProduct.quantity).toFixed(2)}
              </span>
            </p>

            <button className="btn btn-danger" onClick={this.removeCartProduct}>
              Remove Item
            </button>
          </div>
        </div>
        {this.state.promptBtnStatus && (
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
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeCartProduct: (id) => {
      dispatch({
        type: REMOVE_CART_PRODUCT,
        payload: id,
      });
    },
    increaseQuantity: (id) => {
      dispatch({
        type: INCREASE_QUANTITY,
        payload: id,
      });
    },
    decreaseQuantity: (id) => {
      dispatch({
        type: DECREASE_QUANTITY,
        payload: id,
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(DisplayCartProductDetails);

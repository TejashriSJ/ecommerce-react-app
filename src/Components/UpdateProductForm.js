import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { UPDATE_PRODUCTS } from "../Redux/actionTypes";

class UpdateProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        ...this.props.dataToBeUpdated,
      },
      isFormSubmited: false,
    };
  }
  onSubmit = (event) => {
    this.setState({ isFormSubmited: true });
    event.preventDefault();
    this.props.updateProducts(this.state.formData);
  };

  inputOnChange = (event) => {
    this.setState({
      ...this.state,
      formData: {
        ...this.state.formData,
        [event.target.name]: event.target.value,
      },
    });
  };

  render() {
    console.log("this.state.formData.category", this.state.formData.category);
    let { formData } = this.state;
    return (
      <div className=" product-form mt-5 mb-5">
        <form
          onSubmit={this.onSubmit}
          className=" form-control d-flex flex-column  w-75"
        >
          <h3 className="text-center mt-2">Edit the Product Details</h3>
          <div>
            <label>Title </label>
            <input
              className="form-control"
              type="text"
              value={formData.title}
              name="title"
              placeholder="Product title"
              onChange={this.inputOnChange}
            />
          </div>

          <div>
            <label>Description</label>
            <textarea
              className="form-control"
              type="text"
              name="description"
              placeholder="description"
              value={formData.description}
              onChange={this.inputOnChange}
            ></textarea>
          </div>

          <div>
            <label>Price</label>
            <input
              className="form-control"
              type="number"
              name="price"
              placeholder="Price"
              value={formData.price}
              onChange={this.inputOnChange}
            />
          </div>

          <div>
            <label>Category</label>
            <select
              className="form-control"
              name="category"
              value={formData.category}
              onChange={this.inputOnChange}
              required
            >
              <option value="">Select Category</option>
              <option value="men's clothing"> Men's clothing</option>
              <option value="jewelery">Jewelery</option>
              <option value="electronics">Electronics</option>
              <option value="women's clothing">Women's clothing</option>
            </select>
          </div>

          <div>
            <label>Image URL</label>
            <input
              className="form-control"
              type="text"
              name="image"
              placeholder="Image URL"
              value={formData.image}
              onChange={this.inputOnChange}
            />
          </div>

          <button
            className="btn btn-primary mt-4 mb-4 align-self-center"
            type="submit"
          >
            SUBMIT
          </button>
          {this.state.isFormSubmited && (
            <div className="prompt d-flex flex-column mx-auto align-items-center">
              <p>Product Updated Successfully</p>
              <Link to="/">
                <button className="btn btn-success">OK</button>
              </Link>
            </div>
          )}
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateProducts: (updatedProduct) => {
      dispatch({
        type: UPDATE_PRODUCTS,
        payload: updatedProduct,
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(UpdateProductForm);

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { v4 as uuidv4 } from "uuid";
import { ADD_PRODUCTS } from "../Redux/actionTypes";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        id: "",
        title: "",
        description: "",
        category: "",
        price: 0,
        image: "",
        rating: { rate: 0, count: 0 },
      },
      isFormSubmited: false,
    };
  }

  setFormData = (event) => {
    this.setState({
      ...this.state,
      formData: {
        ...this.state.formData,
        [event.target.name]: event.target.value,
      },
    });
  };

  submitForm = (event) => {
    event.preventDefault();
    this.setState({ isFormSubmited: true });

    event.target.reset();
    this.state.formData.id = uuidv4();
    this.props.addProducts(this.state.formData);
  };

  render() {
    return (
      <div className="product-form mt-5 mb-5">
        <form
          className="form-control d-flex flex-column  w-75"
          onSubmit={this.submitForm}
        >
          <h2 className="text-center">Add New Product</h2>
          <div>
            <label>Title:</label>
            <input
              className="form-control"
              type="text"
              name="title"
              placeholder="Enter Title"
              required
              onChange={this.setFormData}
            />
          </div>
          <div>
            <label>Description:</label>
            <textarea
              className="form-control"
              name="description"
              placeholder="Enter Description"
              onChange={this.setFormData}
              required
            ></textarea>
          </div>
          <div>
            <label>Category:</label>
            <select
              className="form-control"
              name="category"
              onChange={this.setFormData}
              required
            >
              <option value="">Select Category</option>
              <option value="men's clothings"> Men's clothings</option>
              <option value="jewelery">Jewelery</option>
              <option value="Electronics">Electronics</option>
              <option value="women's clothing">Women's clothing</option>
            </select>
          </div>
          <div>
            <label>Price</label>
            <input
              className="form-control"
              type="number"
              name="price"
              placeholder="Enter Price"
              onChange={this.setFormData}
              required
              max={1000000}
            />
          </div>
          <div>
            <label>Image URL</label>
            <input
              className="form-control"
              type="text"
              name="image"
              placeholder="Enter Image url"
              onChange={this.setFormData}
              required
            />
          </div>
          <button
            className="btn btn-primary align-self-center mb-2"
            type="submit"
          >
            Submit
          </button>
          {this.state.isFormSubmited && (
            <div className="d-flex flex-column align-items-center prompt mx-auto">
              <p>Product Added Successfully</p>
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
    addProducts: (newProduct) => {
      console.log("new Product", newProduct);
      dispatch({
        type: ADD_PRODUCTS,
        payload: newProduct,
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(AddProduct);

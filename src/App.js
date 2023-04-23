import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import { INIT_PRODUCTS } from "./Redux/actionTypes";

import axios from "axios";

import Header from "./Components/Header";
import Products from "./Components/Products";
import AddProduct from "./Components/AddProduct";
import UpdateProduct from "./Components/UpdateProduct";
import Footer from "./Components/Footer";
import Loader from "./Components/Loader";
import Error from "./Components/Error";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.API_STATES = {
      LOADING: "loading",
      LOADED: "loaded",
      ERROR: "error",
    };
    this.state = {
      status: this.API_STATES.LOADING,
    };
  }

  componentDidMount() {
    axios("https://fakestoreapi.com/products")
      .then((response) => {
        this.props.initProducts(response.data);
        this.setState({
          status: this.API_STATES.LOADED,
        });
      })
      .catch((err) => {
        console.error(err);
        this.setState({ status: this.API_STATES.ERROR });
      });
  }

  render() {
    console.log("App.render store", this.props.store);
    const { status } = this.state;
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <main>
            {status === this.API_STATES.LOADING && <Loader />}
            {status === this.API_STATES.ERROR && <Error />}
            {status === this.API_STATES.LOADED && (
              <Routes>
                <Route
                  path="/"
                  element={<Products products={this.props.products} />}
                />
                <Route path="/addProduct" element={<AddProduct />} />
                <Route path="/updateProduct/:id" element={<UpdateProduct />} />
              </Routes>
            )}
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.products.listOfProducts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    initProducts: (products) => {
      dispatch({
        type: INIT_PRODUCTS,
        payload: products,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

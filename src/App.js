import React, { Component } from "react";

import Header from "./Components/Header";
import Products from "./Components/Products";
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
      products: [],
      status: this.API_STATES.LOADING,
    };
  }

  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ products: data, status: this.API_STATES.LOADED });
      })
      .catch((err) => {
        this.setState({ status: this.API_STATES.ERROR });
      });
  }

  render() {
    const { products, status } = this.state;
    return (
      <div className="App">
        <Header />
        <main>
          {status === "loading" && <Loader />}
          {status === "error" && <Error />}
          {status === "loaded" && <Products products={products} />}
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;

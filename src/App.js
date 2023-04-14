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
    this.state = {
      products: [],
      isLoading: true,
      isError: false,
    };
  }

  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ products: data, isLoading: false });
      })
      .catch((err) => {
        this.setState({ isError: true, isLoading: false });
      });
  }

  render() {
    const { products, isLoading, isError } = this.state;
    return (
      <div className="App">
        <Header />
        <main>
          {isLoading && <Loader />}
          {isError && <Error />}
          {!isLoading && !isError && <Products products={products} />}
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;

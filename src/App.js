import React, { useState, useEffect } from "react";

import Header from "./Components/Header";
import Products from "./Components/Products";
import Footer from "./Components/Footer";
import Loader from "./Components/Loader";
import Error from "./Components/Error";

import "./App.css";

function App() {
  const LOADING = "loading";
  const LOADED = "loaded";
  const ERROR = "error";

  const [data, setData] = useState({ products: [], status: LOADING });

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        return response.json();
      })
      .then((productsData) => {
        setData({ products: productsData, status: LOADED });
      })
      .catch((err) => {
        console.error(err);
        setData({ products: [], status: ERROR });
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        {data.status === LOADING && <Loader />}
        {data.status === ERROR && <Error />}
        {data.status === LOADED && <Products products={data.products} />}
      </main>
      <Footer />
    </div>
  );
}

export default App;

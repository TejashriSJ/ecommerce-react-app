import React, { useState, useEffect, createContext } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./Components/Header";
import Cart from "./Components/Cart";
import Products from "./Components/Products";
import EachProductDetails from "./Components/EachProductDetails";
import UpdateProductDetails from "./Components/UpdateProductDetails";
import Footer from "./Components/Footer";
import NotFoundRoute from "./Components/NotFoundRoute";

import "./App.css";

export const AppContext = createContext(null);

function App() {
  const LOADING = "loading";
  const LOADED = "loaded";
  const ERROR = "error";

  const [data, setData] = useState({ products: [], status: LOADING });
  const [cartData, setCartData] = useState([]);

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
    <>
      <Header />
      <AppContext.Provider value={{ cartData, setCartData }}>
        <Routes>
          <Route path="/" element={<Products data={data} />} />
          <Route path="/cart" element={<Cart products={data.products} />} />
          <Route
            path="/updateProducts"
            element={<UpdateProductDetails data={data} />}
          />
          <Route path="/product/:id" element={<EachProductDetails />} />
          <Route path="*" element={<NotFoundRoute />} />
        </Routes>
      </AppContext.Provider>
      <Footer />
    </>
  );
}

export default App;

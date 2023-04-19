import React, { useState, useEffect, createContext } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./Components/Header";
import Cart from "./Components/Cart";
import Products from "./Components/Products";
import EachProductDetails from "./Components/EachProductDetails";
import UpdateProductDetails from "./Components/UpdateProductDetails";
import AddNewProduct from "./Components/AddNewProduct";
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
  const [editData, setEditData] = useState([]);
  const [promptBtn, setPromptBtn] = useState(false);

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

  //Add
  const onProductAdded = (newProduct) => {
    console.log(newProduct);
    setData({ products: [...data.products, newProduct], status: LOADED });
  };

  //Delete
  const removeProduct = (removedId) => {
    let newData = data.products.filter((product) => {
      return product.id !== removedId;
    });
    console.log(newData);
    setData((prevData) => {
      return { products: newData, status: LOADED };
    });
  };

  //Edit

  const editProducts = (editId) => {
    console.log(editId);
    let dataToEdit = data.products.filter((product) => {
      return String(product.id) === editId;
    });
    setEditData(dataToEdit);
  };

  const onProductUpdated = (newData, id) => {
    let updatedData = data.products.map((product) => {
      if (product.id === id) {
        return newData;
      } else {
        return product;
      }
    });

    setData((prevData) => {
      return { products: updatedData, status: LOADED };
    });
  };

  return (
    <>
      <Header />
      <AppContext.Provider value={{ cartData, setCartData }}>
        <Routes>
          <Route
            path="/"
            element={
              <Products
                data={data}
                removeProduct={removeProduct}
                editProducts={editProducts}
              />
            }
          />
          <Route path="/cart" element={<Cart products={data.products} />} />

          <Route
            path="/updateProduct"
            element={
              <UpdateProductDetails
                onProductUpdated={onProductUpdated}
                editData={editData}
              />
            }
          />
          <Route
            path="/addProduct"
            element={<AddNewProduct onProductAdded={onProductAdded} />}
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

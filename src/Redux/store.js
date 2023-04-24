import { configureStore } from "@reduxjs/toolkit";

import products from "./Reducers/products";
import cart from "./Reducers/cart";

const store = configureStore({
  reducer: { products: products, cart: cart },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";

import products from "./Reducers/products";

const store = configureStore({
  reducer: { products: products },
});

export default store;

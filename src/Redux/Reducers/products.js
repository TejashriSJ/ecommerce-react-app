import { INIT_PRODUCTS, REMOVE_PRODUCT, UPDATE_PRODUCTS } from "../actionTypes";
import { ADD_PRODUCTS } from "../actionTypes";

const initProducts = { listOfProducts: [] };

const products = (state = initProducts, action) => {
  switch (action.type) {
    case INIT_PRODUCTS:
      return { listOfProducts: action.payload };

    case ADD_PRODUCTS:
      return {
        listOfProducts: [...state.listOfProducts, action.payload],
      };

    case REMOVE_PRODUCT:
      return {
        listOfProducts: state.listOfProducts.filter((product) => {
          return product.id !== action.payload;
        }),
      };

    case UPDATE_PRODUCTS:
      return {
        listOfProducts: state.listOfProducts.map((product) => {
          if (product.id === action.payload.id) {
            return action.payload;
          } else {
            return product;
          }
        }),
      };

    default:
      return state;
  }
};

export default products;

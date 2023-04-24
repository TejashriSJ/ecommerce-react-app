import {
  ADD_PRODUCT_TO_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
} from "../actionTypes";
import { REMOVE_CART_PRODUCT } from "../actionTypes";

const initCartProducts = { cartProducts: [] };

const cart = (state = initCartProducts, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return {
        cartProducts: [
          ...state.cartProducts,
          { ...action.payload, quantity: 1 },
        ],
      };

    case REMOVE_CART_PRODUCT:
      return {
        cartProducts: state.cartProducts.filter((product) => {
          return product.id !== action.payload;
        }),
      };

    case INCREASE_QUANTITY:
      return {
        cartProducts: state.cartProducts.map((product) => {
          if (product.id === action.payload) {
            return { ...product, quantity: product.quantity + 1 };
          } else {
            return product;
          }
        }),
      };

    case DECREASE_QUANTITY:
      return {
        cartProducts: state.cartProducts.map((product) => {
          if (product.id === action.payload && product.quantity > 1) {
            return { ...product, quantity: product.quantity - 1 };
          } else {
            return product;
          }
        }),
      };
    default:
      return state;
  }
};

export default cart;

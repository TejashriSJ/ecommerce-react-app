import { ADD_PRODUCT_TO_CART } from "../actionTypes";
import { REMOVE_CART_PRODUCT } from "../actionTypes";

const initCartProducts = { cartProducts: [] };

const cart = (state = initCartProducts, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return {
        cartProducts: [...state.cartProducts, action.payload],
      };

    case REMOVE_CART_PRODUCT:
      return {
        cartProducts: state.cartProducts.filter((product) => {
          return product.id !== action.payload;
        }),
      };
    default:
      return state;
  }
};

export default cart;

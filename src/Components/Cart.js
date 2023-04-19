import React from "react";

import { useContext } from "react";
import { AppContext } from "../App";

import DisplayCartProduct from "./DisplayCartProducts";
import noItemsImg from "../images/noItemsInCart.png";

function Cart(props) {
  const { cartData, setCartData } = useContext(AppContext);

  let cartProductDetails = cartData.map((cartId) => {
    let cartData = props.products.filter((product) => {
      return product.id === Number(cartId);
    });
    return cartData[0];
  });

  return (
    <main>
      {cartData.length !== 0 ? (
        cartProductDetails.map((product) => {
          return (
            <DisplayCartProduct
              product={product}
              cartData={cartData}
              setCartData={setCartData}
              key={product.id}
            />
          );
        })
      ) : (
        <img
          src={noItemsImg}
          alt="No Items In Cart"
          className="container mx-auto d-block"
        ></img>
      )}
    </main>
  );
}

export default Cart;

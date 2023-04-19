import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";

import { AppContext } from "../App";
import DisplayEachProduct from "./DisplayEachProduct";
import Loader from "./Loader";
import Error from "./Error";

function EachProductDetails() {
  const { id } = useParams();
  let { cartData, setCartData } = useContext(AppContext);
  const [data, setData] = useState({ product: [], status: "loading" });
  const [btnState, setBtnState] = useState("Add to Cart");

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((productData) => {
        console.log(productData);
        setData({ product: productData, status: "loaded" });
      })
      .catch((err) => {
        console.error(err);
        setData({ product: [], status: "error" });
      });
  }, [id]);

  return (
    <main>
      {data.status === "loading" && <Loader />}
      {data.status === "loaded" && (
        <DisplayEachProduct
          data={data.product}
          setCartData={setCartData}
          cartData={cartData}
          btnState={btnState}
          setBtnState={setBtnState}
        />
      )}
      {data.status === "error" && <Error />}
    </main>
  );
}

export default EachProductDetails;

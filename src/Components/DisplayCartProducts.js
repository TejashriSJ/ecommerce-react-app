import { useReducer, useState } from "react";
import DisplayPrompt from "./DisplayPrompt";
import { useContext } from "react";
import { AppContext } from "../App";

const setCounter = (state, action) => {
  switch (action) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      if (state.count > 1) {
        return { count: state.count - 1 };
      } else {
        return state;
      }

    default:
      return state;
  }
};

function DisplayCartProduct(props) {
  const { id, title, price, category, image } = props.product;
  const { cartData, setCartData } = useContext(AppContext);
  const [btnClicked, setBtnClicked] = useState(false);
  const [state, dispatch] = useReducer(setCounter, { count: 1 });

  const onClickPrompt = (event) => {
    if (event.target.name === "yes") {
      const updatedCart = cartData.filter((data) => {
        return data !== Number(event.target.id);
      });
      setCartData(updatedCart);
    }
    setBtnClicked(false);
  };

  const removeId = (event) => {
    setBtnClicked(true);
  };

  return (
    <>
      <div className="container cartContainer product d-flex">
        <div>
          <img src={image} alt="product"></img>
          <p className="quantity text-center">
            {" "}
            <button
              name="decrement"
              onClick={() => {
                dispatch("decrement");
              }}
            >
              -{" "}
            </button>{" "}
            <span className="count">{state.count}</span>{" "}
            <button name="increment" onClick={() => dispatch("increment")}>
              {" "}
              +
            </button>
          </p>
        </div>

        <div className="container discription h-25">
          <p className="cart-title">{title}</p>

          <p className="Category">
            Category: <span>{category}</span>
          </p>
          <p className="cost">
            Cost : <span> $ {(price * state.count).toFixed(2)}</span>
          </p>

          <button className="btn btn-primary" id={id} onClick={removeId}>
            Remove Item
          </button>
        </div>
      </div>
      {btnClicked && <DisplayPrompt displayPrompt={onClickPrompt} id={id} />}
    </>
  );
}

export default DisplayCartProduct;

import React from "react";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="header-block">
      <FontAwesomeIcon
        className="home"
        icon={faHouse}
        size="lg"
        style={{ color: "#f9fafa" }}
        onClick={() => {
          navigate("/");
        }}
      />
      <h2>STORE</h2>

      <p
        className="add-products"
        onClick={() => {
          navigate("/addProduct");
        }}
      >
        Add Products
      </p>
      <div className="navigations">
        <ul>
          <li className="sign-in">Sign In</li>
          <li className="sign-up">Sign Up</li>
        </ul>
      </div>
      <div>
        <FontAwesomeIcon
          className="cart"
          icon={faCartShopping}
          size="lg"
          onClick={() => {
            navigate("./cart");
          }}
        />
      </div>
    </div>
  );
}

export default Header;

import React, { Component } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

class Header extends Component {
  render() {
    return (
      <div className="header-block">
        <Link to="/">
          <FontAwesomeIcon
            icon={faHouse}
            size="lg"
            style={{ color: "#f9fafa" }}
          />
        </Link>

        <h2>STORE</h2>
        <Link to="/addProduct" className="text-light">
          <p>Add Product</p>
        </Link>

        <div className="navigations">
          <ul>
            <li className="sign-in">Sign In</li>
            <li className="sign-up">Sign Up</li>
          </ul>
        </div>
        <Link to="/cart">
          <div>
            <FontAwesomeIcon
              icon={faCartShopping}
              size="lg"
              style={{ textDecoration: "none", color: "white" }}
            />
          </div>
        </Link>
      </div>
    );
  }
}

export default Header;

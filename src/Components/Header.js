import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

class Header extends Component {
  render() {
    return (
      <div className="header-block">
        <FontAwesomeIcon
          icon={faHouse}
          size="lg"
          style={{ color: "#f9fafa" }}
        />
        <h2>STORE</h2>
        <div className="navigations">
          <ul>
            <li className="sign-in">Sign In</li>
            <li className="sign-up">Sign Up</li>
          </ul>
        </div>
        <div>
          <FontAwesomeIcon icon={faCartShopping} size="lg" />
        </div>
      </div>
    );
  }
}

export default Header;

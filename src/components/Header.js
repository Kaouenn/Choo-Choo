import React from "react";
import trainline_logo from "../img/trainline_logo.svg";
import flag from "../img/flag.svg";
import "../assets/header.css";

class Header extends React.Component {
  render = () => {
    return (
      <div className="header">
        <div>
          <a href="https://trainline-homepage.francoislaval.now.sh/">
            <img src={trainline_logo} className="header-logo" alt="img-logo" />
          </a>

          <div className="header-button-bloc">
            <button className="header-button">créer un compte</button>
            <button className="header-button">se connecter</button>
            <p className="header-text">cartes de réduction</p>
            <p className="header-text">aide</p>
          </div>
          <div className="header-flags-bloc">
            <img src={flag} className="header-img" alt="img-flag" />
            <div className="euro-currency">
              <p>EUR</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default Header;

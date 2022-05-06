import React from "react";
import "./Header.scss";
import logo from "../../Assets/images/logo.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="title">Courier Form</div>
      </div>
    </>
  );
};

export default Header;

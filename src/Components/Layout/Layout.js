import React from "react";
import Card from "../Card/Card";
import Header from "../Header/Header";
import "./Layout.scss";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="content-body">
        <Card />
      </div>
    </>
  );
};

export default Layout;

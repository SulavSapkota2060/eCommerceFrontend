import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import ProductDescription from "../../Product/pages/ProductDescription/ProductDescription";
import NavigationBar from "../../components/NavigationBar/Navigation";

const Layout = () => {
  return (
    <BrowserRouter>
      <NavigationBar />

      <Route path="/" exact component={Home} />
      <Route path="/product_details/:id" exact component={ProductDescription} />
    </BrowserRouter>
  );
};

export default Layout;

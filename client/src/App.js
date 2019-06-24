import React from "react";
import { Route } from "react-router-dom";
import "./styles/reset.css";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ProductIndex from "./components/products/ProductsIndex";
import ProductDetail from "./components/products/ProductDetail";

const App = () => {
  return (
    <div>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/products" component={ProductIndex} />
      <Route exact path="/products/:productId" component={ProductDetail} />
    </div>
  );
};

export default App;
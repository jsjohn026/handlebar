import React from "react";
import { Route, Switch } from "react-router-dom";
import "./styles/reset.css";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ProductIndex from "./components/products/ProductIndex";
import ProductDetail from "./components/products/ProductDetail";
import ProductCreate from "./components/products/ProductCreate";
import Main from "./components/main/main_page";
import GenreIndex from "./components/genres/GenreIndex";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/genres" component={GenreIndex} />
        <Route exact path="/genres/:genreId" component={ProductIndex} />
        <Route exact path="/products/new" component={ProductCreate} />
        <Route exact path="/products/:productId" component={ProductDetail} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/" component={Main} />
      </Switch>
    </div>
  );
};

export default App;
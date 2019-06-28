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
import NavBar from "./components/nav/navbar";

import AuthRoute from './util/route_util'

const App = () => {
  return (
    <div>
      <NavBar />
      <main className="main-content">
      <Switch>

        <AuthRoute exact path="/genres/:genreId" component={ProductIndex} />
        <AuthRoute exact path="/products/:productId" component={ProductDetail} />
        <AuthRoute exact path="/login" component={Login} routeType="auth" />
        <AuthRoute exact path="/register" component={Register} routeType="auth"/>
        <Route exact path="/" component={Main} />
      </Switch>
      </main>
    </div>
  );
};

export default App;
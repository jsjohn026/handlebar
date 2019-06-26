import React from "react";
import { Route, Switch } from "react-router-dom";
import "./styles/reset.css";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ProductIndex from "./components/products/ProductIndex";
import ProductDetail from "./components/products/ProductDetail";
import Main from "./components/main/main_page";
import GenreShow from './components/genres/GenreShow'

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/genres/:genreId" component={GenreShow} />
        <Route exact path="/products/:productId" component={ProductDetail} />
        <Route exact path="/products" component={ProductIndex} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/" component={Main} />

      </Switch>
    </div>
  );
};

export default App;
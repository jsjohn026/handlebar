import React from "react";
import { Route, Switch } from "react-router-dom";
import "./styles/reset.css";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ProductIndex from "./components/products/ProductIndex";
import ProductDetail from "./components/products/ProductDetail";
import Main from "./components/main/main_page";
import GenreIndex from "./components/genres/GenreIndex";
import NavBar from "./components/nav/navbar";

const App = () => {
  return (
    <div>
      <NavBar />
      <main className="main-content">
      <Switch>
        <Route exact path="/genres" component={GenreIndex} />
        <Route exact path="/genres/:genreId" component={ProductIndex} />
        <Route exact path="/products/:productId" component={ProductDetail} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/" component={Main} />
      </Switch>
      </main>
    </div>
  );
};

export default App;
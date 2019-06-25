import React, { Component } from "react";
import ProductIndex from "../products/ProductsIndex";

export class Main extends Component {
  render() {
    return (
      <div>
        <ProductIndex />
        <h1>Handlebar: An Online Store</h1>
        <footer>Copyright &copy; 2019 Handlebar</footer>
      </div>
    );
  }
}

export default Main;
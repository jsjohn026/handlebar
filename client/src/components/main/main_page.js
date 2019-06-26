import React, { Component } from "react";
// import ProductIndex from "../products/ProductIndex";
import GenreIndex from "../genres/GenreIndex"
export class Main extends Component {
  render() {
    return (
      <div>
        <GenreIndex />
        <h1>Handlebar: An Online Store</h1>
        <footer>Copyright &copy; 2019 Handlebar</footer>
      </div>
    );
  }
}

export default Main;
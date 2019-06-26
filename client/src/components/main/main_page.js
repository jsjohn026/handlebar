import React, { Component } from "react";
import GenreIndex from "../genres/GenreIndex";


export class Main extends Component {
  render() {
    return (
      <div>
        <h1>Handlebar: An Online Store</h1>
        <GenreIndex />
        <footer>Copyright &copy; 2019 Handlebar</footer>
      </div>
    );
  }
}

export default Main;
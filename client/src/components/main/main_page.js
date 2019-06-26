import React, { Component } from "react";
// import ProductIndex from "../products/ProductIndex";
import GenreIndex from "../genres/GenreIndex"
import Carousel from '../carousel/carousel'
import '../../styles/main.css'
export class Main extends Component {
  render() {
    return (
      <div className="splash-main-container">
        <h1 style={{textAlign: "center", margin: "8px"}}>Handlebar: An Online Store (navbar me)</h1>
        <div className="caro-div-container">
          <div>
            <p>Playstation</p>
          </div>
          <Carousel />
        </div>

        <GenreIndex />
        <footer>Copyright &copy; 2019 Handlebar</footer>
      </div>
    );
  }
}

export default Main;
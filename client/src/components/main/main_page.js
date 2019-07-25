import React, { Component } from "react";
// import ProductIndex from "../products/ProductIndex";
import GenreIndex from "../genres/GenreIndex"
import Carousel from '../carousel/carousel'
import '../../styles/main.css'
// import Must from './mustache.png' ;
export class Main extends Component {
  render() {
    return (
      <div className="splash-main-container">
        
        <div className="caro-div-container">
          <Carousel />
          <div className="splash-description-container" >
            <div className="splash-description">
              <p className="splash-description-text">
              Handlebar... Your one stop shop to handle selling and buying goods
              </p>
            </div>
          </div>
        </div>
        <GenreIndex />
      </div>
    );
  }
}

export default Main;
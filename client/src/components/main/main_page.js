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
        <h1 style={{textAlign: "center", margin: "8px"}}>Handlebar: An Online Store (navbar me)</h1>
        <div className="caro-div-container">
          <Carousel />
          <div className="splash-description-container" >
            <div className="splash-description">
              <h1 className="splash-description-header"> What is Handlebar?</h1>
              <p className="splash-description-text">
                Handlebar is a nifty website that allows user to market their goods, 
                as well as discover new goods related to their interest.  
                There's plenty of genres to choose 
                and more being added from other 
                user so you're certain to find something you like.
                Not just a stache, it's goods.
                
              </p>
            </div>
          </div>
        </div>

        <GenreIndex />
        <footer>Copyright &copy; 2019 Handlebar</footer>
      </div>
    );
  }
}

export default Main;
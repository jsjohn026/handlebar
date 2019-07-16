import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './carousel.css'

class DemoCarousel extends Component {
    render() {
        return (
            <div className="carousel-container">
            <Carousel autoPlay dynamicHeight={true} showArrows={false} showThumbs={false} width={"575px"} showStatus={false} infiniteLoop={true} interval={5000} >
                
                <div>
                    <img src="https://www.chatelaine.com/wp-content/uploads/2017/05/Bibimbap-homemade-burgers.jpg" alt="not found"/>
                    
                </div>
                
                <div>
                    <img src="https://cdn2.shopify.com/s/files/1/0019/9511/2563/products/Gem_Water_Beauty_Water_Botlle_1200x.JPG?v=1553797633" alt="not found" />
                    
                </div>
                <div>
                    <img src="https://i.pinimg.com/originals/52/31/df/5231df95dadf9ef080a2de1777bfa0f6.jpg" alt="not found" />
                    
                </div>
            </Carousel>
            </div>
        );
    }
};
 
export default DemoCarousel
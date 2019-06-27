import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './carousel.css'

class DemoCarousel extends Component {
    render() {
        return (
            <div className="carousel-container">
            <Carousel autoPlay dynamicHeight={true} showArrows={false} showThumbs={false} width={"600px"} showStatus={false} infiniteLoop={true} interval={5000} >
                
                <div>
                    <img src="https://www.chatelaine.com/wp-content/uploads/2017/05/Bibimbap-homemade-burgers.jpg" alt="not found"/>
                    
                </div>
                
                <div>
                    <img src="https://bciconline.com/wp-content/uploads/2017/10/2.png" alt="not found" />
                    
                </div>
                <div>
                    <img src="https://i.redd.it/0cscovjonpi11.png" alt="not found" />
                    
                </div>
            </Carousel>
            </div>
        );
    }
};
 
export default DemoCarousel
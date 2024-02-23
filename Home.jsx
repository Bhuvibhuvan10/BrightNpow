import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Pic1 from './component/assets/Pic1.webp'
import Pic2 from './component/assets/Pic2.jpg'
import Pic3 from './component/assets/Pic3.jpg'
// import Nav from './component/Nav/Nav';
import './Home.css';

const Home = () => {
  return (
  
    <div>
        
      <Carousel showThumbs={false} className="mainbox">
          <div>
            <img src={Pic1} className="carousel-image" alt="carousel" />
            {/* <h3>Solar Panel for Home</h3> */}
          </div>
          <div>
            <img src={Pic2} className="carousel-image" alt="carousel" />
          </div>
          <div>
            <img src={Pic3} className="carousel-image" alt="carousel" />
          </div>
        </Carousel>
    </div>
  )
}

export default Home

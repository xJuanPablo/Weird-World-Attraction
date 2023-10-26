import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import cadillac from "../../../assets/images/one.png";
import troll from "../../../assets/images/two.png";

function Hero() {
  return (
    <div className='carousel_div'>
      <div className='carousel_shader '></div>
      <Carousel fade>
      <Carousel.Item>
        <img src={cadillac} text="First slide" class="hero_img"/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={troll} text="First slide" class="hero_img"/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Hero
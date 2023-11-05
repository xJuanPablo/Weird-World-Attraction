import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import cadillac from "../../assets/images/one.png";
import troll from "../../assets/images/two.png";
import EiffelTower from "../../assets/images/three.png";
import ToiletArt from "../../assets/images/four.png";
import BAndJ from "../../assets/images/five.png";

function Hero() {
  const images= [
    {
      id: 0,
      pic: cadillac,
      alt: 'Cadillac Ranch'
    },    {
      id: 1,
      pic: troll,
      alt: 'Fremont Troll'
    },    {
      id: 2,
      pic: EiffelTower,
      alt: 'Eiffel Tower, Paris Texas'
    },    {
      id: 3,
      pic: ToiletArt,
      alt: `Barney Smith's Toilet Seat Art Museum`
    },    {
      id: 4,
      pic: BAndJ,
      alt: `Ben & Jerry's Flavor Graveyard`
    }
  ]
  return (
    <div className='carousel_div'>
      <div className='carousel_shader '></div>
      <Carousel interval={3500} fade>
        {images.map(({id, pic, alt}) => (
          <Carousel.Item key={id}>
            <img src={pic} alt={alt} className="hero_img"/>
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
        <h2 className='Hero-h2'>Where Normal Ends, Our <span className='explore'>Exploration</span>  Begins</h2>
    </div>
  )
}

export default Hero
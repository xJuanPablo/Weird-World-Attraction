import React from 'react';
import one from '../../assets/images/one.png'
import Location from './Location';

function AttractionInfo() {
  return (
    <div className='slected-attraction-div'>
      <h2 className='attraction-h2'>Cadillac Ranch</h2>
      <Location />
      <div className='attraction-img-container'>
        <img src={one} alt="" className='attraction-img'/>
      </div>
      <div className='attraction-description-container'>
        <p className='attraction-description'>
        Buckle up, intrepid travelers, because we're about to take you on a wild ride through the dusty plains of <span>Amarillo, Texas</span>, where the mundane meets the magnificent at the one and only Cadillac Ranch!
        <br />
        <br />
        You might be asking yourself, What is Cadillac Ranch? Imagine a herd of technicolor Cadillacs grazing peacefully in the vast Texan prairie, their tail fins pointing towards the heavens like a peculiar automotive Stonehenge. This, my curious compadres, is the Cadillac Ranch – a surreal spectacle that fuses the spirit of the open road with a dash of artistic whimsy.
        <br />
        <br />
        So, how did this peculiar pasture of vintage vehicles come to be? It all started with a group of avant-garde artists known as the Ant Farm, who decided that burying ten Caddies nose-first in the ground was the perfect way to pay homage to the "Golden Age" of American automobiles. The result? A roadside oddity that's become a symbol of artistic rebellion.
        <br />
        <br />
        Forget about traditional museums with "Do Not Touch" signs. At Cadillac Ranch, the golden rule is "Do Not Just Look, Participate!" Grab your spray paint cans and channel your inner graffiti artist. Leave your mark on these half-buried Caddies, turning them into a kaleidoscope of colors that would make even the most flamboyant peacock blush.
        <br />
        <br />
        Cadillac Ranch isn't just a pit stop; it's a pilgrimage for those seeking the weird, the wonderful, and the downright wacky. So, rev up your sense of adventure and head to Amarillo for a dose of roadside eccentricity that'll leave you questioning the boundaries of art and automotive culture.
        <br />
        <br />
        Safe travels, fellow wanderers, and may your Cadillac Ranch experience be as vivid as the colors you leave behind! 🚗🎨
        </p>
      </div>
      <div className='hours-of-operation-container'>
        <p className='hours-of-operation'> Hours of Operation: <span className='hours-of-operation-span'>Open 24 Hours</span> </p>
      </div>
    </div>
  )
}

export default AttractionInfo
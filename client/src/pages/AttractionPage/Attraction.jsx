import React from 'react';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import AttractionInfo from './AttractionInfo';

function Attraction() {
  return (
    <div>
      <NavBar/>
      <AttractionInfo/>
      <Footer/>
    </div>
  )
}

export default Attraction
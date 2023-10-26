import React from 'react';
import Hero from './Hero';
import NavBar from '../../../components/NavBar';
import TopAttractions from './TopAttractions';
import Footer from '../../../components/Footer';

function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <TopAttractions />
      <Footer />
    </>
  )
}

export default Home
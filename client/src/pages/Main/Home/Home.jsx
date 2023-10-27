import React from 'react';
import Hero from './Hero';
import NavBar from '../../../components/NavBar';
import TopAttractions from './TopAttractions';
import Footer from '../../../components/Footer';
import EmailOddity from './EmailOddity';

function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <TopAttractions />
      <EmailOddity />
      <Footer />
    </>
  )
}

export default Home
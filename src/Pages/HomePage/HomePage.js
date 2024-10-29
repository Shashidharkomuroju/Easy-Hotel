import React from 'react';
import './HomeStyle.css';
import Home1 from './Components/Home1';
import Home2 from './Components/Home2';
import Home3 from './Components/Home3';
import Home4 from './Components/Home4';
import Home5 from './Components/Home5';
import Footer from '../../Components/Footer/Footer'

const HomePage = () => {
  return (
    <>
    <Home1/>
    <Home2/>
    <Home3/>
    <Home4/>
    <Home5/>
    <Footer/>
    </>
  )
}

export default HomePage
import React from 'react'
import './HotelStyle.css'
import Details from './Components/Details';
import Hero from '../LandingPage/Components/Hero';
import Faq from './Components/Faq';
import Footer from '../../Components/Footer/Footer';



const HotelPage = () => {
  return (
    <div>
        <Hero/>
        <Details/>
        <Faq/>
        <Footer/>
    </div>
  )
}

export default HotelPage
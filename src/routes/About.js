import React from 'react'
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Heroimgabout from "../components/HeroimgAbout";
import AboutContent from '../components/AboutContent';
const About = () => {
  return (
    <div>
      <Navbar />
      <Heroimgabout/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About
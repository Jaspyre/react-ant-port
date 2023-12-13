import React from 'react'
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Heroimgcontact from '../components/HeroimgContact';
import Form from '../components/Form';
const Contact = () => {
  return (
    <div>
      <Navbar />
      <Heroimgcontact/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact
import "./FooterStyles.css"

import React from 'react'

import {FaHome, FaPhone, FaMailBulk, FaInstagram, FaFacebook} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer">
        <div className = "footer-container">
            <div className ="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                <div>
                <p>Someplace in Aussie.</p>
                <p>Australia.</p>
                </div>
                </div>
                <div className="phone">
                <h4><FaPhone size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                021-027-70658</h4>
                </div>
                <div className="email">
                <h4><FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                anthonybwei@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>About me</h4>
                <p>
                    This is me, Anthony Wei. Stunt Double of 5 years from New Zealand.
                </p>
                <div className="social">
                <FaFacebook size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                <FaInstagram size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
import "./HeroimgStyles.css"

import React from 'react'
import heroimg from "../assests/ant-fire.png"
import {Link} from 'react-router-dom'

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={heroimg} alt="heroimg"/>
        </div>
        <div className="content">
            <p>HI, I'M A</p>
            <h1>Stunt Double</h1>
            <Link to="/work" className="btn">Work</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
    </div>
  )
}

export default Heroimg
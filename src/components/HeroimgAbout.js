import "./HeroimgAboutStyles.css"

import React from 'react'
import heroimg from "../assests/ant-sand.png"

const Heroimgabout = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={heroimg} alt="heroimg"/>
        </div>
        <div className="content">
            <h1>About Me</h1>
            <p>Here's everything about me</p>
        </div>
    </div>
  )
}

export default Heroimgabout
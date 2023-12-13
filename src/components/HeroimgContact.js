import "./HeroimgContactStyles.css"

import React from 'react'
import heroimg from "../assests/ant-black.png"

const Heroimgcontact = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={heroimg} alt="heroimg"/>
        </div>
        <div className="content">
            <h1>Feel free to contact me</h1>
        </div>
    </div>
  )
}

export default Heroimgcontact
import "./HeroimgWorkStyles.css"

import React from 'react'
import heroimg from "../assests/ant-horse.png"

const Heroimgwork = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={heroimg} alt="heroimg"/>
        </div>
        <div className="content">
            <h1>Some of my previous work</h1>
        </div>
    </div>
  )
}

export default Heroimgwork
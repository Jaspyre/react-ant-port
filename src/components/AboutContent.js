import './AboutContentStyles.css'
import gun from "../assests/ant-gun.png"
import flying from "../assests/ant-box.png"
import { Link } from 'react-router-dom'

import React from 'react'

const AboutContent = () => {
  return (
    <div className ="about">
        <div className="left">
        <h1>Who Am I?</h1>
        <p>I'm a stunt double, I work in films that require stunt work or stunt directors, I specialize in weapon play, but my current stunt capabilities are</p>
        <h1>Air Rams</h1>
        <h1>Air Ratchet</h1>
        <h1>Archery</h1>
        <h1>Fencing (swordwork)</h1>
        <h1>Free Running/ Parkour</h1>
        <h1>Martial Arts</h1>
        <h1>Martial Arts (Oriental Weaponry)</h1>
        <h1>Stair Falls</h1>
        <h1>Stunt Fighting</h1>
        <h1>Weaponry</h1>
        <Link to="/contact">
            <button className="btn">Contact</button>
        </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={gun} className="img" alt=":D"/>
                </div>
                <div className="img-stack bottom">
                    <img src={flying} className="img" alt=":D"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent
import React, { useState } from 'react'
import "./Hero.css"

const Hero = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className='hero_container' 
      style={{flexDirection: props.isDirectionLeft ? 'row-reverse' : 'row'}}
    >
      <div className='content_container'>
        <h1 className="hero-title">{props.heading}</h1>

        <p className="hero-description">{props.description}</p>

        <button 
          className="hero-button"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered ? 'View Details →' : 'Shop Now!'}
        </button>
      </div>

      <div className='image_container'>
        <div className="image-overlay"></div>
        <img src={props.image} alt={props.heading} className="hero-image" />
      </div>
    </div>
  )
}

export default Hero
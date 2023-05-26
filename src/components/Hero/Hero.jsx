import React from 'react'

const Hero = () => {
  return (
    <Section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container ">

      <div className='hero-left'>
        Left Section
      </div>
     <div className='flexCenter hero-left'>
        <div className="image-container">
          <img src='./hero-image.png' alt=''/>
        </div>
     </div>
     
      </div>
    </Section>
  )
}

export default Hero
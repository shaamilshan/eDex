import React from 'react'
import aboutus from '../assets/aboutus.png'
import 'animate.css/animate.min.css'
import './About.css'

function About() {
  return (
    <div className='about'>
      <div className='about-left'>
        <img src={aboutus} alt="" />
      </div>

      <div className='about-right  animate__animated animate__fadeInUp' >

        <h3>Join World's largest learning platform today</h3>
        <h6>Start learning by registering for free</h6>
        <p>Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. 
        Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.</p>
        <button>Sign Up for Free</button>
      </div>
    </div>
  )
}

export default About

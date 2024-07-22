import React from 'react'
import hero from '../assets/hero-right.png'
import 'animate.css/animate.min.css'
import './Home.css'

function Home() {
  return (
    <div className='Home' >
      <div className='right-side  animate__animated animate__fadeInUp'>
        <img src={hero} alt="hero-img" className='hero-img' />
      </div>
      <div className='left-side '>
        <h6 >START TO SUCCESS</h6>
        <h4>Access To <span className='span'> 5000+ </span> Courses
        from <span className='span'>300 </span>Instructors 
        & Institutions</h4>
        <p>Various versions have evolved over the years, sometimes by accident</p>
    <input type="text" placeholder='what do you want to learn?' className='hero-input'  />
      </div>
    </div>
  )
}

export default Home

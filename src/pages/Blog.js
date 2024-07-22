import React from 'react'
import blog from '../assets/Blog.jpg'
import './Blog.css'
import flexbox from '../assets/flexbox.jpg'
import UIUX from '../assets/UIUX.webp'
import blogmern from '../assets/blog-mern.jpg'
import 'animate.css/animate.min.css'

function Blog() {
  return (
    <div>
      <div className='blog-hero animate__animated animate__fadeInUp'>
        <div >
        <h2>Our Blog</h2>
        <p>Here are a few blog content ideas related to various topics that might interest you:</p>
        <img src={blog} alt=""  className='blog-img'/>
        <h4>The Future of Digital Marketing: Trends to Watch in 2024.Digital marketing is an ever-evolving field, and staying ahead of the trends is crucial for success.</h4>
        </div>
      </div>

      <div className='cards'> 
        <div className='blog-card' >
          <img src={flexbox} alt="flexbox-img"  />
          <h3> Mastering Flexbox: A Comprehensive Guide for Web Developers</h3>
        </div>

        <div className='blog-card'>
          <img src={blogmern} alt="blog-img" />
          <h3> Building a Blog App with MERN Stack: A Step-by-Step Tutorial</h3>
        </div>

        <div className='blog-card'>
          <img src={UIUX} alt="uiux-img" />
          <h3> UI/UX design is constantly evolving, driven by new technologies and user preferences</h3>
        </div>
      </div>
    </div>
  )
}

export default Blog

import React from 'react'
import contact from '../assets/contact.png'
import './Contact.css'
import 'animate.css/animate.min.css'


function Contact() {
  return (
    <div>
       <div className='contact  animate__animated animate__fadeInUp'>
            <div className='contact-left'>
                <img src={contact} alt="contact-img" className='contact-img' />
            </div>
            <div className='contact-right'>
                <div className='contact-us'>
                <h3>Contact Us</h3>
                </div>

                <div className="contact-container">
      <div className="contact-item">
        <h3>Visit us</h3>
        <p>
          Praesent nulla massa,<br />
          feugiat auctor felis<br />
          85486
        </p>
      </div>
      <div className="contact-item">
        <h3>Contact</h3>
        <p>
          example@mail.com<br />
          Call : +123 400 123
        </p>
      </div>
    </div>

                <div className='email-block'>
                <input type="text" placeholder='Email' className='contact-email' />
                <button className='contact-btn'>Subscribe</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact

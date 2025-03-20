import React from 'react'
import './Contact.css'
import key from '../assets/images/spoon.png'
import drink from '../assets/images/drink.png'
import Button from './Button'

const Contact = () => {
  return (
    <div className='contact'> 
        
            <div className="contact__text">
            <h2>Contact</h2>
              <img src={key} alt="spoon" />
              <h1>Find Us</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum culpa animi a quod rerum vero odit veritatis harum neque? Temporibus nisi voluptates cupiditate accusantium accusamus atque ea dicta exp</p>
              <h2>Opeining Hours</h2>
              <p>Mon-Fri 10:00am - 02:00pm</p>
              <p>Sat-Sun 10:00am - 03:00pm</p>
              <Button chidren={' Visit Us'}/>
            </div>
            <div className="contact__image">
                <img src={drink} alt="chef" />
            </div>
      </div>
  )
}

export default Contact
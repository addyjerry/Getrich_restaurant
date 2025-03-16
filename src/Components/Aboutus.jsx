import React from 'react'
import './Aboutus.css' 
import golf from '../assets/G.png'
import knife from '../assets/knife.png'
import Button from './Button'

export const Aboutus = () => {
  return (
    <div className='about__us'>
        <div id='golf'>
        <img src={golf} alt="backletter" />
        </div>
        <div className="on__top">
            <div className='left'>
                <h2>About Us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum at dolore temporibus, eligendi nulla obcaecati .</p>
                <Button chidren={'Know More'}/>
            </div>
            <div className='center'>
                <img src={knife} alt="" />
            </div>
            <div className='left'>
            <h2>Our history</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum rem praesentium unde accusantium nemo dignissimos </p>
            <Button chidren={'Know More'}/>
            </div>
        </div>
    </div>
  )
}

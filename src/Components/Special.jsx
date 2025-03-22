import React from 'react'
import './Special.css'
import bottle from '../assets/images/bottle.png'
import Button from './Button'
import { Wines,cocktails } from '../data'

const Special = () => {
 

 
  return (
    <div className='Special'>
        <h2>Menu That Fits Your Palatte </h2>
        <h1>Today's Special</h1>
        <div className='main__special'>
       
          <div className="special__side" >
                   
            <h2>Wine & Beer</h2>
              {Wines.map((wine)=>(
            <React.Fragment key={wine.id}>
             <span><h3 id='letters'>{wine.name}</h3><div id='line'></div> <h3>${wine.price}</h3></span><br />
              <span className='under'><p>{wine.origin}</p><p>|</p><p>{wine.quantity}</p></span><br />
            </React.Fragment>
            ))}
          </div>
      
          <div className="special__center">
            <img src={bottle} alt="wine glass" />
          </div>
          <div className="special__side" >

           
           
            <h2>Cocktails</h2>
              {cocktails.map((cocktail)=>(
            <React.Fragment key={cocktail.id}>
             <span><h3 id='letters'>{cocktail.name}</h3><div id='line'></div> <h3>${cocktail.price}</h3></span><br />
             <span className='under'><p>{cocktail.origin}</p></span><br />
             </React.Fragment>
            ))}
          </div>
 
        </div>
        <div id="special__button">
        <Button>Know More </Button>
        </div>
    </div>
  )
}

export default Special
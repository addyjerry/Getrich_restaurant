import React from 'react'
import './Special.css'
import bottle from '../assets/images/bottle.png'
import Button from './Button'

const Special = () => {
  const Wines=[
    {id:1,
      name:'Chapel Hill Shiraz',
      price:56,
      origin:'AU',
      quantity:'Bottle'
    },
    
    {id:2,
      name:'Catena Malbee',
      price:59,
      origin:'AR',
      quantity:'Bottle'
    },
    {id:3,
      name:'La Vieille Rose',
      price:44,
      origin:'FR',
      quantity:'750'
    },
    {id:4,
      name:'Rhino Pale Ale',
      price:31,
      origin:'CA',
      quantity:'750 ml'
    },
    {id:5,
      name:'Irish Guinness',
      price:26,
      origin:'IE',
      quantity:'750 ml'
    },
  ]

  const cocktails=[
    {id:1,
      name:'Aperol Spritz',
      price:20,
      origin:'Aperol | Villa Marchesi prosseco | soda |30ml ',
    
    },
    
    {id:2,
      name:"Dark 'N' Stormy",
      price:16,
      origin:'Dark rum | Ginger beer | Slice of lime',
     
    },
    {id:3,
      name:'Daiquiri',
      price:10,
      origin:'Rum |Citrus juice | Sugar',
   
    },
    {id:4,
      name:'Old Fashioned',
      price:31,
      origin:'Bourbon | Brown Sugar | Angostura Bitters',
      quantity:'750 ml'
    },
    {id:5,
      name:'Negroni',
      price:26,
      origin:'Gin | SweetVermouth | Campari | Orange garnish',
      quantity:'750 ml'
    },
  ]
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
        <Button chidren={'Know More'} />
        </div>
    </div>
  )
}

export default Special
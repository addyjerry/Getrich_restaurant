import React from 'react'
import './Awards.css' 
import group from '../assets/images/group.png'
import key from '../assets/images/spoon.png'
import imnum1 from '../assets/images/g3.png'
import imnum2 from '../assets/images/g1.png'
import imnum3 from '../assets/images/g2.png'
import imnum4 from '../assets/images/g5.png'
import berries from '../assets/images/berries.png'

const Awards = () => {
    const laurels=[
        {id:1,
            image:imnum1,
            title: ' Bib Gourmond',
            description:' lorem ipsum dolor sit amet,consectetur.'
        },
        {id:2,
            image:imnum2,
            title: ' AA Hospitality',
            description:' lorem ipsum dolor sit amet,consectetur.'
        },
        {id:3,
            image:imnum3,
            title: ' Rising Star',
            description:' lorem ipsum dolor sit amet,consectetur.'
        },
        {id:4,
            image:imnum4,
            title: ' Outstanding Chef',
            description:' lorem ipsum dolor sit amet,consectetur.'
        },
    ]
  return (
    <div className=' awards'>
        <div className="award__back">
            <div className="first">
                <img src={group} alt="logo" />
            </div>
            <div className="awards__text">
                 <h2>Awards & Recognition</h2>
                    <img src={key} alt="spoon" />
                     <h1>Our Laurels</h1>
                     <div className="groups">
                        {laurels.map((laurel)=>(
                        <div className='laurel__group'>
                        <img src={laurel.image} alt="number" />
                        <div className='main__laurel'>
                             <h2>{laurel.title}</h2>
                            <p>{laurel.description}</p>
                        </div>
                        </div>
                        ))}
                     </div>

            </div>
            <div className="awards__image">
               <img src={berries} alt="berries" />
            </div>

        </div>

    </div>
  )
}

export default Awards
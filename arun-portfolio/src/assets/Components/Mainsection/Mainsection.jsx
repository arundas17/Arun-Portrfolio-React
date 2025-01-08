import React from 'react'
import './Mainsection.css'
import arun from '../../Images/Arundaskr-1.png'
import html from '../../Images/html-5-svgrepo-com.svg'
import css from  '../../Images/css-3-svgrepo-com.svg'
import js from '../../Images/js-svgrepo-com.svg'
import react from '../../Images/react-svgrepo-com.svg'

const Mainsection = () => {
  return (
    <section className='mainsection-container'>
      <div className=' mainsection-content'>
        <h2>
         Developing inspiring front-end digital encounters
        </h2>
        <p>
        Dynamic and detail-oriented Frontend Developer with expertise in creating
        responsive, user-friendly websites and web applications.
        </p>
      </div>
      <div className='mainsetion-profilecard'>
        <div className='mainsection-profilecard-main'>
            
           <img className='mainsection-profilecard-arun' src={arun} alt="" /> 
        </div>
        
        <div className='mainsection-maintech'>
        <div>
            <img className='techitem' src={html} alt="" />
        </div>
        <div>
            <img className='techitem' src={css} alt="" />
        </div>
        <div>
            <img className='techitem' src={js} alt="" />
        </div>
        <div>
            <img className='techitem' src={react} alt="" />
           </div>
        </div>
    </div>
       
      
    </section>
  )
}

export default Mainsection

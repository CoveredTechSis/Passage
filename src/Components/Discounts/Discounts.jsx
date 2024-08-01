import React from 'react'
import './Discounts.css'
import discount from '/images/discount.png'
import { FaArrowRight } from "react-icons/fa6";

export const Discounts = () => {
  return (
    <div className='discounts__container'>
      <div className='discount__text'>
        <div className='discount_p'>
            <h2>Discounts and new </h2>
            <p>Discounts and exciting events at your fingertips!</p>
        </div>
        <div className='discount__input'> 
            <input type="email" name="" placeholder='Email' />
           <div className='arrow'> <FaArrowRight /></div>
        </div>
     </div>

        <div className='discount__img'>
            <img src={discount} alt="" />
        </div>

    </div>
  )
}

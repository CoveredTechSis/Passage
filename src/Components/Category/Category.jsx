import React from 'react'
import './Category.css'
import Sport from '/icons/Sport.svg'
import Art from '/icons/Art.svg'
import Family from '/icons/Family.svg'
import Business from '/icons/Business.svg'
import Media from '/icons/Media.svg'
import Hobbies from '/icons/Hobbies.svg'

export const Category = () => {
  return (
    <div className='category__container'>
       <div className="title">
            <h3>Browse Category</h3>
            <hr />
        </div>


        <div className='category__contents__container'>
        <div className='category__contents'>
          <div className="circle">
              <img src={Sport} alt="" />
              <p>Sport & Fitness</p>
          </div>
        </div>

        <div className='category__contents'>
          <div className="circle">
            
              <img src={Art} alt="" />
              <p>Art and Concert</p>
            
          </div>
        </div>

        <div className='category__contents'>
          <div className="circle">
              <img src={Family} alt="" />
              <p>Family and <br /> community</p>
          </div>
        </div>

        <div className='category__contents'>
          <div className="circle">
              <img src={Business} alt="" />
              <p>Business and <br /> Networking</p>
          </div>
        </div>

        <div className='category__contents'>
          <div className="circle">
              <img src={Media} alt="" />
              <p>Media and Film</p>
          </div>
        </div>

        <div className='category__contents'>
          <div className="circle">
              <img src={Hobbies} alt="" />
              <p>Hobbies</p>
          </div>
        </div>
        </div>

    </div>
  )
}

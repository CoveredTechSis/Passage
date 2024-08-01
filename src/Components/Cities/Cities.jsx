import React from 'react'
import './Cities.css'
import lagos from '/images/lagos.png'
import abuja from '/images/abuja.png'
import benin from '/images/benin.png'
import portharcut from '/images/portharcut.png'
import ibadan from '/images/ibadan.png'
import jos from '/images/jos.png'
import owerri from '/images/owerri.png'
import kaduna from '/images/kaduna.png'


export const Cities = () => {
  return (
    <div className='Cities__container'>
         <div className="title">
            <h3>Trending</h3>
            <hr/>
        </div>
        <div className="column__wrapper">
        <div className='first__column'>
            <div className='column__content'>
                <img src={lagos} alt="" />
                <div className='cities__text'>
                    <h5>Lagos</h5>
                    <p>62 events</p>
                </div>
            </div>

            <div className='column__content'>
                <img src={abuja} alt="" />
                <div className='cities__text'>
                    <h5>Abuja</h5>
                    <p>62 events</p>
                </div>
            </div>

            <div className='column__content'>
                <img src={benin} alt="" />
                <div className='cities__text'>
                    <h5>Benin</h5>
                    <p>62 events</p>
                </div>
            </div>

            <div className='column__content'>
                <img src={portharcut} alt="" />
                <div className='cities__text'>
                    <h5>Portharcut</h5>
                    <p>62 events</p>
                </div>
            </div>
            
        </div>

        <div className='second__column'>
            <div className='column__content'>
                <img src={kaduna} alt="" />
                <div className='cities__text'>
                    <h5>Kaduna</h5>
                    <p>62 events</p>
                </div>
            </div>

            <div className='column__content'>
                <img src={ibadan} alt="" />
                <div className='cities__text'>
                    <h5>Ibadan</h5>
                    <p>62 events</p>
                </div>
            </div>

            <div className='column__content'>
                <img src={jos} alt="" />
                <div className='cities__text'>
                    <h5>Jos</h5>
                    <p>62 events</p>
                </div>
            </div>

            <div className='column__content'>
                <img src={owerri} alt="" />
                <div className='cities__text'>
                    <h5>Owerri</h5>
                    <p>62 events</p>
                </div>
            </div>
            
        </div>
        </div>
    </div>
  )
}

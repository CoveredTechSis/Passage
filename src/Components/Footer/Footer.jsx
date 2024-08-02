import React from 'react'
import './Footer.css'
import logo from '/icons/logo.png'
import fb from '/icons/fb.svg'
import linkedin from '/icons/linkedin.svg'
import message from '/icons/message.svg'

export const Footer = () => {
  return (
    <div className='Footer__container'>
       <div className='first_row'>
       <div className='footer__socials'>
           <img src={logo} alt=""className='footer_logo' />
           <div className='socials'>
            <img src={fb} alt="" />
            <img src={linkedin} alt="" />
           </div>
        </div>
       </div>
          
        <div className='message'>
        <div className='footer_card_icon'>
            <img src={message} alt="" />

        </div>
        </div>

        <div className='footer__text'>
            <div className='trademark'>
                <p>c 2024 Passage.ng</p>
                <div>
                <p>All right reserved</p>
            </div>
            </div>
            
            <div className='footer_care'> 
                <p>FAQ</p>
                <p>Privacy Policy</p>
                <p>Terms of use</p>
                <p>Cookies</p>
            </div>

        </div>

    </div>
  )
}

import React from 'react'
import './PaidEvents.css'
import chronicles_of_ushebe from '/images/chronicles_of_ushebe.png'
import health from '/images/health.png'
import christmas from '/images/christmas.png'
import sheedx from '/images/sheedx.png'
import location from '/icons/location.svg'
import calendar from '/icons/calendar.svg'
import share from '/icons/share.svg'
import ticket from '/icons/ticket.svg'


export const PaidEvents = () => {

  return (
    <div className='PaidEvents_container'>
        <div className="title">
            <h3>Trending</h3>
            <hr/>
        </div>

    
    <div className='eventDetails__container'> 
       <div className='eventDetails'>
          <img src={chronicles_of_ushebe} alt=""   className='eventimage'/>
          <h5>Chronicles of Ushbebe</h5>
          <div className='day'> 
            <img src={calendar} alt="" />
            <p>4th Sept, 2024</p>
          </div>
          <div className='location'> 
              <img src={location} alt="" />
              <p>Transcorp Hilton, Abuja</p>
          </div>
          <div className='ticket'>
              <div className='ticket__content' >
                  <img src={ticket} alt="" />
                   <p >Starting from <strong>#10,000</strong></p>
               </div>
              <img src={share} alt="" className='share' />
           </div>
        </div>
    

     
       <div className='eventDetails'>
          <img src={health} alt=""   className='eventimage'/>
          <h5>Qei Health & Wellness Com...</h5>
          <div className='day'> 
            <img src={calendar} alt="" />
            <p>24th-26th Oct, 2024</p>
          </div>
          <div className='location'> 
              <img src={location} alt="" />
              <p>3J's Hotels Limited, Abuja</p>
          </div>
          <div className='ticket'>
              <div className='ticket__content'>
                  <img src={ticket} alt="" />
                   <p>Starting from <strong>#17,000</strong></p>
               </div>
              <img src={share} alt="" className='share' />
           </div>
        </div>
   
       <div className='eventDetails'>
          <img src={christmas} alt=""   className='eventimage'/>
          <h5>TSM-Mall Christmas Wonder...</h5>
          <div className='day'> 
            <img src={calendar} alt="" />
            <p>1st Dec 2024-2nd Jan 2025</p>
          </div>
          <div className='location'> 
              <img src={location} alt="" />
              <p>Ikeja City Mall, Lagos</p>
          </div>
          <div className='ticket'>
              <div className='ticket__content'>
                  <img src={ticket} alt="" />
                   <p>Starting from <strong>#6,400</strong></p>
               </div>
              <img src={share} alt="" className='share' />
           </div>
        </div>
    
    
       <div className='eventDetails'>
          <img src={sheedx} alt=""   className='eventimage'/>
          <h5>Sheedx Africa Summit</h5>
          <div className='day'> 
            <img src={calendar} alt="" />
            <p>16th-18th Sept 2024</p>
          </div>
          <div className='location'> 
              <img src={location} alt="" />
              <p>Ibom LED, Uyo</p>
          </div>
          <div className='ticket'>
              <div className='ticket__content'>
                  <img src={ticket} alt="" />
                   <p>Starting from <strong>#3,000</strong></p>
               </div>
              <img src={share} alt="" className='share' />
           </div>
        </div>
    </div>
    </div>
  )
}

import React from 'react'
import './FreeEvents.css'
import lagosfashion from '/images/lagos_fashion.png'
import building_climate from '/images/building_climate.png'
import showtime from '/images/showtime.png'
import summer_camp from '/images/summer_camp.png'
import location from '/icons/location.svg'
import calendar from '/icons/calendar.svg'
import share from '/icons/share.svg'
import ticket from '/icons/ticket.svg'

export const FreeEvents = () => {
  return (
    <div className="freeEvents__Container">
        <div className="title">
            <h3>Trending</h3>
            <hr/>
        </div>

    
    <div className='eventDetails__container'> 
       <div className='eventDetails'>
          <img src={lagosfashion} alt=""   className='eventimage'/>
          <h5>Lagos Fashion Fair 2024</h5>
          <div className='day'> 
            <img src={calendar} alt="" />
            <p>3rd-5th Sept, 2024</p>
          </div>
          <div className='location'> 
              <img src={location} alt="" />
              <p>Eko Convention Centre, Lagos</p>
          </div>
          <div className='ticket'>
              <div className='ticket__content'>
                  <img src={ticket} alt="" />
                   <p>free</p>
               </div>
              <img src={share} alt="" className='share' />
           </div>
        </div>
    

     
       <div className='eventDetails'>
          <img src={building_climate} alt=""   className='eventimage'/>
          <h5>Building Climate Resilience</h5>
          <div className='day'> 
            <img src={calendar} alt="" />
            <p>6th Aug, 2024</p>
          </div>
          <div className='location'> 
              <img src={location} alt="" />
              <p>Virtual</p>
          </div>
          <div className='ticket'>
              <div className='ticket__content'>
                  <img src={ticket} alt="" />
                   <p>free</p>
               </div>
              <img src={share} alt="" className='share' />
           </div>
        </div>
   
       <div className='eventDetails'>
          <img src={showtime} alt=""   className='eventimage'/>
          <h5>Showtime 3 Vs 3 Flag Tour...</h5>
          <div className='day'> 
            <img src={calendar} alt="" />
            <p>26th Jul 2024</p>
          </div>
          <div className='location'> 
              <img src={location} alt="" />
              <p>Meadow Hall</p>
          </div>
          <div className='ticket'>
              <div className='ticket__content'>
                  <img src={ticket} alt="" />
                   <p>free</p>
               </div>
              <img src={share} alt="" className='share' />
           </div>
        </div>
    
    
       <div className='eventDetails'>
          <img src={summer_camp} alt=""   className='eventimage'/>
          <h5>IID-Summer Camp</h5>
          <div className='day'> 
            <img src={calendar} alt="" />
            <p>27th Jul-1st Aug 2024</p>
          </div>
          <div className='location'> 
              <img src={location} alt="" />
              <p>Virtual</p>
          </div>
          <div className='ticket'>
              <div className='ticket__content'>
                  <img src={ticket} alt="" />
                   <p>free</p>
               </div>
              <img src={share} alt="" className='share' />
           </div>
        </div>
    </div>
</div>
    
  )
}
 
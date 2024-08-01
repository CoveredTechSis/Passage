import React from 'react'
import './EventPost.css'
import karaoke from '/images/karaoke.png'
import location from '/icons/location.svg'
import calendar from '/icons/calendar.svg'
import share from '/icons/share.svg'
import ticket from '/icons/ticket.svg'


const EventPost = () => {

  return (
  <div className='eventSection'>
        <div className="title">
            <h3>Trending</h3>
            <hr/>
        </div>

    
        <div className='eventDetails__container'> 
        
     <div className='eventDetails'>
          <img src={karaoke} alt=""   className='eventimage'/>
          <h5>Karaoke Night</h5>
         <div className='day'> 
            <img src={calendar} alt="" />
            <p>Wednesdays, 6pm</p>
         </div>
         <div className='location'> 
            <img src={location} alt="" />
            <p>Yapaddy's Hotel International, Lagos</p>
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
          <img src={karaoke} alt="" className='eventimage'/>
           <h5>Karaoke Night</h5>
         <div className='day'> 
            <img src={calendar} alt="" />
            <p>Wednesdays, 6pm</p>
          </div>
          <div className='location'> 
             <img src={location} alt="" />
             <p>Yapaddy's Hotel International, Lagos</p>
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


        <div className='eventDetails'>
           <img src={karaoke} alt="" className='eventimage'/>
           <h5>Karaoke Night</h5>
          <div className='day'> 
             <img src={calendar} alt="" />
             <p>Wednesdays, 6pm</p>
          </div>
          <div className='location'> 
            <img src={location} alt="" />
            <p>Yapaddy's Hotel International, Lagos</p>
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
               <img src={karaoke} alt="" className='eventimage'/>
               <h5>Karaoke Night</h5>
            <div className='day'> 
              <img src={calendar} alt="" />
               <p>Wednesdays, 6pm</p>
            </div>
           <div className='location'> 
              <img src={location} alt="" />
              <p>Yapaddy's Hotel International, Lagos</p>
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
    
  )
}
export default EventPost

import React from 'react'
import './EventPost.css'
import despicable from '/images/despicable.png'
import comic from '/images/comic.png'
import uno from '/images/uno.png'
import karaoke from '/images/karaoke.png'
import location from '/icons/location.svg'
import calendar from '/icons/calendar.svg'
import share from '/icons/share.svg'
import ticket from '/icons/ticket.svg'


const EventPost = () => {
   return (
      <div className='eventPost__container'>
       <div className='eventSection'>
         <div className="title">
            <h3>Trending</h3>
            <hr/>
        </div>

      <div className='eventDetails__container'>
        <div className='eventDetails'>
          <img src={karaoke} alt=""   className='eventimage'/>
          <h5>Karaoke Night </h5>
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
          <img src={despicable} alt=""   className='eventimage'/>
          <h5>Despicable Me 4</h5>
          <div className='day'> 
            <img src={calendar} alt="" />
            <p>Sat, 27 Jul, 2024, 1pm</p>
          </div>
          <div className='location'> 
              <img src={location} alt="" />
              <p>Epic Cinema, Abuja</p>
          </div>
          <div className='ticket'>
              <div className='ticket__content'>
                  <img src={ticket} alt="" />
                   <p>Starting from <strong>#2000</strong></p>
               </div>
              <img src={share} alt="" className='share' />
           </div>
        </div>
   
       <div className='eventDetails'>
          <img src={comic} alt=""   className='eventimage'/>
          <h5>Comic Convention 2024</h5>
          <div className='day'> 
            <img src={calendar} alt="" />
            <p>Sat, 14th Sept,2024, 4pm</p>
          </div>
          <div className='location'> 
              <img src={location} alt="" />
              <p>Landmark Event Centre, Lagos</p>
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
          <img src={uno} alt=""   className='eventimage'/>
          <h5>UNO</h5>
          <div className='day'> 
            <img src={calendar} alt="" />
            <p>Thurs,30th Jul, 2024, 4pm 2024</p>
          </div>
          <div className='location'> 
              <img src={location} alt="" />
              <p>Wiwo Cinema, Jos</p>
          </div>
          <div className='ticket'>
              <div className='ticket__content'>
                  <img src={ticket} alt="" />
                   <p>Starting from <strong>#2000</strong> </p>
               </div>
              <img src={share} alt="" className='share' />
          </div>
        </div>
     </div>
    </div>
 </div>
        
  );
};
export default EventPost

//  <div className='eventSection'>
//         <div className="title">
//             <h3>Trending</h3>
//             <hr/>
//         </div>

    
//     <div className='eventDetails__container'> 
//        <div className='eventDetails'>
//           <img src={karaoke} alt=""   className='eventimage'/>
//           <h5>Karaoke Night</h5>
//           <div className='day'> 
//             <img src={calendar} alt="" />
//             <p>Wednesdays, 6pm</p>
//           </div>
//           <div className='location'> 
//               <img src={location} alt="" />
//               <p>Yapaddy's Hotel International, Lagos</p>
//           </div>
//           <div className='ticket'>
//               <div className='ticket__content'>
//                   <img src={ticket} alt="" />
//                    <p>free</p>
//                </div>
//               <img src={share} alt="" className='share' />
//            </div>
//         </div>
     
//        <div className='eventDetails'>
//           <img src={karaoke} alt="" className='eventimage'/>
//            <h5>Karaoke Night</h5>
//           <div className='day'> 
//              <img src={calendar} alt="" />
//              <p>Wednesdays, 6pm</p>
//           </div>
//           <div className='location'> 
//              <img src={location} alt="" />
//              <p>Yapaddy's Hotel International, Lagos</p>
//            </div>
//            <div className='ticket'>
//               <div className='ticket__content'>
//                 <img src={ticket} alt="" />
//                 <p>free</p>
//                </div>
//                 <img src={share} alt="" className='share' />
//                 </div>
//             </div>
//        </div>


//         <div className='eventDetails'>
//            <img src={karaoke} alt="" className='eventimage'/>
//            <h5>Karaoke Night</h5>
//           <div className='day'> 
//              <img src={calendar} alt="" />
//              <p>Wednesdays, 6pm</p>
//           </div>
//            <div className='location'> 
//               <img src={location} alt="" />
//               <p>Yapaddy's Hotel International, Lagos</p>
//             </div>
//             <div className='ticket'>
//               <div className='ticket__content'>
//                   <img src={ticket} alt="" />
//                    <p>free</p>
//                </div>
//               <img src={share} alt="" className='share' />
//            </div>
              
//         </div>


//         <div className='eventDetails'>
//                <img src={karaoke} alt="" className='eventimage'/>
//                <h5>Karaoke Night</h5>
//             <div className='day'> 
//               <img src={calendar} alt="" />
//                <p>Wednesdays, 6pm</p>
//             </div>
//            <div className='location'> 
//               <img src={location} alt="" />
//               <p>Yapaddy's Hotel International, Lagos</p>
//             </div>

//             <div className='ticket'>
//               <div className='ticket__content'>
//                   <img src={ticket} alt="" />
//                    <p>free</p>
//                </div>
//               <img src={share} alt="" className='share' />
//            </div>
//         </div>
//       </div>

   

import React, { useEffect, useState } from 'react';
import './Carousel.css'
import hero1 from  '/images/hero1.png';
import hero2 from '/images/hero2.png';
import hero3 from '/images/hero3.png';
import { FaGreaterThan } from "react-icons/fa6";
import { FaLessThan } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";

export const Carousel = () => {
    const [currentIndex, setCurrentIndex]= useState(0);
    const images = [hero1, hero2, hero3]
    // const texts = [text1, text2, text3]
    const length = 3;
    const handlePrevious = () => {
        const newIndex = currentIndex - 1;
        setCurrentIndex(newIndex < 0 ? length -1 : newIndex);
    };

    const handleNext = () => {
        const newIndex = currentIndex + 1;
        setCurrentIndex(newIndex >= length ? 0 : newIndex)
    }

    useEffect(() => {
      const interval = setInterval(() => {
        handleNext();
    }, 5000);

    return () => {
        clearInterval(interval);
    };
    }, [currentIndex])
    


  return (
        <div className='Carousel__container'>
        <div>
        <img src={images[currentIndex] } className="images" alt={`Slide ${currentIndex + 1}`}/>
           <div className='Next__btn'>
           <div className='btn' onClick = {handlePrevious}><FaLessThan className='FaGreaterThan' /></div>

           <div className='btn' onClick = {handlePrevious}><GoDotFill color={currentIndex === 0 ? "#FDFDFD": "#AAAAAA"} />
          

            <div className='btn' onClick = {handlePrevious}><GoDotFill color={currentIndex === 1 ? "#FDFDFD": "#AAAAAA"} />
           
            
             <div className='btn' onClick = {handlePrevious}><GoDotFill color={currentIndex === 2 ? "#FDFDFD": "#AAAAAA"} />
            
           
           <div className='btn' onClick={handleNext}><FaGreaterThan className='FaGreaterThan' /></div>
           </div>
            <p>{currentIndex}</p>
        </div>
        <div className='texts'>
           <div className='text1' >
                <h1> Davido</h1>
                <p>Lagos</p>
                </div>
                <div>
                    <p>Davido is bringing his signature sound. Join him fr a sensational night at Eko center on July 27th. Get your ticket now for an unforgettable musical experience!</p>
                    <button>Get your ticket</button>
                </div>
           </div>

           <div className='text2'>
                <h1>Enyimba FC</h1>
                <p>Aba</p>
                </div>
                <div>
                    <p>Get ready towitness football magic as Enyimba FC takes on Plateau United at the iconic Enyimba intl stadium. Join the People's Eleohant family and experience the electrifying experience.</p>
                    <button>Get your ticket</button>
                </div>
            </div>

            <div className='text3'>
                <h1>Call of Duty</h1>
                <p>Awaka</p>
                </div>
                <div>
                    <p>Compete in a fierce call of duty challenge with other techies. Enjoy drinks over conversations. Bond and learn new things. Make memoriesto last a life time. </p>
                    <button>Get your ticket</button>
                </div>
     </div>
       </div>
    </div>


  )
}

// `texts ${[currentIndex + texts]}`
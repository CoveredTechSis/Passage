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

           <div className='btn' onClick = {handlePrevious}><GoDotFill color={currentIndex === 0 ? "#FDFDFD": "#AAAAAA"} /></div>

            <div className='btn' onClick = {handlePrevious}><GoDotFill color={currentIndex === 1 ? "#FDFDFD": "#AAAAAA"} /></div>
            
             <div className='btn' onClick = {handlePrevious}><GoDotFill color={currentIndex === 2 ? "#FDFDFD": "#AAAAAA"} /></div>
           
           <div className='btn' onClick={handleNext}><FaGreaterThan className='FaGreaterThan' /></div>
           </div>
            <p>{currentIndex}</p>
        </div>
    </div>
  )
}

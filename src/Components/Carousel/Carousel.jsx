import React, { useState } from 'react';
import hero1 from  '/images/hero1.png';
import hero2 from '/images/hero2.png';
import hero3 from '/images/hero3.png';

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


  return (
    <div className='Carousel__container'>
        <div>
        <img src={images[currentIndex] } className="image" alt={`Slide ${currentIndex + 1}`}/>
            <button onClick = {handlePrevious}>{`<`}</button>
            <button onClick={handleNext}>{`>`}</button>
            <p>{currentIndex}</p>
        </div>
    </div>
  )
}

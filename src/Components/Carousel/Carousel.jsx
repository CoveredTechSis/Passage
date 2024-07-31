import React, { useEffect, useState } from "react";
import "./Carousel.css";
import hero1 from "/images/hero1.png";
import hero2 from "/images/hero2.png";
import hero3 from "/images/hero3.png";
import { FaGreaterThan } from "react-icons/fa6";
import { FaLessThan } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [hero1, hero2, hero3];
  const title = ["Davido", "Enyimba FC", "Call of Duty"];
  const state = ["Lagos", "Aba", "Awaka"];
  const des = [
    "Davido is bringing his signature sound. Join him fr a sensational night at Eko center on July 27th. Get your ticket now for an unforgettable musical experience!",
    "Get ready towitness football magic as Enyimba FC takes on Plateau United at the iconic Enyimba intl stadium. Join the People's Eleohant family and experience the electrifying experience.",
    "Compete in a fierce call of duty challenge with other techies.Enjoy drinks over conversations. Bond and learn new things. Make me moriesto last a life time",
  ];
  // const texts = [text1, text2, text3]
  const length = 3;
  const handlePrevious = () => {
    const newIndex = currentIndex - 1;
    setCurrentIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex >= length ? 0 : newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <div className="Carousel__container">
      <img
        src={images[currentIndex]}
        className="images"
        alt={`Slide ${currentIndex + 1}`}
      />
      <div className="next__btn-container">
        <div className="next__btn">
          <div className="btn" onClick={handlePrevious}>
            <FaLessThan className="FaGreaterThan" />
          </div>

          <div className="btn" onClick={handlePrevious}>
            <GoDotFill color={currentIndex === 0 ? "#FDFDFD" : "#AAAAAA"} />
          </div>

          <div className="btn" onClick={handlePrevious}>
            <GoDotFill color={currentIndex === 1 ? "#FDFDFD" : "#AAAAAA"} />
          </div>
          <div className="btn" onClick={handlePrevious}>
            <GoDotFill color={currentIndex === 2 ? "#FDFDFD" : "#AAAAAA"} />
          </div>
          <div className="btn" onClick={handleNext}>
            <FaGreaterThan className="FaGreaterThan" />
          </div>
        </div>
      </div>
      <div className="texts__container">
        <div className="">
          <p className="texts__title">{title[currentIndex]} </p>
          <p className="texts__state">{state[currentIndex]}</p>
        </div>
        <p className="text__des">{des[currentIndex]}</p>
        <div className="">
          <button className="btn__texts-hero"> Get your ticket</button>
        </div>
      </div>
    </div>
  );
};

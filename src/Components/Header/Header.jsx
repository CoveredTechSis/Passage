import React, { useEffect } from "react";
import "./Header.css";
import { DropCategory } from "../DropCategory/DropCategory";
import { GoPerson } from "react-icons/go";
import { useState } from "react";
import logo from "/icons/logo.png";
import search from "/icons/search.svg";
import { PiCaretDownBold, PiCaretUpBold } from "react-icons/pi";
import { BiMenuAltRight } from "react-icons/bi";
import FormSwitch from "../../Pages/Auth/FormSwitch/FormSwitch";
import { IoEye } from "react-icons/io5";



export const Header = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);


  const [isOverlayVisible, setOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setOverlayVisible(!isOverlayVisible);
  };


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`Header__container ${isScrolled ?    "scrolled" : ""}`}>
      <div className="logo">
        <img src={logo} alt="logo"/>
      </div>

      <div className="searchbar">
        <input type="search" placeholder="Find event" />
        <button className="search__button">
          <img src={search} alt="" />
          <p>search</p>
        </button>
      </div>

      <div className="nav">
        <div
          className="category__header"
          onClick={() => setShowDropDown(!showDropDown)}
        >
          <p>Categories</p>
          <div className="caret">
            {showDropDown ? <PiCaretUpBold /> : <PiCaretDownBold />}
          </div>
          {showDropDown ? <DropCategory /> : null}
        </div>
        <p>About</p>
        <p>Sell a ticket</p>
      </div>

      <div className="profile__icon" onClick={toggleOverlay}>
        <GoPerson />
        {isOverlayVisible?<GoPerson onClick={()=>setOverlayVisible(!isOverlayVisible)}/>: <IoEye onClick={()=>setOverlayVisible(!isOverlayVisible)}/>}
        <BiMenuAltRight className="BiMenuAltRight" />
      </div>


      {isOverlayVisible && (
        <div className="overlay">
    
          <div className="overlay-content">
         <div className="close-overlay" onClick={toggleOverlay} >X</div>


          <div className="close-overlay" onClick={toggleOverlay}>X</div>
            <FormSwitch/>
          </div>
        </div>
      )}

    </div>
  );
};

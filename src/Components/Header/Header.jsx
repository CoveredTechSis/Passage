import React from "react";
import "./Header.css";
import { DropCategory } from "../DropCategory/DropCategory";
import { GoPerson } from "react-icons/go";
import { RxCaretDown } from "react-icons/rx";
import { RxCaretUp } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import logo from "/icons/logo.png";
import { PiCaretDownBold, PiCaretUpBold } from "react-icons/pi";

export const Header = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  return (
    <div className="Header__container">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      
      <div className="searchbar">
        <input type="search" placeholder="Find event" />
        <button className="search__button">
          <IoIosSearch /> search
        </button>
      </div>
      <div className="nav">
        <div
          className="category__header"
          onClick={() => setShowDropDown(!showDropDown)}
        >
          <h2>Category</h2>
          <div className="caret">
            {showDropDown ? <PiCaretUpBold /> : <PiCaretDownBold />}
          </div>
          {showDropDown ? <DropCategory /> : null}
        </div>
        <h4>About</h4>
        <h4>Sell a ticket</h4>
      </div>
      <GoPerson />
    </div>
  );
};

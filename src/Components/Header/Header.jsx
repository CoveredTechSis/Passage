import React from "react";
import "./Header.css";
import { DropCategory } from "../DropCategory/DropCategory";
import { GoPerson } from "react-icons/go";
import { useState } from "react";
import logo from "/icons/logo.png";
import search from "/icons/search.svg";
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

      <div className="profile__icon">
      <GoPerson />
      </div>
    </div>
  );
};

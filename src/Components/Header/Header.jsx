import React from 'react'
import './Header.css'
import { DropCategory } from '../DropCategory/DropCategory';
import { GoPerson } from "react-icons/go";
import { RxCaretDown } from "react-icons/rx";
import { RxCaretUp } from "react-icons/rx";import { IoIosSearch } from "react-icons/io";
import { useState } from "react";

export const Header = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  return (
    <div className='Header__container'>
        <div className="logo">
            <img src="" alt="" />
        </div>
        <div className='searchbar'>
          <input type="search" placeholder='Find event' />
         
          <button>
          <IoIosSearch /> search
          </button>
        
        </div>
        <div className="nav">
        <div className="category__header" onClick={()=>setShowDropDown(!showDropDown)}>
          <h2>Category{showDropDown?<RxCaretUp/>: <RxCaretDown/>}  </h2>
          {showDropDown? <DropCategory />: null}
            </div>
           <h4>About</h4>
            <h4>Sell a ticket</h4>
        </div>
        <GoPerson />
        
    </div>
  )
}

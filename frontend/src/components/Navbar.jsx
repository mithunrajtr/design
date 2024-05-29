import React from 'react'
import menuicon from "../images/icons/menu.svg";
import logoicon from "../images/icons/logo.svg";
import searchicon from "../images/icons/search.svg";
import createicon from "../images/icons/create.svg";

const Navbar = () => {
  return (
    <div className='navigation'>
        <div className='leftbox'>
            <div className='menu'>
                <img src={menuicon} alt='menu icon'/>
            </div>
            <div className='logo'>
                <img src={logoicon} alt='logo icon'/>
            </div>
        </div>
        <div className="center">
            <div className="searchbar">
                <input id="search" name="search_query"  placeholder="Search" />
            </div>
            <button id="search-icon" className="searchicon" aria-label="Search">
                <img src={searchicon} alt='search icon'/>
            </button>
        </div>
        <div className="rightbox">
            <div className='create'>
                <img src={createicon} alt='create icon'/>
            </div>
        </div>
    </div>
  )
}

export default Navbar
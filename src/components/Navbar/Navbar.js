// making the functional component .

import React from "react";
// importing the css
import "./Navbar.css";

// import chevron from "../../chevron.png"


import location from "../../assets/location.png"
import chevron from "../../assets/chevron.png"
import  verticalline from "../../assets/verticalline.png"
import search from "../../assets/search.png" 

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-logo-search-container">
        {/* Logo  */}
        <div>
          <img
            className="navbar-logo"
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
            alt="Logo"
          />
        </div>
        {/* Search  */}
        <div className="navbar-search-container">
          <div className="navbar-search-location">
            <img
              className="navbar-search-location"
              src={location}
              alt="location"
            />
            <input className="navbar-input-location" placeholder="City" />
            <div>
              <img
                className="navbar-search-chevron"
                src={chevron}
                alt="chevron"
              />
              <img
                className="navbar-search-vertical-line"
                src={verticalline}
                alt="vertical line"
              />
            </div>
          </div>
          <div className="navbar-search-restaurant">
            <img
              className="navbar-search-search-icon"
              src={search}
              alt="search"
            />
            <input
              className="navbar-input-restaurant"
              placeholder="Search for restaurant, cuisine or a dish"
            />
          </div>
        </div>
      </div>

      {/* Login Signup  */}
      <div className="navbar-login-signup-button-container">
        <button className="navbar-login-button">Log in</button>
        <button className="navbar-login-button">Sign up</button>
      </div>
    </div>
  );
} 



  
// function Navbar()
// {
//       // componentname-classname this is the naming convention which 
//       // i will use in this project . 
//     return <div className="navbar-container"> 

//     <div >
//        <img src=" "

//         </img>
//     </div>

//     </div>;
   

// }

export default Navbar;
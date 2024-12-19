import React from 'react'
import { useLocation } from 'react-router-dom';
import Hamburger from "./hamburger";
import "./header.css";
function Header() {
    const location = useLocation();
      let text;
    
      // Dynamically update the Background Values
      if (location.pathname === "/calculator") {
        text = "CALCULATOR";
        
    
      } else if (location.pathname === "/weather") {
        text = "WEATHER";
      }else if (location.pathname === "/currencyconverter") {

        text = "CURRENCY";

      }
       else {
        text = "CALCULATOR";
        
    
      }
    
  return (
    <>
        <div className="header">
          <div className="title-bold" >{text}</div>
          <Hamburger />
        </div>
    </>
  )
}

export default Header
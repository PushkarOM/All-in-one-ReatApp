import React from 'react';
import "./Background.css";
import { useLocation } from 'react-router-dom';

const Background = () => {

    const location = useLocation();
    let ellipseStyle;
    let backgroundStyle;
    let text, textlower;

    //dynamically update the Backgorund Values
    if (location.pathname === '/calculator') {
        ellipseStyle = { backgroundColor: '#b8f3d7' };
        backgroundStyle = { backgroundColor: '#fcf5e5' };
        text = "CALCULATOR";
        textlower = "Calculator";
    }
    else if (location.pathname === '/weather') {
        ellipseStyle = { backgroundColor: '#30a6ff' };
        backgroundStyle = { backgroundColor: '#fcfeff' };
        text = "WEATHER";
        textlower = "WeaTher";
    }
    else {
        ellipseStyle = { backgroundColor: '#b8f3d7' };
        backgroundStyle = { backgroundColor: '#fcf5e5' };
        text = "CALCULATOR";
        textlower = "Calculator";
    }

  return (
    <>
        <div className='backgroundCalculator' style={backgroundStyle}>
                <div className='title-bold'>{text}</div>
                <div className='ellipse-top-left' style={ellipseStyle}></div>
                <div className='ellipse-top-right' style={ellipseStyle}></div>
                <div className='ellipse-bottom-right' style={ellipseStyle}></div>
                <div className='title-small'>{textlower}</div>
                <div className='logo one'></div>
                <div className='logo two'></div>
                <div className='logo three'></div>
            </div>
    </>
  )
}

export default Background;
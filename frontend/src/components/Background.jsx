import React from "react";
import "./Background.css";
import { useLocation } from "react-router-dom";
// Import icons for calculator and weather
import { FaPlus, FaTimes, FaEquals, FaRobot } from "react-icons/fa";
import { FaRupeeSign, FaDollarSign, FaPoundSign } from "react-icons/fa";
import { FaPencilAlt, FaPencilRuler, FaRuler } from "react-icons/fa";
import { IoSunny, IoRainy, IoCloudy } from "react-icons/io5";


const Background = () => {
  const location = useLocation();
  let ellipseStyle,
    text,
    textlower,
    backgroundStyle,
    oneLogo,
    twoLogo,
    threeLogo,
    chatbottextstyle;

  // Dynamically update the Background Values
  if (location.pathname === "/calculator") {
    ellipseStyle = { backgroundColor: "#b8f3d7" };
    backgroundStyle = { backgroundColor: "#fcf5e5" };
    textlower = "Calculator";
    text = "CALCULATOR";
    // Icons for calculator
    oneLogo = <FaPlus className="logo-icon" />;
    twoLogo = <FaTimes className="logo-icon" />;
    threeLogo = <FaEquals className="logo-icon" />;
  } else if (location.pathname === "/weather") {
    ellipseStyle = { backgroundColor: "#30a6ff" };
    backgroundStyle = { backgroundColor: "#fcfeff" };
    textlower = "WeaTher";
    text = "WEATHER";
    // Icons for weather
    oneLogo = <IoSunny className="logo-icon" />;
    twoLogo = <IoRainy className="logo-icon" />;
    threeLogo = <IoCloudy className="logo-icon" />;
  }else if (location.pathname === "/currencyconverter") {
    ellipseStyle = { backgroundColor: "#a9e700" };
    backgroundStyle = { backgroundColor: "#dbe8b5" };
    textlower = "CurrenCy";
    text = "CURRENCY";
    // Icons for weather
    oneLogo = <FaRupeeSign className="logo-icon" />;
    twoLogo = <FaDollarSign className="logo-icon" />;
    threeLogo = <FaPoundSign className="logo-icon" />;
  }
  else if (location.pathname === "/todoapp") {
    ellipseStyle = { backgroundColor: "#e79e00" };
    backgroundStyle = { backgroundColor: "#f0d9a6" };
    textlower = "ToDoList";
    text = "TODO LIST";
    // Icons for weather
    oneLogo = <FaPencilRuler className="logo-icon" />;
    twoLogo = <FaRuler className="logo-icon" style={{ transform: "rotatez(73deg)" }} />;
    threeLogo = <FaPencilAlt className="logo-icon" />;
  } else if (location.pathname === "/chatbot") {
    ellipseStyle = { backgroundColor: "#000000" , "box-shadow" : "0 0 10px 0 #ffffff"};
    backgroundStyle = { backgroundColor: "#50a1f2" };
    textlower = "ChatBot";
    text = "CHATBOT";
    chatbottextstyle = { color: "white" };
    // Icons for weather
    
    oneLogo = <FaRobot className="logo-icon" style={{ transform: "rotatez(45deg)" }} />;
  }
   else {
    ellipseStyle = { backgroundColor: "#b8f3d7" };
    backgroundStyle = { backgroundColor: "#fcf5e5" };
    textlower = "Calculator";
    text = "CALCULATOR";
  }

  return (
    <>
      <div className="backgroundCalculator" style={backgroundStyle}>
        <div className="title-bold" style={chatbottextstyle}>{text}</div>
        <div className="ellipse-top-left" style={ellipseStyle}></div>
        <div className="ellipse-top-right" style={ellipseStyle}></div>
        <div className="ellipse-bottom-right" style={ellipseStyle}></div>
        <div className="title-small" style={chatbottextstyle}>{textlower}</div>

        {/* Dynamic Logos */}
        <div className="logo one">{oneLogo}</div>
        <div className="logo two">{twoLogo}</div>
        <div className="logo three">{threeLogo}</div>
      </div>
    </>
  );
};

export default Background;

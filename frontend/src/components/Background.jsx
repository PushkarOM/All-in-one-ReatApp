import React from "react";
import "./Background.css";
import { useLocation } from "react-router-dom";

// Import icons for calculator and weather
import { FaPlus, FaTimes, FaEquals } from "react-icons/fa";
import { IoSunny, IoRainy, IoCloudy } from "react-icons/io5";

const Background = () => {
  const location = useLocation();
  let ellipseStyle,
    text,
    textlower,
    backgroundStyle,
    oneLogo,
    twoLogo,
    threeLogo;

  // Dynamically update the Background Values
  if (location.pathname === "/calculator") {
    ellipseStyle = { backgroundColor: "#b8f3d7" };
    backgroundStyle = { backgroundColor: "#fcf5e5" };
    text = "CALCULATOR";
    textlower = "Calculator";

    // Icons for calculator
    oneLogo = <FaPlus className="logo-icon" />;
    twoLogo = <FaTimes className="logo-icon" />;
    threeLogo = <FaEquals className="logo-icon" />;
  } else if (location.pathname === "/weather") {
    ellipseStyle = { backgroundColor: "#30a6ff" };
    backgroundStyle = { backgroundColor: "#fcfeff" };
    text = "WEATHER";
    textlower = "WeaTher";

    // Icons for weather
    oneLogo = <IoSunny className="logo-icon" />;
    twoLogo = <IoRainy className="logo-icon" />;
    threeLogo = <IoCloudy className="logo-icon" />;
  } else {
    ellipseStyle = { backgroundColor: "#b8f3d7" };
    backgroundStyle = { backgroundColor: "#fcf5e5" };
    text = "CALCULATOR";
    textlower = "Calculator";

  }

  return (
    <>
      <div className="backgroundCalculator" style={backgroundStyle}>
        <div className="title-bold">{text}</div>
        <div className="ellipse-top-left" style={ellipseStyle}></div>
        <div className="ellipse-top-right" style={ellipseStyle}></div>
        <div className="ellipse-bottom-right" style={ellipseStyle}></div>
        <div className="title-small">{textlower}</div>

        {/* Dynamic Logos */}
        <div className="logo one">{oneLogo}</div>
        <div className="logo two">{twoLogo}</div>
        <div className="logo three">{threeLogo}</div>
      </div>
    </>
  );
};

export default Background;

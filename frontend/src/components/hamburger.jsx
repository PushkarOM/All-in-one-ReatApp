import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import "./hamburger.css"

const hamburger = () => {
    const location = useLocation();
    let sidemenuStyle;
    if (location.pathname === '/calculator') {
        sidemenuStyle = { backgroundColor: '#fcf5e5' };
    }
    else if (location.pathname === '/weatherapp') {
        sidemenuStyle = { backgroundColor: '#fcf5e5' };
    }
    else {
        sidemenuStyle = { backgroundColor: '#fcf5e5' };
    }


    const [isSidebarActive, setIsSidebarActive] = useState(false);
    // Toggle sidebar visibility
    const toggleSideMenu = () => {
        setIsSidebarActive(!isSidebarActive);
    };

    // Close sidebar
    const closeSideMenu = () => {
        setIsSidebarActive(false);
    };

    return (
        <>
            <div className='hamburger-symbol' onClick={toggleSideMenu}>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>
            <div className={`sidemenu ${isSidebarActive ? 'active' : 'inactive'}`} style={sidemenuStyle}>
                <div className='x-logo' onClick={closeSideMenu}>X</div>
                <button>Games</button>
                <button>Currency Converter</button>
                <button>Note Taker</button>
                <button>Weather App</button>
            </div>
        </>
    )
}

export default hamburger;
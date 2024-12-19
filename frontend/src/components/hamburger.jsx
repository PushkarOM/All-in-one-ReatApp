import React, { useEffect, useState } from 'react'
import { useLocation , NavLink} from 'react-router-dom';
import "./hamburger.css"

const hamburger = () => {
    const location = useLocation();
    let sidemenuStyle;
    if (location.pathname === '/calculator') {
        sidemenuStyle = { backgroundColor: '#fcf5e5' };
    }
    else if (location.pathname === '/weather') {
        sidemenuStyle = { backgroundColor: '#fcfeff' };
    }
    else if(location.pathname === '/currencyconverter'){
        sidemenuStyle = { backgroundColor : "#dbe8b5"};
    }
    else if(location.pathname === '/todoapp'){  
        sidemenuStyle = { backgroundColor : "#f0d9a6"};
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
                    <NavLink 
                        className={({ isActive }) => isActive ? 'active-link' : 'Links'}
                        to = "/"
                    >
                        Games
                    </NavLink>
                    <NavLink 
                        className={({ isActive }) => isActive ? 'active-link' : 'Links'}
                        to = "/"
                    >
                        Note Taker
                    </NavLink>
                    <NavLink 
                        className={({ isActive }) => isActive ? 'active-link' : 'Links'}
                        to = "/currencyconverter"
                    >
                        Currency Converter
                    </NavLink>
                    <NavLink 
                        className={({ isActive }) => isActive ? 'active-link' : 'Links'}
                        to = "/calculator"
                    >
                        Calculator
                    </NavLink>
                    <NavLink 
                        className={({ isActive }) => isActive ? 'active-link' : 'Links'}
                        to = "/weather"
                    >
                        Weather
                    </NavLink>

                
            </div>
        </>
    )
}

export default hamburger;
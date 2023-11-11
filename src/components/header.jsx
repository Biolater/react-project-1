import "./header.css"
import React from 'react';
import LogoImage from '../images/brand_logo.png';
import { useState, useEffect } from "react";

const closed = "M3 9.5C2.17157 9.5 1.5 8.82843 1.5 8C1.5 7.17157 2.17157 6.5 3 6.5C3.82843 6.5 4.5 7.17157 4.5 8C4.5 8.82843 3.82843 9.5 3 9.5ZM8 9.5C7.17157 9.5 6.5 8.82843 6.5 8C6.5 7.17157 7.17157 6.5 8 6.5C8.82843 6.5 9.5 7.17157 9.5 8C9.5 8.82843 8.82843 9.5 8 9.5ZM13 9.5C12.1716 9.5 11.5 8.82843 11.5 8C11.5 7.17157 12.1716 6.5 13 6.5C13.8284 6.5 14.5 7.17157 14.5 8C14.5 8.82843 13.8284 9.5 13 9.5Z";

const opened = "M9.5 13C9.5 13.8284 8.82843 14.5 8 14.5C7.17157 14.5 6.5 13.8284 6.5 13C6.5 12.1716 7.17157 11.5 8 11.5C8.82843 11.5 9.5 12.1716 9.5 13ZM9.5 8C9.5 8.82843 8.82843 9.5 8 9.5C7.17157 9.5 6.5 8.82843 6.5 8C6.5 7.17157 7.17157 6.5 8 6.5C8.82843 6.5 9.5 7.17157 9.5 8ZM9.5 3C9.5 3.82843 8.82843 4.5 8 4.5C7.17157 4.5 6.5 3.82843 6.5 3C6.5 2.17157 7.17157 1.5 8 1.5C8.82843 1.5 9.5 2.17157 9.5 3Z";

const MenuItem = ({ text }) => <li>{text}</li>;

const Header = () => {
    const menuItems = ['MENU', 'LOCATION', 'ABOUT', 'CONTACT'];
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 576) {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <header className="main-header">
            <nav className="navbar">
                <div className="logo">
                    <img src={LogoImage} alt="Brand Logo" />
                </div>
                <ul>
                    {menuItems.map((item, index) => (
                        <MenuItem key={index} text={item} />
                    ))}
                </ul>
                <div className="navbar__login-button">
                    <button>Login</button>
                </div>
                <div className="toggle-button" onClick={() => { toggleMenu() }}>
                    <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d={isOpen ? opened : closed} fill="black" />
                    </svg>
                </div>
            </nav>
            <div className={isOpen ? "canvas-menu canvas-open" : "canvas-menu"}>

                {menuItems.map((item, index) => (
                    <MenuItem key={index} text={item} />
                ))}
            </div>
        </header>
    );
};

export default Header;

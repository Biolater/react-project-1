import "./header.css"
import React from 'react';
import LogoImage from '../images/brand_logo.png';

const MenuItem = ({ text }) => <li>{text}</li>;

const Header = () => {
    const menuItems = ['MENU', 'LOCATION', 'ABOUT', 'CONTACT'];

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
            </nav>
        </header>
    );
};

export default Header;

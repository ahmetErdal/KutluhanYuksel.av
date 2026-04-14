import React from 'react';
import './Header.css'; // Assuming you have a separate CSS file for header styles

const Header = () => {
    return (
        <header>
            <div className="logo">
                <h1>My Portfolio</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
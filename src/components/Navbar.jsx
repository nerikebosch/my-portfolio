import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (

        <nav className="navbar">
            <div className="navbar-center">
                <a href ="#home">Home</a>
                <a href ="#about">About</a>
                <a href ="#projects">Projects</a>
                <a href ="#contact">Contact</a>
            </div>
        </nav>
    )
};

export default Navbar;
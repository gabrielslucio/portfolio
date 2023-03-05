import React from "react";

import images from "../../constants/images";

import "./Navbar.scss"

const Navbar = () => {

    return (
        <div className="app__navbar">
            <div className="app__navbar-container">
                <div className="app__navbar-logo">
                    <img src={images.logo} />                   
                </div>
                <div className="app__navbar-navigation">
                    <ul className="app__navbar-ul">
                        <li className="app__navbar-about"><a href="about">About</a></li>
                        <li className="app__navbar-projects"><a href="projects">Projects</a></li>
                        <li className="app__navbar-contacts"><a href="contacts">Contacts</a></li>
                    </ul>
                </div>
            </div>            
        </div>
    );
};

export default Navbar;
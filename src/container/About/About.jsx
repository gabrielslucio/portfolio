import React from "react";
import images from "../../constants/images";
import {AiFillHtml5} from "react-icons/ai";
import {DiCss3, DiJavascript1, DiReact, DiSass} from "react-icons/di";
import {FaBootstrap} from "react-icons/fa";

import './About.scss';

const About = () => {
    return(
        <div className="app__about" id="about">
            <div className="app__about-container">                
                <div className="app__about-title">
                    <h1>About</h1>
                </div>
                <div className="app__about-ppicture">
                    <img src={images.ppic} alt="imagem de perfil" />
                </div>
                <div className="app__about-prog">
                    <h2>Technologies</h2>

                    <div className="app__about-icons">
                        <span className="html5"><AiFillHtml5/></span>
                        <span className="css3"><DiCss3 /></span>
                        <span className="sass"><DiSass /></span>
                        <span className="bootstrap"><FaBootstrap /></span>
                        <span className="javascript"><DiJavascript1 /></span>
                        <span className="react"><DiReact /></span>
                    </div>
                    
                </div>
                <div className="app__about-text">
                    <p>
                        Hello! My name is Gabriel, a front-end developer from Sintra, Portugal, with a passion for designing visually stunning and responsive websites using HTML, CSS, JavaScript, and React. In my free time, I love to play guitar, skate, surf, and travel for inspiration to explore new design trends and stay up-to-date with the latest front-end frameworks.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
import React from "react";
import images from "../../constants/images";

import {AiFillHtml5} from "react-icons/ai";
import {DiCss3, DiJavascript1, DiReact} from "react-icons/di";

import './About.scss';

const About = () => {
    return(
        <div className="app__about" id="about">
            <div className="app__about-container">                
                <div className="app__about-title">
                    <h2>About</h2>
                </div>
                <div className="app__about-text">
                    <p>
                        Welcome! I'm Gabriel, a Fullstack Developer from Sintra, Portugal with a passion for creating dynamic and engaging digital experiences. With a Humanities background and a Bachelor's degree in Archaeology, I bring a unique perspective to my work.
                        Beyond coding, you can find me exploring my many interests, from strumming my guitar to shredding at the skatepark, or catching waves at the beach. Traveling and learning new things are my main sources of inspiration.
                        Let's work together to build something great!
                    </p>
                </div>
                <div className="app__about-ppicture">
                    <img src={images.ppic} alt="imagem de perfil" />
                </div>
                <div className="app__about-prog">
                    <h3>Technologies</h3>
                    <span className="html5"><AiFillHtml5 /></span>
                    <span className="css3"><DiCss3 /></span>
                    <span className="javascript"><DiJavascript1 /></span>
                    <span className="react"><DiReact /></span>
                </div>
            </div>
        </div>
    );
};

export default About;
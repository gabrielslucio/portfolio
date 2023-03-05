import React, { useState } from "react";

import {BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill} from "react-icons/bs";

import project01 from "../../assets/bibliotecax/project01.jpg";
import project02 from "../../assets/bibliotecax/project02.png";
import project03 from "../../assets/bibliotecax/project03.png";



function Slider({ projectId }) {
  const [index, setIndex] = useState(0);

  const imagesList = [
    project01,
    project02,
    project03
  ];

  const handlePrevClick = () => {
    setIndex((index - 1 + imagesList.length) % imagesList.length);
  };

  const handleNextClick = () => {
    setIndex((index + 1) % imagesList.length);
  };

  return (
    <div className="slider">
      <img src={imagesList[index]} alt={`Project ${projectId} image`} />
      <div className="slider-buttons">
        <button onClick={handlePrevClick}><BsFillArrowLeftSquareFill className="left" /></button>
        <button onClick={handleNextClick}><BsFillArrowRightSquareFill className="right"/></button>
      </div>
    </div>
  );
}

export default Slider;
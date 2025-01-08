import React, { useRef } from 'react';
import "./Workexp.css";
import Expcard from './Expcard/Expcard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const workExp = [
  {
    title: "MERN Stack Developer",
    date: "June 2024 - Present",
    responsibility: [
      "Built full-stack web applications using MongoDB, Express, React, and Node.js.",
      "Implemented RESTful APIs to ensure efficient client-server communication.",
      "Optimized database queries to improve application performance and  implementation design principles.",
    ],
  },
  {
    
    title: "Frontend Developer",
    date: "May 2022 - June 2024",
    responsibility: [
      "Developed interactive user interfaces with React and modern CSS frameworks.",
      "Collaborated with backend developers to integrate APIs into the frontend.",
      "Ensured cross-browser compatibility and responsive design for web applications.",
    ],
  },
  {
    title: "UI Developer",
    date: "Nov 2021 - Sep 2022",
    responsibility: [
      "Translated wireframes and designs into high-quality, accessible code.",
      "Enhanced user experience by optimizing website loading speed and navigation.",
      "Worked closely with designers to align UI implementation with design principles.",
    ],
  },
];


const Workexperience = () => {
  const slideRef =useRef()
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows:false,
    responsive:[
      {
        breakpoint:769,
        settings:{
          slidesToShow:1,
          slidesToScroll:1,
        },
      },
    ]
  };

  const slideRight=()=>{
   slideRef.current.slickNext();
  };
  const slideleft=()=>{
    slideRef.current.slickPrev();
   };
  return (
    <div className="Workexp">
      
      <h5>Work Experience</h5>
      <div className="Workexp-content">
        <div className="arrow-right" onClick={slideRight}>
          <span class='material-symbols-outlined'>chevron_right</span>
        
        </div>
        <div className="arrow-left" onClick={slideleft}>
          <span class='material-symbols-outlined'>chevron_left</span>
        </div>
        <Slider  ref={slideRef}{...settings}>
        {workExp.map((item) => (
          <Expcard key={item.title} details={item} />
        ))}
        </Slider>
      </div>
    
      
    </div>
  );
};

export default Workexperience;

import React from 'react';
import './Mobilenav.css';
import  Logo from '../../Images/Wolf.jpg';

const Mobilenav = ({ isOpened, togglemenu }) => {
  return (
    <div className={`mobile-menu ${isOpened ? 'active' : ''}`} onClick={togglemenu}>
      <div className="mobile-menu-container">
        <img className='Logosec' src={Logo} alt="" />
        <ul>
          <li><a href="#Home">Home</a></li>
          <li><a href="#Skills">Skills</a></li>
          <li><a href="#Expirience">Experience</a></li>
          <li><a href="#Contact Me">Contact Me</a></li>
          <button className="nav-mainbtn">More Details</button>
        </ul>
      </div>
    </div>
  );
};

export default Mobilenav

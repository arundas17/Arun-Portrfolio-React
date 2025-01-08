import React,{ useState } from 'react';
import './Navbar.css'
import Logo from '../../Images/Wolf.jpg'
import Mobilenav from '../Mobile-nav/Mobilenav';

const Navbar = () => {
 const [openmenu,setOpenmenu]=useState(false);
 const togglemenu=()=>{
     setOpenmenu(!openmenu);
  }
  return (
    <>
    <Mobilenav isOpened={openmenu} togglemenu={togglemenu}/>
    <div className='nav-wrapper'>
        <div className="nav-content">
                <img className='Logosec' src={Logo} alt="" />
                <ul>
                    <li><a href="#Home" className='menuitem'>Home</a></li>
                    <li><a href="#Skills" className='menuitem'> Skills</a></li>
                    <li><a href="#Expirience" className='menuitem'> Expirience</a></li>
                    <li><a href="#Contact Me"className='menuitem' > Contact Me</a></li>
                    <button className='nav-mainbtn' >More Details</button>
                    
                </ul>
                <button className="menu-btn" onClick={togglemenu}>
               <span
                className="material-symbols-outlined"
                 style={{ fontSize: '25px' }}>
                 {openmenu ? 'close': 'menu'}
                </span>
               </button>

            </div>
      
    </div>
    </>
    
    
  )
}

export default Navbar

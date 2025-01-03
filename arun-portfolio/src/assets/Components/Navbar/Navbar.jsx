import React, { useState } from 'react';
import './Navbar.css'; // Corrected import path
import { RiCloseLine, RiMenu2Line } from '@remixicon/react';

const Navbar = () => {
    const [menu,openMenu] = useState(true); 
    const [showMenu,setshowMenu]=useState(false)

    return (
        <div className="navbar"> {/* className instead of class */}
            <ul className={menu ? "block" : "hide"}>
                <a href="#About"><li>About</li></a>
                <a href="#Experience"><li>Experience</li></a> {/* Corrected typo */}
                <a href="#Projects"><li>Projects</li></a>
                <a href="#Contact"><li>Contact</li></a>
            </ul>
            {showMenu ? (
                <RiMenu2Line size={30} className='hamberger md:hidden' onClick={()=>{openMenu(!menu);setshowMenu(!showMenu)}} /> 
            ) : (
                <RiCloseLine size={30} className='hamberger close md:hidden' onClick={()=>{openMenu(!menu);setshowMenu(!showMenu)}} /> 
            )}
        </div>
    );
};

export default Navbar;
import { useState } from 'react'
import './index.css';
import './App.css';
import Navbar from './assets/Components/Navbar/Navbar';
import NavbarLogo from './assets/Components/Navbarlogo/NavbarLogo';
import Mainsection from './assets/Components/Mainsection/Mainsection';
import Workexpirience from './assets/Components/Workexpirince/Workexpirience';





function App() {
  

  return (
  <div className="portfolio content-wrappper">
    <Navbar/>
    <div className='container'>
    <Mainsection/>
   <Workexpirience/>
    </div>
    
  </div>
  )
}

export default App

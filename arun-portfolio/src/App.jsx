import { useState } from 'react'
import './index.css';
import './App.css';
import Navbar from './assets/Components/Navbar/Navbar';
import NavbarLogo from './assets/Components/Navbarlogo/NavbarLogo';



function App() {
  const [count, setCount] = useState(0)

  return (
  <div className="portfolio content-wrappper">
    <div className="nav-wrapper">
    <NavbarLogo/>
    <Navbar/>
    </div>
  
  
  </div>
  )
}

export default App

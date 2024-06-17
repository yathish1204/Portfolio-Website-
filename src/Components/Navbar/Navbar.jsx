import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../Assets/logo.png'
import { Link } from 'react-scroll'
import menu from '../../Assets/menu.svg'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
        <img src={logo} alt="logo image" className="logo" />
        <div className="desktop-menu">
        <Link activeClasss ='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktop-menu-list-items'>Home</Link>
            <Link activeClasss ='active' to='skills' spy={true} smooth={true} offset={-100} duration={500}  className='desktop-menu-list-items'>About</Link>
            <Link activeClasss ='active' to='work' spy={true} smooth={true} offset={-100} duration={500}  className='desktop-menu-list-items'>Portfolio</Link>
            <Link activeClasss ='active' to='clients' spy={true} smooth={true} offset={-100} duration={500}  className='desktop-menu-list-items'>Clients</Link>
        </div>
        <button className='nav-btn' onClick={()=>{
          document.getElementById('contact').scrollIntoView();
        }}><i className="fa-regular fa-message "></i>Contact Me</button>

<img src={menu} alt="Menu" className="mobMenu"  onClick={()=>setShowMenu(!showMenu)}/>
        <div className="nav-menu" style={{display:showMenu?'flex':'none'}}>
        <Link activeClasss ='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='menu-list-items' onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClasss ='active' to='skills' spy={true} smooth={true} offset={-100} duration={500}  className='menu-list-items' onClick={()=>setShowMenu(false)}>About</Link>
            <Link activeClasss ='active' to='work' spy={true} smooth={true} offset={-100} duration={500}  className='menu-list-items' onClick={()=>setShowMenu(false)}>Portfolio</Link>
            <Link activeClasss ='active' to='clients' spy={true} smooth={true} offset={-100} duration={500}  className='menu-list-items' onClick={()=>setShowMenu(false)}>Clients</Link>
            <Link activeClasss ='active' to='clients' spy={true} smooth={true} offset={-100} duration={500}  className='menu-list-items' onClick={()=>setShowMenu(false)}>Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar

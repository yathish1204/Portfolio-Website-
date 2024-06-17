import React from 'react'
import './Intro.css'
import bg from '../../Assets/bgRemoved.png'
import { Link } from 'react-scroll'

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Yathish Shettigar</span><br /></span>
            <span className="profession">Front End Developper</span>
            <p className="introPara">HTML | CSS | Javascript | React JS | Bootstrap | Tailwind CSS |<br />
                Figma | Adobe Creative Suite | Express JS | Node JS</p>
                <div className='btn-box'>
                  <Link ><button className='btn'><i className="fa-solid fa-file"></i>Resume CV</button></Link>
                  <Link ><button className='btn'><i className="fa-solid fa-briefcase"></i>Hire Me</button></Link>
                </div>
        </div>
        <img src={bg} alt="" className="bg" />
    </section>
  )
}

export default Intro

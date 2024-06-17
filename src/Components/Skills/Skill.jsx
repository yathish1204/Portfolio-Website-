import React from 'react'
import './Skill.css'
import app_icon from '../../Assets/appDesign.png'
import web_icon from '../../Assets/webDesign.png'
import uiux_icon from '../../Assets/uiuxDesign.png'

const Skill = () => {
  return (
    <section id="skills">
      <span className="skill-title">What I do</span>
      <span className="skill-desc">I am skilled and passionate front end developer with proficient in HTML, 
      CSS, Javascript, React JS, Express JS, Node JS etc and Industy leading tools like Figma, Adobe Creative suite etc.</span>
      <div className="skillbars">
        <div className="skillbar">
          <img loading="lazy" src={web_icon} alt="" className="skillbar-img" />
          <div className="skillbarText">
            <h2>Web Design</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, pariatur.</p>
          </div>
        </div>
        <div className="skillbar">
          <img loading="lazy" src={uiux_icon} alt="" className="skillbar-img" />
          <div className="skillbarText">
            <h2>UI/UX Design</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, pariatur.</p>
          </div>
        </div>
        <div className="skillbar">
          <img loading="lazy" src={app_icon} alt="" className="skillbar-img" />
          <div className="skillbarText">
            <h2>App Design</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, pariatur.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skill

import React from "react";
import "./Works.css";
import work_1 from '../../Assets/1.jpg'
import work_2 from '../../Assets/2.jpg'
import work_3 from '../../Assets/3.jpg'
import work_7 from '../../Assets/7.jpg'
import work_5 from '../../Assets/5.jpg'
import work_6 from '../../Assets/6.jpg'
const Works = () => {
  return (
    <section id="work">
      <h2 className="workk-title">Portfolio</h2>
      <span className="works-desc">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
        inventore nulla sunt? Velit officia dolorum accusamus. Esse quaerat
        sapiente incidunt!
      </span>
      <div className="works-imgs">
        <img loading="lazy" src={work_1} alt="work 1" className="works-img" />
        <img loading="lazy" src={work_2} alt="work 2" className="works-img" />
        <img loading="lazy" src={work_3} alt="work 3" className="works-img" />
        <img loading="lazy" src={work_7} alt="work 4" className="works-img" />
        <img loading="lazy" src={work_5} alt="work 5" className="works-img" />
        <img loading="lazy" src={work_6} alt="work 6" className="works-img" />
      </div>
      <button className="work-btn">See More</button>
    </section>
  );
};

export default Works;

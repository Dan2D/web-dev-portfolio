import React from 'react';
import LazyLoad from 'react-lazyload';
import {Link} from 'react-router-dom';
import SectionTtl from '../SectionTtl';
import SkillsCard from './SkillsCard';
import './About.css';

function About(props) {    
    const scrollTo = (e) => {
        e.preventDefault();
        let id = e.target.getAttribute("href");
        document.querySelector(id).scrollIntoView({ behavior: "smooth", block: "start" });
      }
    return (

        <div className="about-container">
            <div className="anchor-pt" id="about" />
            <SectionTtl name="about" title="ABOUT" icon="climber" />
            <div className="about-content">
                <div className="about-text">
                    <p className="about-text__blurb">
                    Hi, I’m Dan Schultz, a web developer based in Seattle, WA.
                    I'm a Front-End Engineer with experience with Back-End and UX/UI Design.
                    I love to create sites and applications with a focus on creativity and efficiency.
                    When I’m not programming I like to camp, go on runs, play board games/DnD, and digitally paint. 
                    <br/><br/>
                    Feel free to <a className="contact-link" href="#contact" onClick={(e) => scrollTo(e)}>contact me</a> if you need any help on your next creative project!
                    </p>
                    <p className="about-text__sig">- Dan</p>
                </div>
                <LazyLoad height={200} offset={100}>
                <div className="skill-cards">
                    <SkillsCard
                    name="programming" 
                    title="PROGRAMMING" 
                    skills={["HTML5", "CSS3", "Javascript", "jQuery", "React.js", "React Redux", "React Router", "Nodejs", "MongoDB", "Git", "Webpack", "Bootstrap"]}
                    />
                    <SkillsCard
                    name="design" 
                    title="DESIGN"
                    skills={["Photoshop", "Figma"]}
                    />
                </div>
                </LazyLoad>
                
                <div className="about-links">
                    <a className="link-icon" href="https://github.com/Dan2D">
                        <img src={require('../../images/icons/Github_Logo.png')} alt="github" />
                        <p>Github</p>
                    </a>
                    <a className="link-icon" href="https://www.linkedin.com/in/danschultz-dev/">
                        <img src={require('../../images/icons/Linkedin_Logo.png')} alt="linkedin" />
                        <p>Linkedin</p>
                    </a>
                    <Link to="/resume" className="link-icon">
                        <img src={require('../../images/icons/Resume_Logo.png')} alt="document icon" />
                        <p>Resume</p>
                    </Link>
                </div>
            </div>
        </div>
        
    )
}

export default About

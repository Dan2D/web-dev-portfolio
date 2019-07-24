import React from 'react';
import SectionTtl from '../SectionTtl';
import SkillsCard from './SkillsCard';
import './About.css';

function About(props) {
// TODO(LOAD UPDATED RESUME AND LINK NEW LINKED IN)
    
    return (
        <div className="about-container">
            <SectionTtl name="about" title="ABOUT" icon="climber" />
            <div className="about-content">
                <div className="about-text">
                    <p className="about-text__blurb">
                    Hi, I’m Dan Schultz, a web developer based in Seattle, WA.
                    I love creating unique and useful applications. When I’m not programming I
                    like to camp, play board games/DnD, run, and digitally paint. Feel free to 
                    contact me if you need any help on your next creative project!
                    </p>
                    <p className="about-text__sig">- Dan</p>
                </div>
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
                <div className="about-links">
                    <a className="link-icon" href="#">
                        <img src={require('../../images/icons/Github_Logo.png')} alt="github" />
                        <p>Github</p>
                    </a>
                    <a className="link-icon" href="#">
                        <img src={require('../../images/icons/Linkedin_Logo.png')} alt="linkedin" />
                        <p>Linkedin</p>
                    </a>
                    <a className="link-icon" href="#">
                        <img src={require('../../images/icons/Resume_Logo.png')} alt="document icon" />
                        <p>Resume</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About

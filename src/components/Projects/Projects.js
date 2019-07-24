import React from 'react';
import ProjCard from './Card/ProjCard';
import {projTxt} from './ProjTxt';
import './Projects.css'

function Projects(props) {
    return (
        <div className="projects-container" id="projects">
            <div className="sec-ttl">
                <h1 className="sec-ttl__title">PROJECTS</h1>
                <img className="sec-ttl__icon" src={require('../../images/icons/backpack.png')} alt="backpack"/>
            </div>
            <div className="proj-cards">
                <ProjCard 
                title="1920's Murder Mystery Party" 
                name="mystery" 
                tools={["HTML5", "CSS3", "Javascript", "React.js"]}
                design={["Photoshop", "Figma"]}
                purpose={projTxt.mystery.purpose}
                notes={projTxt.mystery.notes}
                />
            </div>
            
        </div>
    )
}

export default Projects;

import React from 'react';
import SectionTtl from '../SectionTtl';
import ProjCard from './Card/ProjCard';
import {projTxt} from './ProjTxt';
import './Projects.css'

function Projects(props) {
    return (
        <div className="projects-container" id="projects">
            <SectionTtl name="projects" title="PROJECTS" icon="backpack"/>
            <div className="proj-cards">
                <ProjCard 
                title="1920's Murder Mystery Party" 
                name="mystery" 
                tools={["HTML5", "CSS3", "Javascript", "React.js"]}
                design={["Photoshop", "Figma"]}
                purpose={projTxt.mystery.purpose}
                notes={projTxt.mystery.notes}
                />
                <ProjCard 
                title="Best Selling Books" 
                name="books" 
                tools={["HTML5", "CSS3", "Javascript", "React.js"]}
                design={["Photoshop", "Figma"]}
                purpose={projTxt.books.purpose}
                notes={projTxt.books.notes}
                />
                <ProjCard 
                title="White Rabbit Running Tracker" 
                name="run" 
                tools={["HTML5", "CSS3", "Javascript", "React.js", "React Redux", "React Router", "Nodejs", "MongoDB", "Bootstrap"]}
                design={["Photoshop", "Figma"]}
                purpose={projTxt.run.purpose}
                notes={projTxt.run.notes}
                />
            </div>
            
        </div>
    )
}

export default Projects;

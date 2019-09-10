import React from 'react';
import LazyLoad from 'react-lazyload';
import SectionTtl from '../SectionTtl';
import ProjCard from './Card/ProjCard';
import {projTxt} from './ProjTxt';
import './Projects.css'

function Projects(props) {
    return (
       
        <div className="projects-container" >
            <div className="anchor-pt" id="projects"/>
            <SectionTtl name="projects" title="PROJECTS" icon="backpack"/>
            <p className="projects-dscrpt"
                data-aos="fade-right" 
                data-aos-delay="100" 
                data-aos-duration="700" 
                data-aos-once="true">
            Some of my latest creative works...
            </p>
            <div className="proj-cards" 
                  data-aos="fade-down" 
                  data-aos-delay="200" 
                  data-aos-duration="700" 
                  data-aos-once="true">
            <LazyLoad height={200} offset={-200}>
            <ProjCard 
                title="Board Game Bound" 
                name="game" 
                design={["Photoshop", "Figma"]}
                purpose={projTxt.game.purpose}
                />
            <ProjCard 
                title="White Rabbit Running Tracker" 
                name="run" 
                purpose={projTxt.run.purpose}
                />
            <ProjCard
                title="Best Selling Books" 
                name="books"
                purpose={projTxt.books.purpose}
                />
            <ProjCard 
                title="1920's Murder Mystery Party" 
                name="mystery" 
                purpose={projTxt.mystery.purpose}
                />
                 </LazyLoad>
            </div>
        </div>
    )
}

export default Projects;

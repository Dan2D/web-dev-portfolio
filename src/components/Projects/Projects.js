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
            <div className="proj-cards" 
                  data-aos="fade-down" 
                  data-aos-delay="200" 
                  data-aos-duration="700" 
                  data-aos-once="true">
            <LazyLoad height={200} offset={-200}>
            <ProjCard 
             pos="1"
                title="1920's Murder Mystery Party" 
                name="mystery" 
                liveSite="https://dan2d.github.io/1920s-Murder-Mystery-Party/"
                github="https://github.com/Dan2D/1920s-Murder-Mystery-Party"
                figma="https://www.figma.com/file/SlUDH9yWutca4mFmZNnHpo0y/Murder-Mystery-Remake?node-id=0%3A1" 
                tools={["HTML5", "CSS3", "Javascript", "React.js"]}
                design={["Photoshop", "Figma"]}
                purpose={projTxt.mystery.purpose}
                notes={projTxt.mystery.notes}
                />
                <ProjCard
                pos="2"
                title="Best Selling Books" 
                name="books"
                liveSite="https://dan2d.github.io/react-best-selling-books/"
                github="https://github.com/Dan2D/react-best-selling-books" 
                figma="https://www.figma.com/file/C3Q0bqK7WoNUqkMlgVrKiMZp/Best-Selling-Books-App?node-id=0%3A1"
                tools={["HTML5", "CSS3", "Javascript", "React.js", "React Redux", "React Router"]}
                design={["Photoshop", "Figma"]}
                purpose={projTxt.books.purpose}
                notes={projTxt.books.notes}
                />
                <ProjCard 
                pos="3"
                title="White Rabbit Running Tracker" 
                name="run" 
                liveSite="https://mern-white-rabbit-tracker.herokuapp.com/"
                github="https://github.com/Dan2D/mern-white-rabbit-run-tracker" 
                figma="https://www.figma.com/file/ELRRQCg1Aduuh33VXJkPxFFZ/White-Rabbit-Running-Tracker?node-id=41%3A11"
                tools={["HTML5", "CSS3", "Javascript", "React.js", "React Redux", "React Router", "Nodejs", "MongoDB", "Bootstrap"]}
                design={["Photoshop", "Figma"]}
                purpose={projTxt.run.purpose}
                notes={projTxt.run.notes}
                />
                 </LazyLoad>
            </div>
        </div>
    )
}

export default Projects;

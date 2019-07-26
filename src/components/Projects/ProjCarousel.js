import React from 'react';
import ProjCard from './Card/ProjCard';
import {projTxt} from './ProjTxt';
import './ProjCarousel.css';

function ProjCarousel(props) {
    return (
        <div>
             <ProjCard 
             pos="1"
                title="1920's Murder Mystery Party" 
                name="mystery" 
                tools={["HTML5", "CSS3", "Javascript", "React.js"]}
                design={["Photoshop", "Figma"]}
                purpose={projTxt.mystery.purpose}
                notes={projTxt.mystery.notes}
                />
                <ProjCard
                pos="2"
                title="Best Selling Books" 
                name="books" 
                tools={["HTML5", "CSS3", "Javascript", "React.js"]}
                design={["Photoshop", "Figma"]}
                purpose={projTxt.books.purpose}
                notes={projTxt.books.notes}
                />
                <ProjCard 
                pos="3"
                title="White Rabbit Running Tracker" 
                name="run" 
                tools={["HTML5", "CSS3", "Javascript", "React.js", "React Redux", "React Router", "Nodejs", "MongoDB", "Bootstrap"]}
                design={["Photoshop", "Figma"]}
                purpose={projTxt.run.purpose}
                notes={projTxt.run.notes}
                />
        </div>
    )
}

export default ProjCarousel

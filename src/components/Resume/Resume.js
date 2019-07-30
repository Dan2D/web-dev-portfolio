import React from 'react';
import './Resume.css';

function Resume() {
    window.scrollTo(0,0);
    return (
        <div className="resume-view">
            <img src={require("../../images/views/Web-Developer-Resume-Dan-Schultz-2019.png")} alt="resume" />
        </div>
    )
}

export default Resume

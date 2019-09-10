import React from 'react';
import {Link} from 'react-router-dom';

function Display(props) {
    return (
            <div className="proj-view">
                <Link to={`/projects?name=${props.name}`} className="proj-lnk">EXPLORE</Link>
                <img className="main-img" src={require(`../../../images/views/${props.desktop}.jpg`)} alt="desktop-view"/>
            </div>
    )
}

export default Display

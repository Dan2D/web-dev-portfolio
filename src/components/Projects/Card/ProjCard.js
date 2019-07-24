import React from 'react';
import Icon from './Icon';
import Display from './Display';
import InfoSec from './InfoSec';

function ProjCard(props) {
    return (
        <div className="projCard-container">
            <Icon icon={props.name}/>
            <Display desktop={`${props.name}-desktop`} mobile={`${props.name}-mobile`}/>
            <InfoSec 
            title={props.title} 
            tools={props.tools} 
            design={props.design} 
            purpose={props.purpose} 
            notes={props.notes}
            />
        </div>
    )
}

export default ProjCard

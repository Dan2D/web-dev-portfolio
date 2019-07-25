import React, {useState, useEffect} from 'react';
import Icon from './Icon';
import Display from './Display';
import InfoSec from './InfoSec';

function ProjCard(props) {
    const [lg, setLg] = useState("");
    useEffect(() => {
        if (document.documentElement.clientWidth > 768){
            setLg("-lg");
        }
    }, [])
    return (
        <div className="projCard-container">
            <Icon icon={props.name + lg}/>
            <Display lg={lg} desktop={`${props.name}-desktop`} mobile={`${props.name}-mobile`}/>
            <InfoSec 
            title={props.title} 
            lg={lg}
            tools={props.tools} 
            design={props.design} 
            purpose={props.purpose} 
            notes={props.notes}
            />
        </div>
    )
}

export default ProjCard

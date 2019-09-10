import React from "react";
import Icon from "./Icon";
import Display from "./Display";
import InfoSec from "./InfoSec";

function ProjCard(props) {
  
    return (
      <div 
      className="projCard-container"  tabIndex="0">
        <Display desktop={`${props.name}-desktop`} mobile={`${props.name}-mobile`} name={props.name}/>
        <Icon icon={props.name} />
        <InfoSec
          title={props.title}
          purpose={props.purpose}
        />
      </div>
    );
  }

export default ProjCard;

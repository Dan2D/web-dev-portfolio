import React from "react";
import Icon from "./Icon";
import Display from "./Display";
import InfoSec from "./InfoSec";

function ProjCard(props) {
  const clickHandler = (card) => {
    let pos = card.currentTarget.dataset.pos;
    if (pos === "2"){
        return
    }
    let switchCard = document.querySelector('.projCard-container[data-pos="2"]');
    switchCard.dataset.pos = pos;
    card.currentTarget.dataset.pos = "2";
  }

    return (
      <div className="projCard-container" tabIndex="0" data-pos={props.pos} onClick={(e) => clickHandler(e)}>
        <Icon icon={props.name} />
        <Display desktop={`${props.name}-desktop`} mobile={`${props.name}-mobile`} />
        <InfoSec
          title={props.title}
          liveSite={props.liveSite}
          github={props.github}
          figma={props.figma}
          tools={props.tools}
          design={props.design}
          purpose={props.purpose}
          notes={props.notes}
        />
      </div>
    );
  }

export default ProjCard;

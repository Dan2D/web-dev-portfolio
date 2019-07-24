import React from 'react'

function Icon(props) {
    return (
        <div className={`card-icon card-icon--${props.icon}`}>
            <img className="card-icon__img" src={require(`../../../images/icons/${props.icon}.png`)} alt={props.icon}/>
        </div>
    )
}

export default Icon;

import React from 'react'

function Display(props) {
    return (
        <div className="proj-view">
            <img className="proj-view__desktop" src={require(`../../../images/views/desktop-view${props.lg}.png`)} alt="desktop-view"/>
            <img className="desktop-img" src={require(`../../../images/views/${props.desktop}${props.lg}.jpg`)} alt="desktop-view"/>
            <img className="proj-view__mobile" src={require(`../../../images/views/mobile-view${props.lg}.png`)} alt="mobile-view"/>
            <img className="mobile-img" src={require(`../../../images/views/${props.mobile}${props.lg}.jpg`)} alt="mobile-view"/>
        </div>
    )
}

export default Display

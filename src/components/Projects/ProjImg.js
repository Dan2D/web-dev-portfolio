import React from 'react'

function ProjImg(props) {
    return (
        <div className="proj-img-container">
            <img className="proj-view__desktop" src={require(`../../images/views/desktop-view.png`)} alt="desktop-view"/>
            <img className="desktop-img" src={require(`../../images/views/${props.desktop}-desktop.jpg`)} alt="desktop-view"/>
            <img className="proj-view__mobile" src={require(`../../images/views/mobile-view.png`)} alt="mobile-view"/>
            <img className="mobile-img" src={require(`../../images/views/${props.mobile}-mobile.jpg`)} alt="mobile-view"/>
        </div>
    )
}

export default ProjImg

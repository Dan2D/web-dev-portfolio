import React from 'react'

function InfoSec (props) {
   const mapIcons = (arr) => {
        return arr.map(icon => {
            return (
                <div className="proj-icon" key={icon}>
                    <img src={require(`../../../images/icons/skills/${icon}_Logo${props.lg}.png`)} alt={icon} />
                    <p>{icon}</p>
                </div>
            )
        })
    }

    const projDetailsGen = (noteArr) => {
        return noteArr.map(note => {
            return (
                <li>{note}</li>
            )
        })
    }

    return (
        <div className="info-sec">
            <div className="info-header">
                <h2 className="info-header__title">{props.title}</h2>
                <div className="info-header__lnks">
                    <a className="info-lnks info-lnks--live" href={props.liveSite}>LIVE</a>
                    <a className="info-lnks info-lnks--github" href={props.github}>GITHUB</a>
                </div>
            </div>
            <div className="proj-info-container">
                <div className="proj-info proj-info--text">
                    <div className="text-container">  
                        <h3 className="text__title">Purpose</h3>
                        <p>{props.purpose}</p>
                    </div>
                    <div className="text-container">
                        <h3 className="text__title">Project Details</h3>
                        <ul className="proj-info__details">
                            {projDetailsGen(props.notes)}
                        </ul>
                    </div>
                </div>
                <div className="proj-info proj-info--tools">
                    <h3 className="tools__title">Tools</h3>
                    <div className="icon-group">
                        {mapIcons(props.tools)}
                    </div>
                    <h3 className="tools__title">Design</h3>
                    <div className="icon-group">
                        {mapIcons(props.design)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoSec

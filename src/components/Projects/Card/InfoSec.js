import React from 'react'

function InfoSec (props) {
   const mapIcons = (arr) => {
        return arr.map((icon, indx) => {
            return (
                <div className="proj-icon" key={icon + "-" + indx}>
                    <img src={require(`../../../images/icons/skills/${icon}_Logo${props.size}.png`)} alt={icon} />
                    <p>{icon}</p>
                </div>
            )
        })
    }

    const projDetailsGen = (noteArr) => {
        return noteArr.map((note, indx)=> {
            return (
                <li key={note[0] + "-" + indx} >{note}</li>
            )
        })
    }

    return (
        <div className="info-sec">
            <div className="info-header">
                <h2 className="info-header__title">{props.title}</h2>
                <div className="info-header__lnks">
                    <a className="info-lnks info-lnks--live" href={props.liveSite}>Live Site</a>
                    <a className="info-lnks info-lnks--github" href={props.github}>GitHub</a>
                    <a className="info-lnks info-lnks--figma" href={props.figma}>Mock-up</a>
                </div>
            </div>
            <div className="proj-info-container">
                <div className="proj-info proj-info--text">
                    <div className="text-container">  
                        <h3 className="text__title">Purpose</h3>
                        <p>{props.purpose[0]}</p>
                        {props.purpose[1] ? <p>{props.purpose[1]}</p> : null}
                        {props.purpose[2] ? <p>{props.purpose[2]}</p> : null}
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

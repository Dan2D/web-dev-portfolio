import React from 'react'

function InfoSec (props) {
    const mapIcons = (arr) => {
        return arr.map(icon => {
            return (
                <div className="proj-icon" key={icon}>
                    <img src={require(`../../../images/icons/skills/${icon}_Logo.png`)} alt={icon} />
                    <p>{icon}</p>
                </div>
            )
        })
    }

    const projDetailsGen = (noteArr) => {
        noteArr.map(note => {
            return (
                <li>note</li>
            )
        })
    }

    return (
        <div className="info-sec">
            <div className="info-header">
                <h2 className="info-header__title">{props.title}</h2>
                <div>
                    <a className="info-header__lnks" href={props.liveSite}>Live Site</a>
                    <a className="info-header__lnks" href={props.github}>Github</a>
                </div>
            </div>
            <div className="proj-info-container">
                <div className="proj-info proj-info--left">
                    <h3>Languages / Frameworks</h3>
                    <div>
                        {mapIcons(props.tools)}
                    </div>
                    <h3>Design</h3>
                    <div>
                        {mapIcons(props.design)}
                    </div>
                </div>
                <div className="proj-info proj-info--right">
                    <div>  
                        <h3>Purpose</h3>
                        <p>{props.purpose}</p>
                    </div>
                    <div>
                        <h3>Project Details</h3>
                        <ul className="proj-info__details">
                            {projDetailsGen(props.notes)}
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default InfoSec

import React from 'react'

function InfoSec (props) {

    return (
        <div className="info-sec">
            <div className="info-header">
                <h2 className="info-header__title">{props.title}</h2>
            </div>
            <div className="proj-info-container">
                <div className="proj-info proj-info--text">
                    <div className="text-container">  
                        <p>{props.purpose[0]}</p>
                        {props.purpose[1] ? <p>{props.purpose[1]}</p> : null}
                        {props.purpose[2] ? <p>{props.purpose[2]}</p> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoSec

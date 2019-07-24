import React from 'react'

function SkillsCard(props) {
    const mapIcons = (arr) => {
        return arr.map(icon => {
            return (
                <div className="proj-icon" key={icon}>
                    <img src={require(`../../images/icons/skills/${icon}_Logo.png`)} alt={icon} />
                    <p>{icon}</p>
                </div>
            )
        })
    }
    return (
        <div className={`skills-card skills-card--${props.name}`}>
            <h3 className="skills-card__ttl">{props.title}</h3>
            <div className="icon-group">
                {mapIcons(props.skills)}
            </div>
            
        </div>
    )
}

export default SkillsCard

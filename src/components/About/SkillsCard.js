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
        <div className={`skills-card skills-card--${props.name}`} data-aos="fade-up" data-aos-delay="300" data-aos-duration="500" data-aos-once="true">
            <h3 className="skills-card__ttl">{props.title}</h3>
            <div className="icon-group">
                {mapIcons(props.skills)}
            </div>
            
        </div>
    )
}

export default SkillsCard

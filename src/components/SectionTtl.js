import React from 'react'

function SectionTtl(props) {
    return (
        <div 
        className={`sec-ttl sec-ttl--${props.name}`}
        data-aos="fade-right" 
        data-aos-delay="100" 
        data-aos-duration="700" 
        data-aos-once="true">
            <h1 className="sec-ttl__title">{props.title}</h1>
            <img className="sec-ttl__icon" src={require(`../images/icons/${props.icon}.png`)} alt={props.icon}/>
        </div>
    )
}

export default SectionTtl;

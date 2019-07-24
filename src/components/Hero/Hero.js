import React, {Component} from 'react'
import './Hero.css';

class Hero extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            descriptor: "Front-End Engineer"
        }
    }

    componentDidMount(){
        this.descChange();
    }
    
    descChange = () => {
        let wordArr = ["Designer", "Back-End Engineer", "Web Developer"];
        let i = 0;
        setInterval(() => {
            if (i >= wordArr.length) return;
            this.setState({descriptor: wordArr[i]})
            i++;
        },  1800);
    }

    
    render(){

        return (
            <div className="hero-container" id="HOME">
                <h1 className="hero__intro">Hi, I'm Dan <br/> {this.state.descriptor}</h1>
                <div className="trail">
                    <img className="trail__flag" src={require('../../images/Flag.png')} alt="flag"/>
                    <img className="trail__img" src={require('../../images/Mt.Rainier-night.jpg')} alt="mt. rainier" />
                    <button className="trail__btn trail__btn--connect"><img src={require("../../images/Ellipse.svg")} alt="circle"/></button>
                    <p className="trail__label trail__label--connect">Connect</p>
                    <button className="trail__btn trail__btn--about"><img src={require("../../images/Ellipse.svg")} alt="circle"/></button>
                    <p className="trail__label trail__label--about">About</p>
                    <button className="trail__btn trail__btn--projects"><img src={require("../../images/Ellipse.svg")} alt="circle"/></button>
                    <p className="trail__label trail__label--projects">Projects</p>
                    <svg width="100%" height="100%">
                        <line x1="61%" y1="53%" x2="85%" y2="68%" style={{"stroke": "#F3E9D2", "stroke-width": "2", "stroke-dasharray": "10"}} />
                        <line x1="15%" y1="88%" x2="85%" y2="68%" style={{"stroke": "#F3E9D2", "stroke-width": "2", "stroke-dasharray": "10"}} />
                    </svg>
                </div>
            </div>
        )
    }
}
export default Hero;

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

     scrollTo = (e) => {
         console.log(e.currentTarget)
        e.preventDefault();
          let id = e.currentTarget.getAttribute('href');
          console.log(id)
          document.querySelector(id).scrollIntoView({block: 'start', behavior: 'smooth'})
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
            <div className="hero-container" id="home">
                <h1 className="hero__intro">Hi, I'm Dan <br/> {this.state.descriptor}</h1>
                <div className="trail">
                    <img className="trail__img" src={require('../../images/Mt.Rainier-night.jpg')} alt="mt. rainier" />
                    <img className="trail__flag" src={require('../../images/Flag.png')} alt="flag"/>
                    <a href="#contact" className="trail__btn trail__btn--connect" onClick={(e) => this.scrollTo(e)}><img src={require("../../images/Ellipse.svg")} alt="circle"/></a>
                    <p className="trail__label trail__label--connect">Connect</p>
                    <a href="#about" className="trail__btn trail__btn--about" onClick={(e) => this.scrollTo(e)}><img src={require("../../images/Ellipse.svg")} alt="circle"/></a>
                    <p className="trail__label trail__label--about">About</p>
                    <a href="#projects" className="trail__btn trail__btn--projects" onClick={(e) => this.scrollTo(e)}><img src={require("../../images/Ellipse.svg")} alt="circle"/></a>
                    <p className="trail__label trail__label--projects" >Projects</p>
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

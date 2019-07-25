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
          setTimeout(() => {document.querySelector(id).scrollIntoView({block: 'start', behavior: 'smooth'})}, 1500);
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
                    <img className="trail__img" src={require('../../images/hero-bg.jpg')} alt="mt. rainier" />
                    <img className="trail__flag" src={require('../../images/Flag.png')} alt="flag"/>
                    <a href="#contact" className="trail__btn trail__btn--connect" onClick={(e) => this.scrollTo(e)}></a>
                    <p className="trail__label trail__label--connect">Connect</p>
                    <a href="#about" className="trail__btn trail__btn--about" onClick={(e) => this.scrollTo(e)}></a>
                    <p className="trail__label trail__label--about">About</p>
                    <a href="#projects" className="trail__btn trail__btn--projects" onClick={(e) => this.scrollTo(e)}></a>
                    <p className="trail__label trail__label--projects" >Projects</p>
                    <svg width="100%" height="100%">
                        <line x1="64%" y1="55%" x2="85%" y2="69%" style={{"stroke": "#F3E9D2", "stroke-width": "2", "stroke-dasharray": "10"}} />
                        <line x1="15%" y1="88%" x2="82%" y2="70%" style={{"stroke": "#F3E9D2", "stroke-width": "2", "stroke-dasharray": "10"}} />
                    </svg>
                </div>
            </div>
        )
    }
}
export default Hero;

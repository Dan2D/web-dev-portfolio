import React, {Component} from 'react';
import SvgMap from './SvgMap';
import smoothscroll from 'smoothscroll-polyfill';
import './Hero.css';

class Hero extends Component {
    constructor(props) {
        super(props)
        this.state = {
            descriptor: "Front-End Engineer",
            size: ""
        }
    }

    componentDidMount(){
        smoothscroll.polyfill();
        this.dscrptChange();
        this.adjustComps();
        window.addEventListener('resize', this.adjustComps);
     }

    adjustComps = () => {
        let width = window.innerWidth;
        if (width < 481){
            this.setState({size: ""})
        }
        if (width > 481 && width < 992){
            this.setState({size: '-md'});
        }
        if (width >= 992){
            this.setState({size: "-lg"});
        }
    }

     scrollTo = (e) => {
        e.preventDefault();
        let time = e.target.className === "contact-msg__btn" ? 500 : 1500;
        let id = e.currentTarget.getAttribute('href');
        setTimeout(() => {document.querySelector(id).scrollIntoView({block: 'start', behavior: 'smooth'})}, time);
      }
    
    dscrptChange = () => {
        let wordArr = ["Designer", "Back-End Engineer", "Web Developer"];
        let i = 0;
        setTimeout(() => {setInterval(() => {
                if (i >= wordArr.length) return;
                this.setState({descriptor: wordArr[i]})
                i++;
            },  1900);}, 
        500);
    }

    
    render(){
        return (
            <div className="hero-container" id="home" >
                <h1 
                className="hero__intro" 
                data-aos="fade-right" 
                data-aos-delay="300" 
                data-aos-duration="700" 
                data-aos-once="true">
                    Hi, I'm Dan <br/> {this.state.descriptor}
                </h1>
                <div 
                className="trail" 
                data-aos="fade-down" 
                data-aos-delay="300" 
                data-aos-duration="700"
                data-aos-once="true">
                    <img className="trail__img" src={require(`../../images/hero-bg${this.state.size}.jpg`)} alt="mt. rainier" />
                    <img className="trail__flag" src={require(`../../images/Flag${this.state.size}.png`)} alt="flag"/>
                    <a href="#contact" className="trail__btn trail__btn--connect" onClick={(e) => this.scrollTo(e)} aria-label="contact section">
                        <p className="trail__label trail__label--connect">Connect</p>
                    </a>
                    <a href="#about" className="trail__btn trail__btn--about" onClick={(e) => this.scrollTo(e)} aria-label="about section">
                        <p className="trail__label trail__label--about">About</p>
                    </a>
                    <a href="#projects" className="trail__btn trail__btn--projects" onClick={(e) => this.scrollTo(e)} aria-label="projects section">
                        <p className="trail__label trail__label--projects" >Projects</p>
                    </a>
                    <SvgMap size={this.state.size} />
                </div>
            </div>
        )
    }
}
export default Hero;

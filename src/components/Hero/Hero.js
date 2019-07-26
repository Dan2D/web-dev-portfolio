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
        window.addEventListener('resize', this.adjustComps)
     }

    adjustComps = () => {
        let width = document.documentElement.clientWidth;
        if (width < 481){
            this.setState({size: ""})
        }
        if (width > 481 && width < 992 ){
            this.setState({size: '-md'});
        }
        if (width > 992){
            this.setState({size: "-lg"});
        }
    }

     scrollTo = (e) => {
        e.preventDefault();
          let id = e.currentTarget.getAttribute('href');
          setTimeout(() => {document.querySelector(id).scrollIntoView({block: 'start', behavior: 'smooth'})}, 1500);
      }
    
    dscrptChange = () => {
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
                    <img className="trail__img" src={require(`../../images/hero-bg${this.state.size}.jpg`)} alt="mt. rainier" />
                    <img className="trail__flag" src={require(`../../images/Flag${this.state.size}.png`)} alt="flag"/>
                    <a href="#contact" className="trail__btn trail__btn--connect" onClick={(e) => this.scrollTo(e)}></a>
                    <p className="trail__label trail__label--connect">Connect</p>
                    <a href="#about" className="trail__btn trail__btn--about" onClick={(e) => this.scrollTo(e)}></a>
                    <p className="trail__label trail__label--about">About</p>
                    <a href="#projects" className="trail__btn trail__btn--projects" onClick={(e) => this.scrollTo(e)}></a>
                    <p className="trail__label trail__label--projects" >Projects</p>
                    <SvgMap size={this.state.size} />
                </div>
            </div>
        )
    }
}
export default Hero;

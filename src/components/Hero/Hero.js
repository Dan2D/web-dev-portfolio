import React, {Component} from 'react';
import {parallaxBg, parallaxBase, parallaxMg} from "../Utils/Helpers";
import SVG from 'react-inlinesvg';
import Plx from 'react-plx';
import smoothscroll from 'smoothscroll-polyfill';
import './Hero.css';

class Hero extends Component {
    constructor(props) {
        super(props)
        this.state = {
            descriptor: "Front-End Engineer",
            parallax: false
        }
    }

    componentDidMount(){
        smoothscroll.polyfill();
        this.dscrptChange();
        if (window.innerWidth > 481){
            this.setState({parallax: true})
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
        if (this.props.size !== 'mobile' && !this.state.parallax){
            this.setState({parallax: true});
        }
        else if (this.props.size === 'mobile' && this.state.parallax){
            this.setState({parallax: false})
        }
        return (
            
                <div className="hero-container" id="home" >
                    <h1 
                    className="hero__intro" 
                    data-aos="fade-right" 
                    data-aos-delay="300" 
                    data-aos-duration="700" 
                    data-aos-once="true">
                        Hi I'm Dan, <br/> {this.state.descriptor}
                    </h1>
                    <div className="parallax-container" >
                        <Plx className='hero__mtn hero__mtn--bg' parallaxData={this.state.parallax ? parallaxBg : []} >
                            <SVG className='hero__mtn-svg' src={require("../../images/mtn-background.svg")} preserveAspectRatio="xMidYMin slice" />
                            <SVG className='hero__mtn-svg svg-animate' src={require("../../images/mtn-background-animate.svg")} style={{position: 'absolute', left: '0'}} preserveAspectRatio="xMidYMin slice" />
                        </Plx>
                        <Plx className='hero__mtn hero__mtn--base' parallaxData={this.state.parallax  ? parallaxBase : []} >
                            <SVG className='hero__mtn-svg' src={require("../../images/mtn-base.svg")} preserveAspectRatio="xMidYMin slice" />
                        </Plx>
                        <Plx className='hero__mtn hero__mtn--mg' parallaxData={this.state.parallax  ? parallaxMg : []}>
                            <SVG className='hero__mtn-svg' src={require("../../images/mtn-midground.svg")} preserveAspectRatio="xMidYMin slice" />   
                        </Plx>    
                            <SVG className='hero__mtn-svg hero__mtn hero__mtn--fg' src={require("../../images/mtn-foreground.svg")} preserveAspectRatio="xMidYMin slice" />
                    </div>
                </div>
            
        )
    }
}
export default Hero;


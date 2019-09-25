import React, {Component} from 'react';
import SVG from 'react-inlinesvg';
import Plx from 'react-plx';
import smoothscroll from 'smoothscroll-polyfill';
import './Hero.css';

class Hero extends Component {
    constructor(props) {
        super(props)
        this.state = {
            descriptor: "Front-End Engineer",
        }
    }

    componentDidMount(){
        smoothscroll.polyfill();
        this.dscrptChange();
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
        const parallaxData = [
            {
              start: 0,
              end: '100vh',
              properties: [
                {
                  startValue: 0,
                  endValue: 400,
                  property: 'translateY',
                },
              ],
            },
          ];
          const parallaxBase = [
            {
              start: 0,
              end: '100vh',
              properties: [
                {
                  startValue: 0,
                  endValue: 250,
                  property: 'translateY',
                },
              ],
            },
          ];
          const parallaxMg = [
            {
              start: 0,
              end: '100vh',
              properties: [
                {
                  startValue: 0,
                  endValue: 100,
                  property: 'translateY',
                },
              ],
            },
          ];
        return (
            
                <div className="hero-container" id="home" >
                    <div className="parallax-container" >
                        <Plx className='hero__mtn hero__mtn--bg' parallaxData={parallaxData} >
                            <SVG className='hero__mtn-svg' src={require("../../images/mtn-background.svg")} preserveAspectRatio="xMidYMin slice" />
                        </Plx>
                        <Plx className='hero__mtn hero__mtn--base' parallaxData={parallaxBase} >
                            <SVG className='hero__mtn-svg' src={require("../../images/mtn-base.svg")} preserveAspectRatio="xMidYMin slice" />
                        </Plx>
                        <Plx className='hero__mtn hero__mtn--mg' parallaxData={parallaxMg}>
                            <SVG className='hero__mtn-svg' src={require("../../images/mtn-midground.svg")} preserveAspectRatio="xMidYMin slice" />   
                        </Plx>    
                            <SVG className='hero__mtn-svg hero__mtn hero__mtn--fg' src={require("../../images/mtn-foreground.svg")} preserveAspectRatio="xMidYMin slice" />
                    </div>
                    <h1 
                    className="hero__intro" 
                    data-aos="fade-right" 
                    data-aos-delay="300" 
                    data-aos-duration="700" 
                    data-aos-once="true">
                        Hi I'm Dan, <br/> {this.state.descriptor}
                    </h1>

                </div>
            
        )
    }
}
export default Hero;


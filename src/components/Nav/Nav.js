import React, { Component } from "react";
import smoothscroll from "smoothscroll-polyfill";
import {setNewScroll} from '../Utils/Helpers';
import "./Nav.css";

class Nav extends Component {
  componentDidMount() {
    smoothscroll.polyfill();
    setNewScroll();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props){
      setNewScroll();
    }
  }

  scrollTo = (e) => {
    e.preventDefault();
    let id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth", block: "start" });
  }

  render() {   
    return (
      <div className="nav-container">
        <div className="nav-bar" id="nav-bar">
          <h3 className="nav-bar__title">Dan Schultz</h3>
          <div className="nav-bar__btns">
            <a className="active" href="#home" onClick={(e) => this.scrollTo(e)}>
              HOME
            </a>
            <a href="#projects" onClick={(e) => this.scrollTo(e)}>
              PROJECTS
            </a>
            <a href="#about" onClick={(e) => this.scrollTo(e)}>
              ABOUT
            </a>
            <a href="#contact" onClick={(e) => this.scrollTo(e)}>
              CONNECT
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Nav;

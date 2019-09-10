import React, { Component } from "react";
import {Link} from "react-router-dom";
import smoothscroll from "smoothscroll-polyfill";
import {setNewScroll, removeScroll} from '../Utils/Helpers';
import "./Nav.css";

class Nav extends Component {
 
  componentDidMount() {
    smoothscroll.polyfill();
    window.scrollTo(0,0);
    if(this.props.page === "proj"){
      const navLnks = document.querySelectorAll("a.nav-lnk");
      navLnks.forEach((lnk, index) => {
        if (index === 0) {
          return
        }
        lnk.style.pointerEvents = "none"
      });
      return
    }
      setNewScroll();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props && this.props.page !== "proj"){
      setNewScroll();
    }
  }

  componentWillUnmount() {
    removeScroll();
  }

  scrollTo = (e) => {
    e.preventDefault();
    let id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth", block: "start" });
  }

  render() { 
    const NORMAL_HOME_LNK = <a className={`nav-lnk ${this.props.page === "proj" ? "" : "active"}`} href="#home" onClick={(e) => this.scrollTo(e)}>HOME</a>;
    const PROJ_HOME_LNK = <Link className="nav-lnk" to="/">HOME</Link>  
    return (
      <div className="nav-container">
        <div className="nav-bar" id="nav-bar">
          <h3 className="nav-bar__title">Dan Schultz</h3>
          <div className="nav-bar__btns">
            {this.props.page === "home" ? NORMAL_HOME_LNK : PROJ_HOME_LNK}
            <a className={`nav-lnk ${this.props.page === "proj" ? "active" : ""}`} href="#projects" onClick={(e) => this.scrollTo(e)}>
              PROJECTS
            </a>
            <a className="nav-lnk" style={{color: this.props.page === "proj" ? "#003c51" : null}} href="#about" onClick={(e) => this.scrollTo(e)}>
              ABOUT
            </a>
            <a className="nav-lnk" style={{color: this.props.page === "proj" ? "#003c51" : null}} href="#contact" onClick={(e) => this.scrollTo(e)}>
              CONNECT
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Nav;

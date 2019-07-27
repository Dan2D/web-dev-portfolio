import React, { Component } from "react";
import smoothscroll from "smoothscroll-polyfill";
import $ from "jquery";
import "./Nav.css";

class Nav extends Component {
  componentDidMount() {
    setTimeout(() => {
      smoothscroll.polyfill();
      smoothscroll.polyfill();
      const winHt = $(window).height();
      const navBarHt = $("#nav-bar").height();
      document.documentElement.style.setProperty('--nav-ht', -navBarHt + "px");
      const totalHt = document.documentElement.scrollHeight;
      let projects = $('#projects').offset();
      let about = $('#about').offset();
      let contact = $('#contact').offset();
      $(window).scroll(function() {
          let winPos = $(this).scrollTop();
          if (projects.top > winPos && !$('.nav-bar__btns a[href="#home"]').hasClass('active')){
            $('.nav-bar__btns a').removeClass('active');
            $(`.nav-bar__btns a[href="#home"]`).addClass('active');
          } 
          if (projects.top < winPos && about.top > winPos && !$('.nav-bar__btns a[href="#projects"]').hasClass('active')){
            $('.nav-bar__btns a').removeClass('active');
            $(`.nav-bar__btns a[href="#projects"]`).addClass('active');
          }
          if (about.top < winPos && contact.top > winPos && !$('.nav-bar__btns a[href="#about"]').hasClass('active')){
            $('.nav-bar__btns a').removeClass('active');
            $(`.nav-bar__btns a[href="#about"]`).addClass('active');
          }
          if (totalHt - (winPos + winHt - navBarHt) <= 100 && !$('.nav-bar__btns a[href="#contact"]').hasClass('active')){
            $('.nav-bar__btns a').removeClass('active');
            $(`.nav-bar__btns a[href="#contact"]`).addClass('active');
          }
      })
    }, 500);
  }

  scrollTo = (e) => {
    e.preventDefault();
    let id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  };
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

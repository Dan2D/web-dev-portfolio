import React, {useEffect} from "react";
import smoothscroll from 'smoothscroll-polyfill';
import $ from 'jquery';
import "./Nav.css";

function Nav() {
    useEffect(() => {
      smoothscroll.polyfill();
        const winHt = $(window).height();
        const navBarHt = $("#nav-bar").height();
        const totalHt = document.documentElement.scrollHeight;
        let home = $('#home').offset();
        let projects = $('#projects').offset();
        let about = $('#about').offset();
        let contact = $('#contact').offset();
        $(window).scroll(function() {
            let winPos = $(this).scrollTop() + navBarHt;
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
    }, [])

    const scrollTo = (e) => {
      e.preventDefault();
        let id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({block: 'start', behavior: 'smooth'});
    }
  return (
    <div className="nav-container">
      <div className="nav-bar" id="nav-bar">
        <h3 className="nav-bar__title">Dan Schultz</h3>
        <div className="nav-bar__btns">
            <a className="active" href="#home" onClick={(e) => scrollTo(e)}>HOME</a>
            <a href="#projects" onClick={(e) => scrollTo(e)}>PROJECTS</a>
            <a href="#about" onClick={(e) => scrollTo(e)}>ABOUT</a>
            <a href="#contact" onClick={(e) => scrollTo(e)}>CONNECT</a>
        </div>
      </div>
    </div>
  );
}

export default Nav;

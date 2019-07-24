import React, {useEffect} from "react";
import $ from 'jquery';
import "./Nav.css";

function Nav(props) {
    useEffect(() => {
        const navBar = $("#nav-bar");
        let navBarHeight = navBar.outerHeight();
        const navLnks = navBar.find("a");
        console.log(navLnks)
        const scrollItems = navLnks.map(navLnk => {
            let lnk = navLnks[navLnk].getAttribute('href');
            if (lnk.length) return lnk;
        }) 
// FIX LATER HIGHLIGHT NAV LNK WHEN ON SECTION
        // $(window).scroll(() => {
        //     let fromTop = $(this).scrollTop() + navBarHeight;
        //     let currSection = scrollItems.map(() => {
        //         if ($(this).offset().top < fromTop){
        //             return this;
        //         }
        //     });

        //     console.log(currSection, "CURR") 


        // })







        console.log(navLnks)

    }, [])
    const scrollTo = (e) => {
        document.querySelector(e.getAttribute('href')).scrollIntoVeiew({behavior: 'smooth'})
    }
  return (
    <div className="nav-container">
      <div className="nav-bar" id="nav-bar">
        <h3 className="nav-bar__title">Dan Schultz</h3>
        <div className="nav-bar__btns">
            <a href="#home" onClick={(e) => scrollTo(e)}>HOME</a>
            <a href="#projects" onClick={(e) => scrollTo(e)}>PROJECTS</a>
            <a href="#about" onClick={(e) => scrollTo(e)}>ABOUT</a>
            <a href="#connect" onClick={(e) => scrollTo(e)}>CONNECT</a>
        </div>
      </div>
    </div>
  );
}

export default Nav;

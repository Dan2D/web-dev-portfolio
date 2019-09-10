import React from 'react';
import $ from "jquery";

export const setNewScroll = () => {
    setTimeout(() => {
    $(window).off('scroll');
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
        if (projects.top - 1 < winPos && about.top > winPos && !$('.nav-bar__btns a[href="#projects"]').hasClass('active')){
          $('.nav-bar__btns a').removeClass('active');
          $(`.nav-bar__btns a[href="#projects"]`).addClass('active');
        }
        if (about.top - 1 < winPos && contact.top > winPos && !$('.nav-bar__btns a[href="#about"]').hasClass('active')){
          $('.nav-bar__btns a').removeClass('active');
          $(`.nav-bar__btns a[href="#about"]`).addClass('active');
        }
        if (totalHt - (winPos + winHt - navBarHt) <= 100 && !$('.nav-bar__btns a[href="#contact"]').hasClass('active')){
          $('.nav-bar__btns a').removeClass('active');
          $(`.nav-bar__btns a[href="#contact"]`).addClass('active');
  }
})
}, 500)
}

export const removeScroll = () => {
  $(window).off('scroll');
}

export const mapIcons = (arr) => {
  return arr.map((icon, indx) => {
      return (
          <div className="proj-icon" key={icon + "-" + indx}>
              <img src={require(`../../images/icons/skills/${icon}_Logo.png`)} alt={icon} />
              <p>{icon}</p>
          </div>
      )
  })
}
import React from 'react'
import './Footer.css';

function Footer() {
    return (
        <div className="footer-container">
            <p className="footer-msg">LEARN EVERY DAY</p>
            <div className="footer-bottom">       
                <div className="icon-resources">Icon Resources
                    <a href="https://www.flaticon.com/authors/kiranshastry" title="Kiranshastry">Kiranshastry</a>
                    <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a>
                    <a href="https://www.flaticon.com/authors/pixel-buddha" title="Pixel Buddha">Pixel Buddha</a> 
                </div>     
                <p className="copyright">Custom Made by Dan Schultz &#9400; 2019</p>
                

                <div className="footer-links">
                    <a className="link-icon" href="https://github.com/Dan2D/web-dev-portfolio">
                        <img src={require('../../images/icons/Github_Logo.png')} alt="github" />
                        <p>This Site's Code!</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer

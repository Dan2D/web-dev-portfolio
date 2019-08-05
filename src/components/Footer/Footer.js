import React from 'react'
import './Footer.css';

function Footer() {
    return (
        <div className="footer-container">
            <p className="footer-msg">LEARN EVERY DAY</p>
            <div className="footer-bottom">       
                <div className="icon-resources">Resources
                    <a href="https://unsplash.com/@beccatapert" title="Becca Tapert">Becca Tapert</a>
                    <a href="https://www.flaticon.com/authors/kiranshastry" title="Kiranshastry">Kiranshastry</a>
                    <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a>
                    <a href="https://www.flaticon.com/authors/pixel-buddha" title="Pixel Buddha">Pixel Buddha</a> 
                </div>     
                <p className="copyright">Custom Made by Dan Schultz &#9400; 2019</p>
                

                <div className="footer-links">
                    <a className="link-icon" href="https://github.com/Dan2D/web-dev-portfolio">
                        <img src={require('../../images/icons/Github_Logo.png')} alt="github logo" />
                        <p>This Site's Code!</p>
                    </a>
                    <a className="link-icon" href="https://www.figma.com/file/FyKjQNKPqwye42dMJkEZHh/Portfolio-Site?node-id=0%3A1">
                        <img src={require('../../images/icons/Figma_Logo.png')} alt="figma logo" />
                        <p>This Site's Mock-up!</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer

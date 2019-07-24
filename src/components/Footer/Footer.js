import React from 'react'
import './Footer.css';

function Footer() {
    return (
        <div className="footer-container">
            <p className="footer-msg">LEARN EVERY DAY</p>
            <div className="footer-bottom">            
                <p className="copyright">Copyright &#9400; Dan Schultz 2019</p>
                <div className="footer-links">
                    <a className="link-icon" href="https://github.com/Dan2D">
                        <img src={require('../../images/icons/Github_Logo.png')} alt="github" />
                        <p>Github</p>
                    </a>
                    <a className="link-icon" href="#">
                        <img src={require('../../images/icons/Linkedin_Logo.png')} alt="linkedin" />
                        <p>Linkedin</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer

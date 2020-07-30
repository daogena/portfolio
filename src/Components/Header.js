import React from 'react';
import '../style/Header.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {

    return (
        <div id="home">
            <div className="nav">
                <div className="blur"></div>
                <div className="current">
                    <a href="#home" className="smoothscroll">Home</a>
                </div>
                <div><a href="#about" className="smoothscroll">About</a></div>
                <div><a href="#portfolio" className="smoothscroll">Work</a></div>
                <div><a href="#contact" className="smoothscroll">Contact</a></div>
            </div>
            <div className="banner">
                <h1 className="banner__headline">Hi, I'm Gena.</h1>
                <h3 className="banner__subtext">I'm a full stack developer.</h3>
                <div className="socials">
                    {/* Social media links */}
                    <a href="https://github.com/daogena"><FontAwesomeIcon icon={['fab', 'github']} size="2x"/></a>
                    <a href="https://www.facebook.com/gena.dao"><FontAwesomeIcon icon={['fab', 'facebook-f']} size="2x" /></a>
                    <a href="https://www.instagram.com/daamn_gena/"><FontAwesomeIcon icon={['fab', 'instagram']} size="2x" /></a>
                    <a href="https://www.linkedin.com/in/gena-dao-035574122/"><FontAwesomeIcon icon={['fab', 'linkedin-in']} size="2x" /></a>
                </div>
            </div>
            <div className="header--fadeBottom" />
        </div>
    )
}

export default Header

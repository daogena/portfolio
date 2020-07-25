import React, {useState, useEffect} from 'react';
import '../style/Header.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 

function Header() {
    const [show, handleShow] = useState(false); 

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true); 
            } else {
                handleShow(false); 
            }
        }); 
        return () => {
            window.removeEventListener("scroll"); 
        }; 
    }, []); 

    return (
        <div className="header">
            <div className={`nav ${show && "nav__solid"}`}>
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
                </div>
            </div>
            <div className="header--fadeBottom" />
        </div>
    )
}

export default Header

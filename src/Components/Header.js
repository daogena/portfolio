import React, {useState, useEffect} from 'react';
import '../style/Header.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-scroll'; 

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
        <div id="home">
            <div className="background"></div>
            <div className={`nav ${show && "nav__black"}`}>
                <div className="link">
                    <Link 
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        Home
                    </Link>
                </div>
                <div className="link">
                    <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        About
                    </Link>
                </div>
                <div className="link">
                    <Link
                        activeClass="active"
                        to="work"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        Work
                    </Link>
                </div>
                <div className="link">
                    <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        Contact
                    </Link>
                </div>
            </div>
            <div className="banner">
                <h1 className="banner__headline">Hi, I'm Gena.</h1>
                <h3 className="banner__subtext">I'm a full stack developer.</h3>
                <div className="socials">
                    <a href="https://github.com/daogena"><FontAwesomeIcon icon={['fab', 'github']} size="2x"/></a>
                    <a href="https://www.facebook.com/gena.dao"><FontAwesomeIcon icon={['fab', 'facebook-f']} size="2x" /></a>
                    <a href="https://www.instagram.com/daamn_gena/"><FontAwesomeIcon icon={['fab', 'instagram']} size="2x" /></a>
                    <a href="https://www.linkedin.com/in/gena-dao-035574122/"><FontAwesomeIcon icon={['fab', 'linkedin-in']} size="2x" /></a>
                </div>
            </div>
        </div>
    )
}

export default Header

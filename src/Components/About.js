import React from 'react'; 
import '../style/About.css'; 
import '../images/profile-pic.jpg'; 

function About() {
    return (
        <div id="about">
            <div className="columns">
                <div className="profile-pic">
                    <img src={require('../images/profile-pic.jpg')} className="me"/>
                </div> 
                <div className="text">
                    <div className="about__container">
                        <div className="about__blurb">
                            <h1 className="title">About Me</h1>
                            <p className="description">I'm currently a student at University of Houston. I love everything about coding, from solving problems to being stuck on a error for hours before realizing you're just missing a semicolon. </p>
                        </div>
                    </div>
                    <div className="skills__container">
                        <h1 className="title">Skills</h1>
                        <div className="skills">
                            <div className="front-end">
                                <h3>Front-end</h3>
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>ReactJS</li>
                                </ul>
                            </div>
                            <div className="back-end">
                                <h3>Back-end</h3>
                                <ul>
                                    <li>NodeJS</li>
                                    <li>Express</li>
                                    <li>Restful Web Services</li>
                                    <li>C++</li>
                                </ul>
                            </div>
                            <div className="tools">
                                <h3>Tools</h3>
                                <ul>
                                    <li>Github</li>
                                    <li>Firebase</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

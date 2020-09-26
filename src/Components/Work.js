import React from 'react'; 
import '../style/Work.css'; 

function Work() {
    return (
        <div id="work">
            <h1>Work</h1>
            <div className="project__containers">
                <div className="project__container">
                    <div className="project1__image">
                        <img src={require('../images/project1.png')} className="project1" />
                    </div>
                    <div className="project__title">Netflix Clone</div>
                    <div className="button">Visit Website</div>
                    <div className="button">GitHub Link</div>
                </div>
                <div className="project__container">
                    <div className="project2__image">
                        <img src={require('../images/project2.png')} className="project2"/>
                    </div>
                    <div className="project__title">Google Maps Store Locator</div>
                    <div className="button">Visit Website</div>
                    <div className="button">GitHub Link</div>
                </div>
            </div>
        </div>
    )
}

export default Work

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"

function Skills (){
    return(
        <div>
            <div className="jumbotron jumbotron-fluid j-color">
                <div className="container text-center">
                    <h1 className="font-weight-bolder title-font a-h1"> Technical Skills</h1>
                   
                </div>    
            </div>

            <div className="container">
            <h3 className="titleSkill">The Browser</h3>
            <p className="subtitle">HTML, CSS, JavaScript, JQuery, Bootstrap</p>

            <h3 className="titleSkill">Dev Tools</h3>
            <p className="subtitle">Heroku, Git, Github</p>

            <h3 className="titleSkill">API Interaction</h3>
            <p className="subtitle">APIs, JSON, AJAX, Real Time Cloud Database via Firebase</p>

            <h3 className="titleSkill">Cutting Edge Development</h3>
            <p className="subtitle">React.js</p>

            <h3 className="titleSkill">Databases</h3>
            <p className="subtitle">MySQL, MongoDB</p>

            <h3 className="titleSkill">Server Side</h3>
            <p className="subtitle">Templating Engines, Sessions, Writing tests, Node.js, Express.js, Creating APIs, MVC, User Authentication, ORM (Sequelize)</p>
            <br />
            </div>

        </div>

    )
}

export default Skills;
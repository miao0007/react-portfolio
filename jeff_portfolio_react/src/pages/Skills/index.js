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
            <h3 className="titleSkill">Languages</h3>
            <p className="subtitle">JavaScript, Python, ES6, Cascading Style Sheets (CSS), HTML5.</p>

            <h3 className="titleSkill">Applications</h3>
            <p className="subtitle"> AJAX, API, Bootstraps, Express.js, Git, GitHub, Heroku, jQuery, JSON, Node.js, Object-oriented Programming (OOP), Rest API, SQL, React, JSX, Mongo DB, Mongoose ODM, MySQL, ORM, Sequelize.</p>
            <br />
            </div>

        </div>

    )
}

export default Skills;
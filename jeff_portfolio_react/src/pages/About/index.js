import React from "react";
import "./style.css";
import photo from "../../img/my_pic1.jpg";


function About() {
    return (
        <div>
            <div className="jumbotron jumbotron-fluid j-color">
                <div className="container text-center">
                    <h1 className="display-4 font-weight-bolder title-font a-h1">About me!</h1>
                    <p className="a-p1">Thanks for visiting my website!</p>
                </div>
            </div>

            <div className="jumbotron jumbotron-fluid j-color1">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <img src={photo} className="my-photo" alt="about-me" />
                            <p className="p-text">Hi! My Name is <span className="font-weight-bold my-name">Jeff Miao </span>, a software engineer based in the bay area.</p>
                            <p className="p-text">I decided to get into the tech world because I consider myself as a problem solver and I like to feel challenged with new projects, also I love to spend time with computers, create web applications to make people life easier or find the better way to optimize any task, so I decided to learn more about how to create software and applications on the internet.</p>
                            <p className="p-text">I am currently studying the web developer boot camp at Berkeley Extension, I'll finish it at the end of August 2020. I am really happy with the skills that I have learned and I can not wait to apply them in my future job, I have learned skills like AJAX, API, Bootstrap, Cascading Style Sheets (CSS), ES6, Express.js, Git, GitHub, Heroku, HTML5, JavaScript, jQuery, JSON, Node.js, Object-oriented Programming (OOP), Rest API, SQL and React. </p>
                            <p className="p-text">I am currently looking for an entry-level position where I can find opportunities to expand my knowledge and work on challenging projects</p>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
}

export default About;
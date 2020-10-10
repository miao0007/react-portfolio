import React from "react";
import "./style.css";
// import photo from "../../img/my_pic1.jpg";


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
                            <img src={process.env.PUBLIC_URL + "/img/my_pic1.jpg"} className="my-photo" alt="about-me" />
                            <p className="p-text">Hi! My Name is <span className="font-weight-bold my-name">Jeff Miao </span>, welcome to my personal page.</p>
                            <p className="p-text">Aspiring Full Stack Developer currently enrolled in the University of Adelaide Coding Boot Camp with a passion for making responsive ,user-friendly websites.</p>
                            <p className="p-text">I am well-organized and collaborative with a strong ethic, and a passion for continuous learning. I am looking forward to the opportunity to apply my skills as a front-end or full-stack web developer. </p>
                            <p className="p-text">I am currently looking for a position where I can find opportunities to expand my knowledge and work on challenging projects</p>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
}

export default About;
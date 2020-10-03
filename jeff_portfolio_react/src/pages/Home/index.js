import React from "react"
import "./style.css"
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <div className="jumbotron jumbotron-fluid j-color">
                <div className="container title-center">
                    <h1 className="title-font title-h1">Jeff Miao</h1>
                    <p className="p-title">Thanks for visiting my website!</p>
                </div>
            </div>
            <div className="jumbotron jumbotron-fluid j-color1">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Link to="/React-Portfolio/About" className="thisLink">
                                <h1 className="sub-h1">About me!</h1>
                            </Link>
                            <p className="sub-p">I am currently studying the web developer boot camp at Berkeley Extension!</p>
                        </div>
                        <div className="col-6 text-right plink">
                            <Link to="/React-Portfolio/Portfolio" className="thisLink">
                                <h1 className="subh1">Portfolio</h1>
                            </Link>
                            <p className="sub-p">Take a look to the work that I have done!</p>
                        </div>
                    </div>

                </div>

            </div>

        </div>






    );
}

export default Home;
import React from "react";
import { Link } from "react-router-dom";
import PDF from "../../document/resume .pdf";
import "./style.css";

function Navbar() {

    return (


        <nav className="navbar navbar-light navbar-expand-md bg-faded justify-content-center nav-color">
            <Link to="/React-Portfolio/" className="navbar-brand d-flex w-50 mr-auto"><span className="text-white title-font">Jeff Miao
                 <br /> <span className="title-email">miao188@hotmail.com</span></span>
                </Link>

                    
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar3">
                <span className
                    ="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse w-100" id="collapsingNavbar3">
                <ul className
                    ="nav navbar-nav ml-auto w-100 justify-content-end">
                    <li className
                        ="nav-item text-white item-text">
                        <Link className
                            ="nav-link " to="/React-Portfolio/about"><span className
                                ="text-white">About</span></Link>
                    </li>
                    <li className
                        ="nav-item text-white item-text">
                        <Link className
                            ="nav-link" to="/React-Portfolio/portfolio"><span className
                                ="text-white">Portfolio</span></Link>
                    </li>
                    <li className
                        ="nav-item text-white item-text">
                        <Link className
                            ="nav-link" to="/React-Portfolio/skills"><span className
                                ="text-white">Skills</span></Link>
                    </li>
                    <li className
                        ="nav-item text-white item-text">
                        <Link className
                            ="nav-link" to={PDF} target="_blank"><span className
                                ="text-white">Resume</span></Link>
                    </li>
                </ul>
            </div>
        </nav>

    );


}

export default Navbar;
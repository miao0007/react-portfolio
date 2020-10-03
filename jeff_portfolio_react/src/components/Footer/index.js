import React from "react";
import "./style.css";

function Footer (){

    return(
        <div className="footer-color">
        <div className="container">
          <div className="col-md-12  text-center m-2">
            <a className="m-4 p-2" href="https://github.com/miao0007" target="_blank rel=noopener"><img
                src="https://img.icons8.com/ios-filled/50/000000/github.png"alt="github-icon" /></a>
            <a className="m-4 p-2" href="https://www.linkedin.com/in/sergio-lopez-81790579/" target="_blank rel=noopener"><img
                src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="linked-icon" /></a>
        
            <a className="m-4 p-2" href="mailto:miao188@hotmail.com?subject=Mail-frommy-Website" target="_blank rel=noopener"><img
                src="https://img.icons8.com/material-rounded/48/000000/important-mail.png" alt="mail-icon" /></a>
          </div>
        </div>
      </div>
    );

}

export default Footer;
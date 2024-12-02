import React from "react";
import "./Footer.css"
import Github from "../Images/github.png"
import Instagram from "../Images/instagram.png"
import LinkedIn from "../Images/linkedin.png"
import Logo from "../Images/StayfIT4.png"

function Footer(){
    return(
        <div className="Footer-container">
            <hr/>
            <div className="footer">
                <div className="social-links">
                <img src={Github} alt=""/>
                <img src={Instagram} alt=""/>
                <img src={LinkedIn} alt=""/>
                </div>
           
            <div className="logo-f">
                <img src={Logo} alt=""/>
                </div>
            </div>
            <div className="blur blur-f-1"></div>
            <div className="blur blur-f-2"></div>
        </div>
    )
}

export default Footer;
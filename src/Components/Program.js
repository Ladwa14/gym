import React from "react";
import "./Program.css";
import { programsData } from "./programsData";

function Program(){
    return(
        <div className="Programs" id="programs">
            <div className="programs-header">
                <span className="stroke-text">Explore our</span>
                <span className="stroke-text">Programs</span>
                <span className="stroke-text">to shape you</span>
                </div>
                <div className="program-categories">
                 {programsData.map((program)=>(
                 <div className="category">
                 {program.image}
                 <span>{program.heading}</span>
                 <span>{program.details}</span>
                 <div className="join-now">
                    <span>Join Now</span>
                    
                 </div>
                 </div>
                    ))}
                </div>

            
        </div>
    )
}

export default Program;
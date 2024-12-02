import React , {useState} from "react";
import "./Header.css"
import logo from "../Images/StayfIT4.png"
import Bar from "../Images/bars.png"
import { color } from "framer-motion";
import {Link} from "react-scroll"

function Header(){

    const mobile = window.innerWidth <= 768 ? true : false;
    const [menuOpened, setMenuopened] = useState(false);

    return(
        <div className="Header">
           <img src={logo}  alt="" className="logo"/>
          {menuOpened=== false && mobile===true ? (
            <div style={{
                backgroundColor: "#656565",
                padding:"0.4rem",
                borderRadius:"5px"}}
                
                onClick={()=>setMenuopened(true)}
                >
                <img src={Bar} alt="" style={{width:"1.5rem" , height:"1.5rem"}}/>
            </div>
          ): (
            <ul className="header-menu">
            <li>
            <Link onClick={()=>setMenuopened(false)} to="home"
                span={true}
                smooth={true}>
Home
                </Link>

           </li>
            <li >
            <Link onClick={()=>setMenuopened(false)} to="programs"
                span={true}
                smooth={true}>
Programs
                </Link>
                </li>
            <li onClick={()=>setMenuopened(false)}>
            <Link onClick={()=>setMenuopened(false)} to="Reasons"
                span={true}
                smooth={true}>
Why us
                </Link></li>
            <li onClick={()=>setMenuopened(false)}>
            <Link onClick={()=>setMenuopened(false)} to="plans"
                span={true}
                smooth={true}>
Plans
                </Link></li>
            <li >
                <Link onClick={()=>setMenuopened(false)} to="Testimonials"
                span={true}
                smooth={true}>
Testimonials
                </Link>
                </li>
           </ul>
          )}
           
        </div>
    )
}

export default Header;
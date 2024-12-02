import React from 'react'
import "./Hero.css"
import Header from './Header'
import log from "../Images/StayfIT5.png"
import log1 from "../Images/body.png"
import log2 from "../Images/2436.png"
import log3 from "../Images/pngegg.png"
import log4 from "../Images/rising.png"
import NumberCounter from 'number-counter' 

import {motion} from 'framer-motion';

const Hero = () => {

  const transition = {type: 'spring' , duration : 3}
  const mobile = window.innerWidth<=768 ? true:false;
  return (
    <div className='Hero' id="home">

      <div className='blur hero-blur'></div>
      <div className='left-h'>
       <Header></Header>
       <div className='the-best-ad'>
        <motion.div
          initial={{left: mobile? "160px":"238px"}}
          whileInView={{left: '8px'}}
          transition={{...transition, type: 'tween'}}
>

        </motion.div>
        <span>the best fitness club in the town</span>
       </div>

<div className='hero-text'>
    <div>
        <span className='stroke-text'>Shape </span>
        <span>Your</span>
    </div>
    <div>
        <span>Ideal Body</span>
    </div>

    <div>
        <span> In here we will help you to shape and build your ideal body and live up your life to fullest</span></div>
</div>

<div className='figures'>
    <div>
    <span><NumberCounter start={100} end={140} delay="4" preFix="+"/> </span>
     <span>expert coachs</span>
    </div>
    <div>
    <span><NumberCounter start={900} end={978} delay="4" preFix="+"/> </span>
    <span>members joined</span>
    </div>
    <div>
    <span><NumberCounter start={20} end={50} delay="4" preFix="+"/> </span>
    <span>fitness programs</span>
    </div>
</div>


<div className='hero-buttons'>
    <buttons className="btn">Get Started</buttons>
    <buttons className="btn">Learn More</buttons>
</div>

      </div>
      <div className='right-h'>
       <button className='btn-menu'>Join Now</button>


       <motion.div
        initial={{  right: '-1rem'}}
        whileInView={{right: '4rem'}}
        transition={transition}
        className='heart-rate'>
        <img src={log} alt="" className='log'/> 
        <span>Heart Rate</span>
        <span>116 Bpm</span>
       </motion.div>


<img src={log1} alt="" className='hero-image'/>

<motion.img
initial={{right: '11rem'}}
whileInView={{right: '20rem'}}
transition={transition}
src={log3} alt="" className='hero-image-back'/>



<motion.div 
initial={{right: '37rem'}}
whileInView={{right: '28rem'}}
transition={transition}
className='Calories'>
    <img src={log4} alt='' className='log4'/>
    <div>
    <span>Calories Burned 220 kcal</span>
    <span></span>
    </div>
</motion.div>

      </div>
    </div>
  )
}

export default Hero

import React from 'react'
import "./navbar.scss"
import {motion} from "framer-motion"
import github from "../../assets/images/github.png";
import linkedin from "../../assets/images/linkedin.png";
import cv from "../../assets/images/cv.png";


function Navbar() {
  return (
    <div className='navbar'>
        {/* {Sidebar} */}
        <div className="wrapper">
            <motion.span
            initial= {{
                opacity: 0, scale: 0.5 }}
                animate= {{
                    opacity: 1, scale:1}}
                transition={{
                    duration: 0.5}}
            
            >
                Welcome!
                </motion.span>
            <div className="social">
                <a href='https://www.linkedin.com/in/angela-naseri/' target="_blank" rel="noopener noreferrer"><motion.img
                whileHover={{scale: 1.2}}
                src={linkedin} alt='linkedin' loading="lazy"/></a>
                <a href='https://github.com/angnas' target="_blank" rel="noopener noreferrer"><motion.img
                whileHover={{scale: 1.2}}
                src={github} alt='github' loading="lazy"/></a>
                <a href='https://drive.google.com/file/d/1DK40qPbYjiS0HpJSJvVfg1vRKk1ZvBt4/view?usp=sharing' download target="_blank" rel="noopener noreferrer"><motion.img
                whileHover={{scale: 1.2}}
                src={cv} alt='cv' loading="lazy"/></a>

            </div>
        </div>
    </div>
  )
}

export default Navbar
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
                src={linkedin} alt=''/></a>
                <a href='https://github.com/angnas' target="_blank" rel="noopener noreferrer"><motion.img
                whileHover={{scale: 1.2}}
                src={github} alt=''/></a>
                <a href='#' target="_blank" rel="noopener noreferrer"><motion.img
                whileHover={{scale: 1.2}}
                src={cv} alt=''/></a>

            </div>
        </div>
    </div>
  )
}

export default Navbar
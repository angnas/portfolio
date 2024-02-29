import React from 'react'
import "./navbar.scss"
import {motion} from "framer-motion"
import github from '../github.png';
import linkedin from '../linkedin.png';

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
                Angela Naseri
                </motion.span>
            <div className="social">
                <a href='#'><img src={linkedin} alt=''/></a>
                <a href='#'><img src={github} alt=''/></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar
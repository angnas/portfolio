import "./parallax.scss"
import {motion} from "framer-motion"
import mountains from '../mountains.png';
import planets from '../planets.png';
import stars from '../stars.png';



function Parallax({ type }) {

  return (
    <div className="parallax" 
    style={{
        background: 
        type === "services" 
        ? "linear-gradient(180deg, #111132, #0c0c1d)"
        : "linear-gradient(180deg, #111132, #505064);"

    }}
    
    >
        <motion.h1>{type=== "services" ? "What I Did?" : "What I'm Doing"}</motion.h1>
        <motion.div className="mountains">
        <img src={mountains} alt=""/>

        </motion.div>
        <motion.div className="planets">
            <img src={planets} alt=""/>
        </motion.div>
        <motion.div className="stars">
        <img src={stars} alt=""/>
        </motion.div>
    </div>
  )
}

export default Parallax
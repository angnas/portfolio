import "./hero.scss"
import {motion} from "framer-motion"
import hero from '../../assets/images/hero.png';
import scroll from "../../assets/images/scroll.png"
import me from "../../assets/images/me.png"
import { HashLink as Link } from "react-router-hash-link";



const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },

    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    },

};

const sliderVariants = {
    initial: {
        x: 0,
        
    },
    animate: {
        x: "-1000%",
        
        transition: {
            duration: 20,
            repeat: Infinity,
            repeatType: "mirror",

        }
    },
};



function Hero() {

    
  return (
    <div className="hero">
        <div className="wrapper">
        
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
            <motion.h2 variants={textVariants}>Angela Naseri</motion.h2>
            <motion.h1 variants={textVariants}>Frontend Developer</motion.h1>
            <motion.div className="buttons" variants={textVariants}>
                <Link
                to="/#Portfolio"
                smooth={true}
                duration={500}
                >
                <motion.button variants={textVariants}>See the Latest Projects</motion.button>
                </Link>
                
                <motion.button variants={textVariants}>Contact Me</motion.button>
            </motion.div>
            <motion.img src={scroll} alt="" variants={textVariants} animate="scrollButton" />

        </motion.div>
        </div>
        <motion.div variants={sliderVariants} initial="initial" animate="animate" className="slidingTextContainer">
        Fitness Enthusiast Web Developer Influencer
        </motion.div>
        <div className="imageContainer">
            <img src={me} alt=""/>
        </div>
    </div>
  )
}

export default Hero
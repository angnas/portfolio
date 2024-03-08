import "./about.scss"
import {motion} from "framer-motion"
import react from "../../assets/images/react.png";
import html from "../../assets/images/html.png";
import css from "../../assets/images/css.png";
import js from "../../assets/images/js.png";
import bootstrap from "../../assets/images/bootstrap.png";


// const text = "a detail-oriented front-end developer with a passion for crafting immersive and pixel-perfect user experiences. My journey in web development has been driven by a curiosity to blend creativity with technology.";

const textVariants = {
    initial: {
        x: +500,
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
};


function About() {

// const words = text.split(" ");


  return (
    <section>
        <div className="about">
            <h1>About</h1>
            <div className="wrraper">
                <div className="box-1">
                    <h2>a detail-oriented front-end developer with a passion for crafting immersive and pixel-perfect user experiences. My journey in web development has been driven by a curiosity to blend creativity with technology.
                    </h2>

                </div>
                <motion.div className="box-2" variants={textVariants} initial="initial" whileInView="animate">
                    <motion.h3 variants={textVariants}>Fitness enthusiast</motion.h3>
                    <motion.h3 variants={textVariants}>Photographer</motion.h3>
                    <motion.h3 variants={textVariants}>Collaborative Spirit</motion.h3>
                    <motion.h3 variants={textVariants}>Creative</motion.h3>
                    <motion.h3 variants={textVariants}>Problem Solver</motion.h3>
                    <motion.h3 variants={textVariants}>passionate</motion.h3>
                    <motion.h3 variants={textVariants}>Sport Lover</motion.h3>
                    <motion.h3 variants={textVariants}>Cat Person</motion.h3>

                </motion.div>
            </div>


        </div>


        <div className="skills">
            <h1>Skills</h1>
            <div className="skillsIcon">
                <div className="icon">
                    <img 
                    src={react}
                    alt="react icon"
                    loading="lazy"
                    />
                    <p>REACT</p>
                </div>
                <div className="icon">
                    <img 
                    src={html}
                    alt="html icon"
                    loading="lazy"
                    />
                    <p>HTML</p>
                </div>
                <div className="icon">
                    <img 
                    src={css}
                    alt="css icon"
                    loading="lazy"
                    />
                    <p>CSS3</p>
                </div>
                <div className="icon">
                    <img 
                    src={js}
                    alt="js icon"
                    loading="lazy"
                    />
                    <p>JAVASCRIPT</p>
                </div>
                <div className="icon">
                    <img 
                    src={bootstrap}
                    alt="bootstrap icon"
                    loading="lazy"
                    />
                    <p>BOOTSTRAP</p>
                </div>
                <div className="icon">
                    <img 
                    src={bootstrap}
                    alt=""
                    loading="lazy"
                    />
                    <p>bootstrap</p>
                </div>
                <div className="icon">
                    <img 
                    src={bootstrap}
                    alt=""
                    loading="lazy"
                    />
                    <p>bootstrap</p>
                </div>
                <div className="icon">
                    <img 
                    src={bootstrap}
                    alt=""
                    loading="lazy"
                    />
                    <p>bootstrap</p>
                </div>
                <div className="icon">
                    <img 
                    src={bootstrap}
                    alt=""
                    loading="lazy"
                    />
                    <p>bootstrap</p>
                </div>
                <div className="icon">
                    <img 
                    src={bootstrap}
                    alt=""
                    loading="lazy"
                    />
                    <p>bootstrap</p>
                </div>

            </div>
        </div>



    </section>


    
  )
}

export default About
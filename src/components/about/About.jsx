import "./about.scss"
import { useRef } from "react";
import {motion, useScroll, useTransform} from "framer-motion"
import react from "../../assets/images/react.png";
import html from "../../assets/images/html.png";
import css from "../../assets/images/css.png";
import js from "../../assets/images/js.png";
import bootstrap from "../../assets/images/bootstrap.png";
import tailwind from "../../assets/images/tailwind.png"
import github from "../../assets/images/github.png"
import nodejs from "../../assets/images/node-js.png"
import seo from "../../assets/images/seo.png"
import sass from "../../assets/images/sass.png"



const textVariants = {
    initial: {
        x: +500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        rotate: 360,
        transition: {
            duration: 2,
            staggerChildren: 0.1,
        },
    },
};




function About() {

    const containerRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"],
    })
   const yText = useTransform(scrollYProgress, [0, 1], ["-200%", "350%"])

   const yIcons = useTransform(scrollYProgress, [0, 1], ["300%", "-520%"])

  return (
    <section
    // ref={containerRef}
    >
        <div className="about"
        >
            <h1>About</h1>
            <div className="wrraper"
            >
                <div className="box-1"
                
            
                >
                    <motion.h2 
                    style={{ translateX: yText}}
                
                    >A detail-oriented front-end developer with a passion for crafting immersive and pixel-perfect user experiences. My journey in web development has been driven by a curiosity to blend creativity with technology.
                    </motion.h2>

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


        <motion.div className="skills"
        style={{ translateX: yIcons}}
        >
            <h1>Skills</h1>
            <div className="skillsIcon">
                <div className="icon">
                    <motion.img 
                    src={react}
                    alt="react icon"
                    loading="lazy"
                    whileHover={{scale: 1.3, rotate: 360,}}
                    whileTap={{scale: 0.9}}
                    />
                    <p>REACT</p>
                </div>
                <div className="icon">
                    <motion.img 
                    src={html}
                    alt="html icon"
                    loading="lazy"
                    whileHover={{scale: 1.3,
                        rotate: 360,
                    }}
                    whileTap={{scale: 0.9,
                        
                    
                    }}
                    />
                    <p>HTML</p>
                </div>
                <div className="icon">
                    <motion.img 
                    src={css}
                    alt="css icon"
                    loading="lazy"
                    whileHover={{scale: 1.3, rotate: 360}}
                    whileTap={{scale: 0.9}}
                    />
                    <p>CSS3</p>
                </div>
                <div className="icon">
                    <motion.img 
                    src={js}
                    alt="js icon"
                    loading="lazy"
                    whileHover={{scale: 1.3, rotate: 360}}
                    whileTap={{scale: 0.9}}
                    />
                    <p>JAVASCRIPT</p>
                </div>
                <div className="icon">
                    <motion.img 
                    src={bootstrap}
                    alt="bootstrap icon"
                    loading="lazy"
                    whileHover={{scale: 1.3, rotate: 360}}
                    whileTap={{scale: 0.9}}
                    />
                    <p>BOOTSTRAP</p>
                </div>
                <div className="icon">
                    <motion.img 
                    src={tailwind}
                    alt="tailwind icon"
                    loading="lazy"
                    whileHover={{scale: 1.3, rotate: 360}}
                    whileTap={{scale: 0.9}}
                    />
                    <p>TAILWIND</p>
                </div>
                <div className="icon">
                    <motion.img 
                    src={nodejs}
                    alt="nodejs icon"
                    loading="lazy"
                    whileHover={{scale: 1.3, rotate: 360}}
                    whileTap={{scale: 0.9}}
                    />
                    <p>NODEJS</p>
                </div>
                <div className="icon">
                    <motion.img 
                    src={github}
                    alt="github icon"
                    loading="lazy"
                    whileHover={{scale: 1.3, rotate: 360}}
                    whileTap={{scale: 0.9}}
                    />
                    <p>GITHUB</p>
                </div>
                <div className="icon">
                    <motion.img 
                    src={seo}
                    alt="seo icon"
                    loading="lazy"
                    whileHover={{scale: 1.3, rotate: 360}}
                    whileTap={{scale: 0.9}}
                    />
                    <p>SEO</p>
                </div>
                <div className="icon">
                    <motion.img 
                    src={sass}
                    alt="sass icon"
                    loading="lazy"
                    whileHover={{scale: 1.3, rotate: 360}}
                    whileTap={{scale: 0.9}}
                    />
                    <p>SASS</p>
                </div>

            </div>
        </motion.div>



    </section>


    
  )
}

export default About
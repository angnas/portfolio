import "./contact.scss"
import {motion} from "framer-motion"


const variants = {
    initial: {
        y: 500,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            staggerChildren: 0.8,
        },
    },
};



function Contact() {
  return (
    <motion.div className="contact" 
    variants={variants}
        initial="initial"
        whileInView="animate">
        <motion.div className="textContainer" >
            <motion.h1>Let's Innovate Together</motion.h1>
            <motion.div className="item">
                <h2>Mail</h2>
                <span>f.naseri1993@gmail.com</span>
            </motion.div>
            <motion.div className="item">
                <h2>Address</h2>
                <span>Stockholm,kista</span>
            </motion.div>
            <motion.div className="item">
                <h2>Resume</h2>
                <span>Resume</span>
            </motion.div>
        </motion.div>
        <div className="formContainer">
            <form>
                <input type="text" required placeholder="Name" />
                <input type="text" required placeholder="Email" />
                <textarea rows={8} placeholder="Message" ></textarea>
                <button>Submit</button>

            </form>

        </div>
    </motion.div>
  );
};

export default Contact;
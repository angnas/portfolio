import "./portfolio.scss"
import { useRef } from "react";
import {motion, useScroll, useSpring, useTransform} from "framer-motion"
import colorMeTwice from "../../assets/images/color-me-twice.png"
import hungryChef from "../../assets/images/hungry-chef.png"
import fashion from "../../assets/images/fashion.png"


const items = [
    {
    id: 1,
    title: "Color Me Twice",
    img: colorMeTwice,
    desc: "Color me twice has been designed to assist you in creating an 2 color palette for your upcoming web development project. By selecting two colors, Color Me Twice will provide you based on your choice of colors, a primary color and its accompanying accent shade, resulting in a visually cohesive two-color composition."
} ,
{
    id: 2,
    title: "Hungry Chef",
    img: hungryChef,
    desc: "Hungry Chef is a delightful culinary platform where food lovers can discover, enjoy and get recipes from around the globe. Whether you're a seasoned chef or a kitchen newbie, Hungry Chef offers an array of recipes to satisfy your culinary cravings."
} ,
{
    id: 3,
    title: "Color Me Twice",
    img: "color-me-twice.png",
    desc: "Color me twice has been designed to assist you in creating an 2 color palette for your upcoming web development project. By selecting two colors, Color Me Twice will provide you based on your choice of colors, a primary color and its accompanying accent shade, resulting in a visually cohesive two-color composition."
} ,
{
    id: 4,
    title: "Fashion Website",
    img: fashion,
    desc: "GUCCI website is a stylish and visually appealing fashion website built using HTML and CSS. Explore the latest trends, discover fashion inspirations, and stay updated on the hottest styles."
} ,
];


function Single({ item }) {

    const ref = useRef()


const {scrollYProgress} = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
});  

const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);


  return (
  <section>
    <div className="container">
     <div className="wrapper">
        <div className="imageContainer" ref={ref}>
        <img src={item.img} alt="" />


        </div>
       <motion.div className="textContainer" style={{y}}>
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
        <button>See Demo</button>


       </motion.div>
     </div>
    

    </div>
    

    </section>);
  
};



function Portfolio() {

    const ref = useRef()


const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["end end", "start start"],
});

const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
});


  return (
    <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>


        {items.map((item) => (
            <Single item={item} key={item.id} />
        ))}
    </div>
  )
}

export default Portfolio

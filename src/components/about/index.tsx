import { motion, Variants } from "framer-motion";
import bg1 from "../../assets/(1).jpg";
import bg2 from "../../assets/(2).jpg";
import bg3 from "../../assets/(3).jpg";

const aboutPics = [bg1, bg2, bg3];

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 1,
    },
  },
};

let boxVariants: Variants = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
  },
};

const About = () => {
  return (
    <div id="about" className="service-content">
      <span className="badge">About Us</span>
      <h2>Our cleaning company offers quality cleaning services in Tunisia</h2>
      <div className="stats-content">
        <div className="about-left">
          <span className="about-icon"></span>
          <h2>
            Enagage audience segments and finally create actionable insights.
          </h2>
          <p>
            Our skilled, professional and trustworthy empolyees, who work
            quickly and efficiently, are the backbone of our company, will make
            your life easier.
          </p>
          <button className="btn estimate-link">Get an Estimate</button>
        </div>
        <div>
          <motion.div
            initial="hidden"
            variants={containerVariants}
            whileInView="visible"
            viewport={{
              once: true,
              amount: "some",
            }}
            className="about-right"
          >
            {aboutPics.map((pic, index) => (
              <motion.span
                variants={boxVariants}
                className="about-pic"
                key={index}
              >
                <img src={pic} alt="about-pic" />
              </motion.span>
            ))}
            <span className="dot-circle" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import bg1 from "../../assets/(2).jpg";
import { TRANSITION } from "../../utils/constantes";
// import bg2 from "../../assets/(4).jpg";
import bars from "../../assets/svg/bars.svg";
import { useEffect, useState } from "react";

let menu = [
  { link: "#home", name: "Home" },
  { link: "#cleaningService", name: "Cleaning service" },
  { link: "#feature", name: "Features" },
  { link: "#about", name: "About Us" },
  { link: "#contact", name: "Contact" },
];

const menuVariants = {
  hidden: {
    translateY: "-100%",
    opacity: 0,
  },
  visible: {
    translateY: 0,
    opacity: 1,
  },
};

const leftVariants = {
  hidden: {
    translateX: "-100%",
    opacity: 0,
  },
  visible: {
    translateX: 0,
    opacity: 1,
  },
};

const rightVariants = {
  hidden: {
    translateX: "100%",
    opacity: 0,
  },
  visible: {
    translateX: 0,
    opacity: 1,
  },
};

const Header = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {}, []);

  return (
    <motion.header id="home">
      <motion.nav
        style={{ backgroundColor: "white" }}
        initial="hidden"
        animate="visible"
        transition={TRANSITION}
        variants={menuVariants}
      >
        <Link to={"/"}>
          <h1>A1</h1>
        </Link>
        <div className={open ? "links" : "links close"}>
          <ul>
            {menu.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.link}>{item.name}</a>
                </li>
              );
            })}
          </ul>
          <button className="btn booking-btn">Book Now</button>
        </div>
        <button
          onClick={() => {
            setOpen(!open);
          }}
          className="sm-only"
        >
          <img src={bars} alt="bars" />
        </button>
      </motion.nav>
      <div className="header-content">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={TRANSITION}
          variants={leftVariants}
          className="header-contenu"
        >
          <h1>Professional and Affordable cleaning service in Tunisia</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
            delectus sed impedit nulla quos? Aspernatur voluptatibus consectetur
            quibusdam provident earum aliquid debitis similique, dolore aut? Eos
            facere cum quidem aliquid.
          </p>
          <button className="btn booking-btn">Book Now</button>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          transition={TRANSITION}
          variants={rightVariants}
          className="header-img"
        >
          <img src={bg1} alt="cleaning-service-team" />
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;

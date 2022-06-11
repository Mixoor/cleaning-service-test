import { motion, Variants } from "framer-motion";
import bg1 from "../../assets/(3).jpg";
import bg2 from "../../assets/(4).jpg";
import bg3 from "../../assets/(5).jpg";

const steps = [
  {
    image: bg1,
    title: "Home Cleaning",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi itaque nemo amet.",
  },
  {
    image: bg2,
    title: "Office Cleaning",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi itaque nemo amet.",
  },
  {
    image: bg3,
    title: "Outdoor Cleaning",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi itaque nemo amet.",
  },
  {
    image: bg3,
    title: "Outdoor Cleaning",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi itaque nemo amet.",
  },
  {
    image: bg3,
    title: "Outdoor Cleaning",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi itaque nemo amet.",
  },
  {
    image: bg3,
    title: "Outdoor Cleaning",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi itaque nemo amet.",
  },
];

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {},
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

const Cleaning = () => {
  return (
    <div id="cleaningService" className="service-content">
      <span className="badge">Cleaning</span>
      <h2>
        Generating vertical integration and above ll,increase viewability.
      </h2>
      <motion.div
        initial="hidden"
        variants={containerVariants}
        whileInView={"visible"}
        viewport={{
          once: true,
        }}
        className="cleaning-step"
      >
        {steps.map((item, index) => {
          return (
            <motion.div
              variants={boxVariants}
              className="step"
              key={`step-${index}`}
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
              }}
            >
              <img src={item.image} alt="cleaning-service" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Cleaning;

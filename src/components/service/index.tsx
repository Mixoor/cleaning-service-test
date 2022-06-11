import Check from "../../assets/svg/check.svg";
import Stock from "../../assets/svg/stock.svg";
import Union from "../../assets/svg/union.svg";
import { motion, Variants } from "framer-motion";
import { TRANSITION } from "../../utils/constantes";

const steps = [
  {
    title: "Our Cleaing company cleans everthing and everywhare",
    description:
      "Leius suscipit?orem ipsum dolor sit amet consectetur, adipisicing elit. Nisi itaque nemo amet.",
    icon: Stock,
  },
  {
    title: "We provide professional cleaning service",
    description:
      "Leius suscipit?orem ipsum dolor sit amet consectetur, adipisicing elit. Nisi itaque nemo amet.",
    icon: Union,
  },
  {
    title: "One-time abd regular home cleaning",
    description:
      "Leius suscipit?orem ipsum dolor sit amet consectetur, adipisicing elit. Nisi itaque nemo amet.",
    icon: Check,
  },
];

const itemsVariants: Variants = {
  hidden: {
    opacity: 0,
    translateY: "100%",
  },
  visible: {
    opacity: 1,
    translateY: "0",
    transition: {
      delayChildren: 0.5,
      staggerDirection: -1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, translateY: "100%" },
  visible: { opacity: 1, translateY: 0 },
};

const Services = () => {
  return (
    <motion.div id="cleaningService" className="service-content">
      <span className="badge" id="cleaningService">
        Services
      </span>
      <motion.h2
        initial="hidden"
        whileInView="visible"
        variants={itemsVariants}
        viewport={{
          amount: "all",
          once: true,
        }}
      >
        Our cleaning company offers quality cleaning services in Tunisia
      </motion.h2>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={itemsVariants}
        viewport={{
          amount: "some",
          once: true,
        }}
        className="services-step"
      >
        {steps.map((item, index) => {
          return (
            <motion.div
              variants={itemVariants}
              className="step"
              key={`step-${index}`}
            >
              <span>
                <img src={item.icon} alt="icon" />
              </span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Services;

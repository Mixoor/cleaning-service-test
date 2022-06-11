import { motion, Variant, Variants } from "framer-motion";
import { TRANSITION } from "../../utils/constantes";

const leftVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const rightVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
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

const Stats = () => {
  return (
    <motion.div id="feature" className="service-content">
      <span className="badge">Features</span>
      <h2>Our cleaning company offers quality cleaning services in Tunisia</h2>
      <motion.div className="stats-content">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: "all",
          }}
          transition={TRANSITION}
          variants={leftVariants}
        >
          <span className="stats-icon" />
          <h2>Over 1,000 satisfied customers</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
            omnis esse, eligendi dolor, asperiores quo nesciunt ratione
            reprehenderit perferendis nihil ipsa tempora mollitia repellendus
            iusto maxime facere saepe incidunt unde!
          </p>
          <button className="btn booking-btn">Book a clean</button>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: "all",
          }}
          variants={rightVariants}
          className="stats-grid"
        >
          <motion.div variants={boxVariants} className="col-stats">
            <span className="stat-item pre-selected">
              <b>4.9*</b>
              <span>Averge Rating</span>
            </span>

            <span className="stat-item">
              <b>4.9*</b>
              <span>Averge Rating</span>
            </span>
          </motion.div>

          <motion.div variants={boxVariants} className="col-stats">
            <span className="stat-item">
              <b>56%</b>
              <span>Success Rate</span>
            </span>

            <span className="stat-item selected">
              <b>120$</b>
              <span>Avg. Price Tag</span>
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Stats;

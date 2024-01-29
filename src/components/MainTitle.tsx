import mug from "../../images/Mug1.png";
import { motion } from "framer-motion";

export default function MainTitle() {
  return (
    <>
      <header className="container-fluid mb-5 mt-5 ps-sm-5 pe-sm-5">
        <h1 className="title-words title-container">
          <motion.span
            initial={{ x: -1500 }}
            animate={{ x: 0 }}
            transition={{
              duration: 2,
              delay: 0.1,
            }}
            // whileHover={{scale: 0.9}}
            className="first-line-title"
          >
            LOREM
          </motion.span>

          <motion.span
            initial={{ x: 1500 }}
            animate={{ x: 0 }}
            transition={{
              duration: 2,
              delay: 0.2,
            }}
            // whileHover={{ opacity: 0.8 }}
            className="second-line-title"
          >
            IPSUM
          </motion.span>

          <motion.span
            initial={{ x: -1500 }}
            animate={{ x: 0 }}
            transition={{
              duration: 2,
              delay: 0.5,
            }}
            // whileHover={{ opacity: 0.8 }}
            className="third-line-title"
          >
            DOLOR
          </motion.span>

          <motion.img 
             initial={{ y: -1500 }}
             animate={{ y: 0 }}
             transition={{
               duration: 2,
             }}

          className="title-mug" src={mug}></motion.img>
        </h1>
      </header>
    </>
  );
}

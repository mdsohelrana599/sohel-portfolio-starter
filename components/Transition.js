"use client";

import { motion } from "framer-motion";

const transitionVariants = {
  initial: {
    x: "100%",
    width: "100%", // keep but DON'T animate
  },
  animate: {
    x: "0%",
    width: "0%", // same value (no animation)
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"], // same value
  },
};

const Transition = () => {
  return (
    <>
      <motion.div
        className="fixed inset-0 w-screen h-screen z-30 bg-[#2e2257]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
      />

      <motion.div
        className="fixed inset-0 w-screen h-screen z-20 bg-[#3b2d71]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
      />

      <motion.div
        className="fixed inset-0 w-screen h-screen z-10 bg-[#4b3792]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
      />
    </>
  );
};

export default Transition;

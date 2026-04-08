"use client";

import Circles from "../../components/Circles";
import Bulb from "../../components/Bulb";
import ServiceSlider from "../../components/ServiceSlider";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants"; // ← Make sure this exists
import ParticlesContainer from "../../components/ParticlesContainer";

const Services = () => {
  return (
    <div className="min-h-screen bg-primary/30 py-20 lg:py-36 flex items-center relative overflow-hidden">
      <Circles />
      <ParticlesContainer></ParticlesContainer>

      <div className="container mx-auto px-6 xl:px-0">
        <div className="flex flex-col xl:flex-row gap-10 xl:gap-16">
          {/* Left Side - Title & Description */}
          <div className="flex flex-col xl:w-[30%] text-center xl:text-left">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2  xl:mt-8"
            >
              My Services<span className="text-accent">.</span>
            </motion.h2>

            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="max-w-[420px] mx-auto xl:mx-0 text-white/70 leading-relaxed"
            >
              I offer professional digital solutions ranging from modern web
              development to creative design and branding. Let's bring your
              ideas to life.
            </motion.p>
          </div>

          {/* Right Side - Service Slider */}
          <motion.div
            variants={fadeIn("down", 0.5)} // Changed to "left" for better visual balance
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>

      {/* Bulb Component */}
      <Bulb />
    </div>
  );
};

export default Services;

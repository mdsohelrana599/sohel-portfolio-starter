import ParticlesContainer from "../../components/ParticlesContainer";
import TestimonialSlider from "../../components/TestimonialSlider";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Testimonials = () => {
  return (
    <div>
      <ParticlesContainer></ParticlesContainer>
      <div className=" h-full bg-primary/30 py-32 text-center">
        <div className=" container mx-auto h-full flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("up", 0.2)} // Changed to "left" for better visual balance
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 mb-8 xl:mb-0"
          >
            What clients <span className=" text-accent">say.</span>
          </motion.h2>

          <motion.div  variants={fadeIn("up", 0.4)} // Changed to "left" for better visual balance
            initial="hidden"
            animate="show"
            exit="hidden">
            <TestimonialSlider></TestimonialSlider>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

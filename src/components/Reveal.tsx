import { motion } from "motion/react";
import type { HTMLMotionProps } from "motion/react";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
};

function Reveal({ children, delay = 0, ...props }: RevealProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{  amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;
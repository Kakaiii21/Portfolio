import { motion } from "motion/react";
import type { HTMLMotionProps } from "motion/react";

type AnimatedButtonProps = HTMLMotionProps<"button"> & {
  stiffness?: number;
  damping?: number;
};

function AnimatedButton({
  children,
  stiffness = 300,
  damping = 15,
  ...props
}: AnimatedButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.9, y: 1 }}
      transition={{ type: "spring", stiffness, damping }}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export default AnimatedButton;
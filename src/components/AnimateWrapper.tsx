import { motion } from "framer-motion";
import { FC, ReactNode } from "react";
import { useLocation } from "react-router-dom";

interface AnimationPageProps {
  children: ReactNode | JSX.Element;
}

const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.95,
  },
  in: {
    opacity: 1,
    scale: 1,
  },
  out: {
    opacity: 0,
    scale: 1.05,
  },
};

const pageTransition = {
  type: "tween",
  ease: "easeOut",
  duration: 0.3,
};

const styles = {
  height: "100%",
};

export const AnimateWrapper: FC<AnimationPageProps> = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <motion.div
      key={pathname}
      initial="initial"
      animate="in"
      variants={pageVariants}
      transition={pageTransition}
      exit="out"
      style={styles}
    >
      {children}
    </motion.div>
  );
};

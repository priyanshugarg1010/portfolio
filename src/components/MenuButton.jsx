import { motion } from "framer-motion";
import React from "react";

const DURATION = 0.2;
const STAGGER = 0.025;

export default function Button({ isActive, toggleMenu }) {
  return (
    <div className="absolute top-0 right-0 w-24 h-10 cursor-pointer rounded-full overflow-hidden">
      <motion.div
        className="relative w-full h-full"
        animate={{ top: isActive ? "-100%" : "0%" }}
        transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
      >
        <div
          className="w-full h-full flex justify-center items-center"
          onClick={toggleMenu}
        >
          <FlipLink>
            <span className="">menu</span>
          </FlipLink>
        </div>
        <div
          className="w-full h-full bg-black flex justify-center items-center"
          onClick={toggleMenu}
        >
          <FlipLink>
            <span className="text-white">close</span>
          </FlipLink>
        </div>
      </motion.div>
    </div>
  );
}

const FlipLink = ({ children, href }) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative flex justify-center items-center w-full overflow-hidden whitespace-nowrap uppercase"
      style={{
        lineHeight: 1.25,
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        variants={{
          initial: {
            y: 0,
            rotateX: 0,
          },
          hovered: {
            y: "-100%",
            rotateX: 90,
          },
        }}
        transition={{
          duration: DURATION,
          ease: "easeInOut",
          delay: STAGGER,
        }}
        className="origin-bottom"
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          initial: {
            y: "100%",
          },
          hovered: {
            y: 0,
          },
        }}
        transition={{
          duration: DURATION,
          ease: "easeInOut",
          delay: STAGGER,
        }}
        className="absolute"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

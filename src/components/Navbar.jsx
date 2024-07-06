import React, { useRef, useState } from "react";
import MenuButton from "./MenuButton";
import { motion, AnimatePresence } from "framer-motion";
import NavLinks from "./NavLinks";
import StickyCursor from "./StickyCursor";

const Navbar = () => {
  const menu = {
    open: {
      width: "480px",
      height: "650px",
      top: "-25px",
      right: "-25px",
      transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      width: "100px",
      height: "40px",
      top: "0px",
      right: "0px",
      transition: {
        duration: 0.75,
        delay: 0.35,
        type: "tween",
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const [isActive, setIsActive] = useState(false);
  const navMenuRef = useRef(null);

  return (
    <nav className="relative">
      <div className="fixed top-12 right-12">
        <motion.div
          className="relative w-[480px] h-[650px] rounded-3xl bg-primary"
          variants={menu}
          animate={isActive ? "open" : "closed"}
          initial="closed"
        >
          <AnimatePresence>{isActive && <NavLinks />}</AnimatePresence>
        </motion.div>{" "}
        <MenuButton
          isActive={isActive}
          toggleMenu={() => {
            setIsActive(!isActive);
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;

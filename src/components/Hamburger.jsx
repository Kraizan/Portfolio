import React, { useState } from "react";
import { motion } from "framer-motion";
import { LuMenu } from "react-icons/lu";
import HamburgerMenuItem from "./HamburgerItem";
import HamburgerSocialIcons from "./HamburgerSocials";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 left-0 z-[200] w-full bg-transparent lg:hidden">
      <button
        className="fixed z-[200] p-8 text-white transition-all duration-300"
        onClick={toggleMenu}
      >
        <LuMenu className="w-8 h-8" />
      </button>
      <motion.div
        className={`fixed z-190 top-0 left-0 w-full h-full bg-zinc-950 bg-opacity-50 backdrop-blur-md ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="fixed top-0 left-0 flex flex-col items-center justify-center w-full h-full bg-zinc-900"
          initial={{ x: "-100%" }}
          animate={{ x: isOpen ? 0 : "-100%" }}
          transition={{ duration: 0.3 }}
        >
          <HamburgerMenuItem to="home" label="Home" onClick={toggleMenu} />
          <HamburgerMenuItem to="about" label="About" onClick={toggleMenu} />
          <HamburgerMenuItem to="skills" label="Skills" onClick={toggleMenu} />
          <HamburgerMenuItem
            to="projects"
            label="Projects"
            onClick={toggleMenu}
          />
          <HamburgerMenuItem
            to="contact"
            label="Contact"
            onClick={toggleMenu}
          />
        </motion.div>
        <motion.div
          className="fixed flex justify-center w-full bottom-5"
          initial={{ x: "-100%" }}
          animate={{ x: isOpen ? 0 : "-100%" }}
          transition={{ duration: 0.3 }}
        >
          <HamburgerSocialIcons />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HamburgerMenu;

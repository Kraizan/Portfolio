import React from "react";
import { motion } from "framer-motion";
import { LuLinkedin, LuGithub, LuInstagram, LuMail } from "react-icons/lu";

const HamburgerSocialIcons = () => {
  return (
    <div className="flex items-center gap-6 z-[200]">
      <motion.a
        href="https://www.linkedin.com/in/vanshaj-bhatnagar/"
        target="_blank"
        rel="noreferrer"
        className="text-[#66c6e0]"
        whileHover={{ scale: 1.2 }}
      >
        <LuLinkedin className="w-8 h-8" />
      </motion.a>
      <motion.a
        href="https://github.com/kraizan"
        target="_blank"
        rel="noreferrer"
        className="text-[#66c6e0]"
        whileHover={{ scale: 1.2 }}
      >
        <LuGithub className="w-8 h-8" />
      </motion.a>
      <motion.a
        href="https://www.instagram.com/vanshajbhatnagar/"
        target="_blank"
        rel="noreferrer"
        className="text-[#66c6e0]"
        whileHover={{ scale: 1.2 }}
      >
        <LuInstagram className="w-8 h-8" />
      </motion.a>
      <motion.a
        href="mailto:your.email@example.com"
        className="text-[#66c6e0]"
        whileHover={{ scale: 1.2 }}
      >
        <LuMail className="w-8 h-8" />
      </motion.a>
    </div>
  );
};

export default HamburgerSocialIcons;

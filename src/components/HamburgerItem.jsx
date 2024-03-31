import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const HamburgerMenuItem = ({ to, label, onClick }) => {
  return (
    <motion.div
      whileTap={{ scale: 0.9 }}
      className="px-4 py-2 text-3xl text-white transition-colors duration-300 cursor-pointer hover:bg-gray-800 hover:bg-opacity-50"
    >
      <Link
        to={to}
        spy={true}
        smooth={true}
        offset={-20}
        duration={1000}
        onClick={onClick}
      >
        <span className="text-[#18ccfc] font-black">{`</`}</span>
        <span>{label}</span>
        <span className="text-[#18ccfc] font-black">{`>`}</span>
      </Link>
    </motion.div>
  );
};

export default HamburgerMenuItem;

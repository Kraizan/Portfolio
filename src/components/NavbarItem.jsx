import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-scroll";

const NavbarItem = ({ section, setActive, activeSection, Icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link
      to={section.toLowerCase()}
      spy={true}
      smooth={true}
      offset={-20}
      duration={1000}
      onSetActive={() => setActive(section)}
      className={`cursor-pointer transition-all duration-300 text-xl relative`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="p-px transition-colors duration-300 rounded-full]"
        whileHover={{ scale: 1.2 }}
      >
        <Icon className="w-10 h-10 text-[#66c6e0]" />
      </motion.div>
      {isHovered && (
        <div className="absolute px-2 py-1 ml-2 text-white transform -translate-y-1/2 rounded shadow bg-zinc-950 left-full top-1/2 whitespace-nowrap">
          <span className="text-[#18ccfc] font-black">{`</`}</span>
          <span>{section}</span>
          <span className="text-[#18ccfc] font-black">{`>`}</span>
        </div>
      )}
    </Link>
  );
};

export default NavbarItem;

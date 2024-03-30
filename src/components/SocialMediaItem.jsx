import { motion } from "framer-motion";
import { useState } from "react";

const SocialMediaItem = ({ href, Icon, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="p-px transition-colors duration-300 rounded-full"
        whileHover={{ scale: 1.2 }}
      >
        <Icon className="w-10 h-10 text-[#66c6e0]" />
      </motion.div>
      {isHovered && (
        <div className="absolute px-2 py-1 mr-2 text-white transform -translate-y-1/2 rounded shadow bg-zinc-950 right-full top-1/2 whitespace-nowrap">
          <span className="text-[#18ccfc] font-black">{`</`}</span>
          <span>{text}</span>
          <span className="text-[#18ccfc] font-black">{`>`}</span>
        </div>
      )}
    </a>
  );
};

export default SocialMediaItem;

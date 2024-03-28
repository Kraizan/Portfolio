import { motion } from "framer-motion";
import { LuInstagram, LuGithub, LuLinkedin, LuMail } from "react-icons/lu";

const SocialMediaContainer = () => {
  return (
    <motion.div
      className="fixed flex flex-col items-center gap-6 p-4 min-h-screen transform -translate-y-1/2 bg-transparent justify-center right-8 rounded-3xl z-[1000]"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.a
        href="https://www.linkedin.com/in/vanshaj-bhatnagar/"
        target="_blank"
        className="p-px transition-colors duration-300 rounded-full]"
        whileHover={{ scale: 1.2 }}
      >
        <LuLinkedin className="w-10 h-10 text-[#66c6e0]" />
      </motion.a>
      <motion.a
        href="https://github.com/kraizan"
        className="p-px transition-colors duration-300 rounded-full]"
        whileHover={{ scale: 1.2 }}
      >
        <LuGithub className="w-10 h-10 text-[#66c6e0]" />
      </motion.a>
      <motion.a
        href="https://www.instagram.com/vanshajbhatnagar/"
        className="p-px transition-colors duration-300 rounded-full]"
        whileHover={{ scale: 1.2 }}
      >
        <LuInstagram className="w-10 h-10 text-[#66c6e0]" />
      </motion.a>
      <motion.a
        href="mailto:vanshajbhatnagar24@gmail.com"
        className="p-px transition-colors duration-300 rounded-full]"
        whileHover={{ scale: 1.2 }}
      >
        <LuMail className="w-10 h-10 text-[#66c6e0]" />
      </motion.a>
    </motion.div>
  );
};

export default SocialMediaContainer;

import { motion } from "framer-motion";
import { LuInstagram, LuGithub, LuLinkedin, LuMail } from "react-icons/lu";
import SocialMediaItem from "./SocialMediaItem";

const SocialMediaContainer = () => {
  return (
    <motion.div
      className="hidden lg:flex fixed flex-col items-center gap-6 p-4 min-h-screen transform -translate-y-1/2 bg-transparent justify-center right-8 rounded-3xl z-[1000] text-xl"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <SocialMediaItem
        href="https://www.linkedin.com/in/vanshaj-bhatnagar/"
        Icon={LuLinkedin}
        text="LinkedIn"
      />
      <SocialMediaItem
        href="https://github.com/kraizan"
        Icon={LuGithub}
        text="GitHub"
      />
      <SocialMediaItem
        href="https://www.instagram.com/vanshajbhatnagar/"
        Icon={LuInstagram}
        text="Instagram"
      />
      <SocialMediaItem
        href="mailto:vanshajbhatnagar24@gmail.com"
        Icon={LuMail}
        text="Email"
      />
    </motion.div>
  );
};

export default SocialMediaContainer;

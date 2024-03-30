import { motion } from "framer-motion";
import NavbarItem from "./NavbarItem";
import {
  LuHome,
  LuUserSquare2,
  LuCode2,
  LuTerminalSquare,
  LuContact,
} from "react-icons/lu";

const Navbar = () => {
  return (
    <motion.div
      className="hidden fixed left-8 min-h-screen transform -translate-y-1/2 lg:flex flex-col justify-center gap-6 p-4 bg-transparent rounded-3xl z-[1000] text-[#66c6e0] font-semibold text-xl"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <NavbarItem section="Home" Icon={LuHome} />
      <NavbarItem section="About" Icon={LuUserSquare2} />
      <NavbarItem section="Skills" Icon={LuCode2} />
      <NavbarItem section="Projects" Icon={LuTerminalSquare} />
      <NavbarItem section="Contact" Icon={LuContact} />
    </motion.div>
  );
};

export default Navbar;

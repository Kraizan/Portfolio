import { useState } from "react";
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
  const [activeSection, setActiveSection] = useState("Home");

  const handleSetActive = (section) => {
    setActiveSection(section);
  };

  return (
    <motion.div
      className="fixed left-8 min-h-screen transform -translate-y-1/2 flex flex-col justify-center gap-6 p-4 bg-transparent rounded-3xl z-[1000] text-[#66c6e0] font-semibold text-xl"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <NavbarItem
        section="Home"
        Icon={LuHome}
        setActive={handleSetActive}
        activeSection={activeSection}
      />
      <NavbarItem
        section="About"
        Icon={LuUserSquare2}
        setActive={handleSetActive}
        activeSection={activeSection}
      />
      <NavbarItem
        section="Skills"
        Icon={LuCode2}
        setActive={handleSetActive}
        activeSection={activeSection}
      />
      <NavbarItem
        section="Projects"
        Icon={LuTerminalSquare}
        setActive={handleSetActive}
        activeSection={activeSection}
      />
      <NavbarItem
        section="Contact"
        Icon={LuContact}
        setActive={handleSetActive}
        activeSection={activeSection}
      />
    </motion.div>
  );
};

export default Navbar;

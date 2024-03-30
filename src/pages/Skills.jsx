import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { database } from "../appwrite/config";

const skillVariant = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1 },
};

function Skills() {
  const [skillsByCategory, setSkillsByCategory] = useState({});

  const getSkills = async () => {
    try {
      const data = await database.listDocuments(
        process.env.REACT_APP_DATABASE_ID,
        process.env.REACT_APP_COLLECTION_SKILLS_ID
      );

      const groupedSkills = data.documents.reduce((acc, skill) => {
        const category = skill.category;
        if (!acc[category]) {
          acc[category] = [skill];
        } else {
          acc[category].push(skill);
        }
        return acc;
      }, {});

      setSkillsByCategory(groupedSkills);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getSkills();
  }, []);

  return (
    <section
      id="skills"
      className="z-50 flex flex-col items-center py-4 lg:items-start lg:flex-row lg:py-20 text-neutral-300"
    >
      {Object.entries(skillsByCategory)
        .sort(([categoryA], [categoryB]) => categoryB.localeCompare(categoryA))
        .map(([category, skills]) => (
          <div
            key={category}
            className="w-full max-w-xl py-4 text-center lg:py-0"
          >
            <h2 className="mb-8 text-2xl font-bold lg:text-4xl">{category}</h2>
            <motion.div className="flex flex-wrap justify-center gap-4 lg:gap-12">
              {skills.map((skill) => (
                <motion.div
                  key={skill.$id}
                  className="flex flex-col items-center h-auto gap-2 lg:h-32 group"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }} // Animate only once when in view
                  variants={skillVariant}
                  transition={{ duration: 0.7 }} // Adjust animation duration
                  whileHover={{
                    scale: 1.2,
                    cursor: "pointer",
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="p-1 rounded-full border-gradient">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-10 p-2 rounded-full lg:w-16 bg-neutral-200"
                    />
                  </div>
                  <motion.h1 className="text-sm lg:text-lg font-bold group-hover:text-[#66c6e0] w-20 lg:w-28">
                    {skill.name}
                  </motion.h1>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
    </section>
  );
}

export default Skills;

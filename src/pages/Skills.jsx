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
    <div className="flex text-neutral-300">
      {Object.entries(skillsByCategory)
        .sort(([categoryA], [categoryB]) => categoryA.localeCompare(categoryB))
        .map(([category, skills]) => (
          <div key={category} className="w-full py-20 text-center">
            <h2 className="mb-8 text-4xl font-bold ">{category}</h2>
            <motion.div
              className="flex flex-wrap justify-center gap-8 px-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }} // Animate only once when in view
              variants={skillVariant}
              transition={{ duration: 0.7 }} // Adjust animation duration
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill.$id}
                  className="flex flex-col items-center gap-2 group"
                  whileHover={{
                    scale: 1.2,
                    cursor: "pointer",
                  }}
                >
                  <div className="p-1 rounded-full border-gradient">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-20 p-3 rounded-full bg-neutral-200"
                    />
                  </div>
                  <motion.h1 className="text-xl font-bold group-hover:text-[#18CCFC]">
                    {skill.name}
                  </motion.h1>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      <motion.div
        className="w-auto p-20 font-mono text-center underline text-7xl"
        style={{
          writingMode: "vertical-rl",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }} // Adjust animation duration
      >
        {`Skills`}
      </motion.div>
    </div>
  );
}

export default Skills;

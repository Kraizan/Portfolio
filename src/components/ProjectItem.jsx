import { AnimatedPin } from "../components/AnimatedPin";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ProjectItem({ project }) {
  const { ref, inView } = useInView();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
      className="my-20 text-left"
    >
      <AnimatedPin
        title={project.title}
        description={project.description}
        link={project.link}
        thumbnail={project.thumbnail}
      />
    </motion.div>
  );
}

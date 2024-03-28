import { database } from "../appwrite/config";
import { useEffect, useState } from "react";
import ProjectItem from "../components/ProjectItem";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    try {
      var data = await database.listDocuments(
        process.env.REACT_APP_DATABASE_ID,
        process.env.REACT_APP_COLLECTION_PROJECTS_ID
      );
      data.documents.sort((a, b) => b.priority - a.priority);
      setProjects(data.documents);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <section id="projects" className="flex py-10 text-center">
      <div className="flex flex-wrap justify-between gap-12">
        {projects.map((project) => (
          <ProjectItem key={project.$id} project={project} />
        ))}
      </div>
    </section>
  );
}

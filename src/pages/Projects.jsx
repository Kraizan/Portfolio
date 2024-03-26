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
    <div className="flex text-center">
      <div
        className="w-auto min-h-screen p-20 font-mono text-center underline rotate-180 text-7xl text-neutral-300"
        style={{
          writingMode: "vertical-rl",
        }}
      >{`Projects`}</div>
      <div className="grid pr-20 mx-auto lg:grid-cols-4">
        {projects.map((project) => (
          <ProjectItem key={project.$id} project={project} />
        ))}
      </div>
    </div>
  );
}

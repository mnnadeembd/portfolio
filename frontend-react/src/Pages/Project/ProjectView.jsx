import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProjectView = ({id}) => {
  const { id } = useParams();

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_URL = import.meta.env.VITE_API_BASE_URL;
  

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(`${API_URL}/projects/${id}`);
        const data = await res.json();

        console.log("PROJECT DATA:", data);

        setProject(data.project || data);
      } catch (error) {
        console.log("ERROR:", error);
        setProject(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [API_URL, id]);

  if (loading) {
    return <p style={{ color: "#00ffcc" }}>Loading project...</p>;
  }

  if (!project) {
    return <p style={{ color: "gray" }}>Project not found</p>;
  }

  return (
    <div className="project-view-wrapper">

      <div className="project-card">

        {/* IMAGE */}
        <div className="project-image">
          <img
            src={project.ProjectPhoto}
            alt={project.ProjectName}
          />
        </div>

        {/* CONTENT */}
        <div className="project-content">

          <h2>{project.ProjectName}</h2>

          <p>{project.ProjectDescription}</p>

          <div className="project-links">

            <a href={project.ProjectLive} target="_blank" rel="noreferrer">
              🔗 Live Demo
            </a>

            <a href={project.ProjectCode} target="_blank" rel="noreferrer">
              💻 Source Code
            </a>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ProjectView;
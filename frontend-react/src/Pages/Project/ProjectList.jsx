import React, { useEffect, useState } from "react";

const ProjectList = ({ onView }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(`${API_URL}/projects`);
        const data = await res.json();

        console.log("API DATA:", data);

        setProjects(data.projects || []);
      } catch (error) {
        console.log("ERROR:", error);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [API_URL]);

  return (
    <div className="project-wrapper">

      <h2 className="title">📁 Projects List</h2>

      {/* EMPTY */}
      {!loading && projects.length === 0 && (
        <p style={{ color: "gray" }}>No projects found</p>
      )}

      {/* LOADING */}
      {loading && (
        <p style={{ color: "#00ffcc" }}>Loading projects...</p>
      )}

      {/* TABLE */}
      {!loading && projects.length > 0 && (
        <table className="table">

          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {projects.map((p) => (
              <tr key={p.ProjectID}>

                <td>{p.ProjectID}</td>
                <td>{p.ProjectName}</td>

                <td className="btn-group">

                  <button
                    className="action-btn btn-view"
                    onClick={() => onView(p.ProjectID)}
                  >
                    👁 View
                  </button>

                  <button className="action-btn btn-edit">
                    ✏ Edit
                  </button>

                  <button className="action-btn btn-delete">
                    🗑 Delete
                  </button>

                </td>

              </tr>
            ))}
          </tbody>

        </table>
      )}

    </div>
  );
};

export default ProjectList;
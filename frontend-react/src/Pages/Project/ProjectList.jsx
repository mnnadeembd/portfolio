import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ProjectList = ({ onView = () => { }, onEdit = () => { }, onCreate = () => { } }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);


  //  modal state
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);



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



  // OPEN MODAL
  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setShowModal(true);
  };



  // CONFIRM DELETE
  const confirmDelete = async () => {
    try {
      const res = await fetch(`${API_URL}/projects/${deleteId}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message || "Project deleted successfully");

        setProjects((prev) =>
          prev.filter((p) => p.ProjectID !== deleteId)
        );
      } else {
        toast.error(data.message || "Delete failed");
      }

      setShowModal(false);
      setDeleteId(null);

    } catch (err) {
      console.log(err);
      toast.error("Delete failed");
      setShowModal(false);
    }
  };



  return (
    <div className="project-wrapper">

      <div className="header-row">
        <h2 className="title">📁 Projects List</h2>

        <button
          className="btn-add"
          onClick={onCreate}   // 🔥 MAIN MAGIC
        >
          + Add Project
        </button>
      </div>


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

                  <button
                    className="action-btn btn-edit"
                    onClick={() => onEdit(p.ProjectID)}
                  >
                    ✏ Edit
                  </button>

                  <button
                    className="action-btn btn-delete"
                    onClick={() => handleDeleteClick(p.ProjectID)}
                  >
                    🗑 Remove
                  </button>
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      )}

      {/* 🔥 CONFIRM MODAL */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">

            <h3>⚠️ Confirm Delete</h3>
            <p>Are you sure you want to delete this project?</p>

            <div className="modal-actions">
              <button className="btn-cancel" onClick={() => setShowModal(false)}>
                Cancel
              </button>

              <button className="btn-delete" onClick={confirmDelete}>
                Yes, Delete
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default ProjectList;
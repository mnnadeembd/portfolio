import React, { useState } from "react";
import { toast } from "react-toastify";

const ProjectCreate = ({ onBack, onRefresh }) => {
  const [project, setProject] = useState({
    ProjectName: "",
    ProjectDescription: "",
    ProjectLive: "",
    ProjectCode: "",
  });

  const [photo, setPhoto] = useState(null);
  const [preview, setPreview] = useState(null);
  const [saving, setSaving] = useState(false);

  const API_URL = import.meta.env.VITE_API_BASE_URL;

  // INPUT CHANGE
  const handleChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  // FILE CHANGE
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  // CREATE PROJECT
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    const formData = new FormData();
    formData.append("ProjectName", project.ProjectName);
    formData.append("ProjectDescription", project.ProjectDescription);
    formData.append("ProjectLive", project.ProjectLive);
    formData.append("ProjectCode", project.ProjectCode);

    if (photo) {
      formData.append("ProjectPhoto", photo);
    }

    try {
      const res = await fetch(`${API_URL}/projects`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      console.log("RESPONSE:", data);

      if (res.ok) {
        toast.success("✅ Project created successfully!");

        // reset form
        setProject({
          ProjectName: "",
          ProjectDescription: "",
          ProjectLive: "",
          ProjectCode: "",
        });

        setPhoto(null);
        setPreview(null);

        onRefresh && onRefresh();
        onBack && onBack();
      } else {
        toast.error(data.message || "❌ Create failed");
      }
    } catch (err) {
      console.log(err);
      toast.error("❌ Network error");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="project-edit-wrapper">
      <h2>➕ Create Project</h2>

      <form className="edit-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="ProjectName"
          value={project.ProjectName}
          onChange={handleChange}
          placeholder="Project Name"
          required
        />

        <textarea
          name="ProjectDescription"
          value={project.ProjectDescription}
          onChange={handleChange}
          placeholder="Project Description"
        />

        <input
          type="text"
          name="ProjectLive"
          value={project.ProjectLive}
          onChange={handleChange}
          placeholder="Live URL"
        />

        <input
          type="text"
          name="ProjectCode"
          value={project.ProjectCode}
          onChange={handleChange}
          placeholder="GitHub URL"
        />

        <input type="file" onChange={handleFileChange} />

        {/* IMAGE PREVIEW */}
        {preview && (
          <div className="image-preview">
            <p>Preview:</p>
            <img src={preview} alt="preview" />
          </div>
        )}

        <div className="form-actions">
          <button className="btn-save" type="submit" disabled={saving}>
            {saving ? "⏳ Saving..." : "🚀 Create"}
          </button>

          <button type="button" className="btn-cancel" onClick={onBack}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProjectCreate;
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ProjectEdit = ({ id, onBack, onRefresh  }) => {
  const [project, setProject] = useState({
    ProjectName: "",
    ProjectDescription: "",
    ProjectLive: "",
    ProjectCode: "",
  });

  const [photo, setPhoto] = useState(null);
  const [preview, setPreview] = useState(null);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const API_URL = import.meta.env.VITE_API_BASE_URL;

  // FETCH SINGLE
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(`${API_URL}/projects/${id}`);
        const data = await res.json();

        setProject(data.project);
        setPreview(data.project.ProjectPhoto);
      } catch (err) {
        console.log(err);
        toast.error("Failed to load project");
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [API_URL, id]);


  useEffect(() => {
    return () => {
      if (preview && preview.startsWith("blob:")) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);


  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
    }
  };

  // UPDATE
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    const formData = new FormData();
    formData.append("_method", "PUT");

    formData.append("ProjectName", project.ProjectName);
    formData.append("ProjectDescription", project.ProjectDescription);
    formData.append("ProjectLive", project.ProjectLive);
    formData.append("ProjectCode", project.ProjectCode);

    if (photo) {
      formData.append("ProjectPhoto", photo);
    }

    try {
      const res = await fetch(`${API_URL}/projects/${id}`, {
        method: "POST", // Laravel FormData hack
        body: formData,
      });

      const data = await res.json();
      console.log(data);


      if (res.ok) {
        toast.success("Project updated successfully!");
        onRefresh(); // 🔥 back + reload
      } else {
        toast.error(data.message || "Update failed!");
      }
    } catch (err) {
      console.log(err);
      toast.error("Server error!");
    } finally {
      setSaving(false);
    }
  };

    if (loading) {
    return <p style={{ color: "#00ffcc" }}>Loading project...</p>;
  }

  return (
    <div className="project-edit-wrapper">

      <h2>✏ Edit Project</h2>

      <form className="edit-form" onSubmit={handleSubmit}>

        <input
          type="text"
          name="ProjectName"
          value={project.ProjectName || ""}
          onChange={handleChange}
          placeholder="Project Name"
        />

        <textarea
          name="ProjectDescription"
          value={project.ProjectDescription || ""}
          onChange={handleChange}
          placeholder="Project Description"
        />

        <input
          type="text"
          name="ProjectLive"
          value={project.ProjectLive || ""}
          onChange={handleChange}
          placeholder="Live URL"
        />

        <input
          type="text"
          name="ProjectCode"
          value={project.ProjectCode || ""}
          onChange={handleChange}
          placeholder="GitHub URL"
        />

        <input type="file" onChange={handleFileChange} />

        {/* IMAGE PREVIEW FIXED */}
        {preview && (
          <div className="image-preview">
            <p>Preview:</p>
            <img src={preview} alt="preview" />
          </div>
        )}

        <div className="form-actions">

          <button className="btn-save" type="submit" disabled={saving}>
            {saving ? (
              <>
                <span className="spinner"></span> Saving...
              </>
            ) : (
              "💾 Update"
            )}
          </button>

          <button type="button" className="btn-cancel" onClick={onBack}>
            Cancel
          </button>

        </div>

      </form>
    </div>
  );
};

export default ProjectEdit;
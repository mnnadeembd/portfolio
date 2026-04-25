import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import "../../assets/css/AdminPanel.css";
import CursorGlow from "../../Component/CursorGlow";

import ProjectList from "../Project/ProjectList";
import ProjectView from "../Project/ProjectView";
import ProjectEdit from "../Project/ProjectEdit";
import ProjectCreate from "../Project/ProjectCreate";

const Admin = () => {
  const [activePage, setActivePage] = useState("dashboard");
  const [selectedProjectId, setSelectedProjectId] = useState(null);


  // VIEW PROJECT
  const handleViewProject = (id) => {
    setSelectedProjectId(id);
    setActivePage("projectView");
  };

  /* Edit Handler */
  const handleEditProject = (id) => {
    setSelectedProjectId(id);
    setActivePage("projectEdit");
  };


  /* Refresh Handler */
  const refreshProjects = () => {
    setActivePage("projects"); // reload trigger
  };

  /* Create */
  const handleCreateProject = () => {
    setActivePage("projectCreate");
  };



  return (
    <div>
      <CursorGlow />

      <div className="admin-wrapper">
        <Navbar />

        <Sidebar
          activePage={activePage}
          setActivePage={setActivePage}
        />

        <div className="page-wrapper">
          <div className="main-content">

            {/* DASHBOARD */}
            {activePage === "dashboard" && (
              <>
                <div className="top-boxes">
                  <div className="card">
                    <h3>📁 Projects</h3>
                    <p className="count">24</p>
                  </div>

                  <div className="card">
                    <h3>💬 Messages</h3>
                    <p className="count">12</p>
                  </div>
                </div>

                <div className="bottom-boxes">
                  <div className="chart-card">
                    <h4>Project Distribution</h4>
                    <div className="pie-chart"></div>
                  </div>

                  <div className="chart-card">
                    <h4>Monthly Activity</h4>
                    <div className="bar-chart">
                      <div style={{ height: "60%" }}></div>
                      <div style={{ height: "80%" }}></div>
                      <div style={{ height: "40%" }}></div>
                      <div style={{ height: "90%" }}></div>
                      <div style={{ height: "70%" }}></div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* PROJECT LIST */}
            {activePage === "projects" && (

              <ProjectList
                onView={handleViewProject}
                onEdit={handleEditProject}
                onCreate={handleCreateProject}
              />
            )}

            {/* PROJECT VIEW */}
            {activePage === "projectView" && (
              <ProjectView id={selectedProjectId} />
            )}

            {activePage === "projectEdit" && (
              <ProjectEdit
                id={selectedProjectId}
                onBack={() => setActivePage("projects")}
                onRefresh={refreshProjects}
              />
            )}

            {activePage === "projectCreate" && (
              <ProjectCreate
                onBack={() => setActivePage("projects")}
                onRefresh={refreshProjects}
              />
            )}

          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Admin;
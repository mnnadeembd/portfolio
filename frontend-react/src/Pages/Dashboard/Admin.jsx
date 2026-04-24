import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import "../../assets/css/AdminPanel.css";
import CursorGlow from "../../Component/CursorGlow";

import ProjectList from "../Project/ProjectList";

const Admin = () => {
  const [activePage, setActivePage] = useState("dashboard");
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const handleViewProject = (id) => {
  setSelectedProjectId(id);
  setActivePage("projectView");
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

            {activePage === "dashboard" && (
              <>
                {/* TOP CARDS */}
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

                {/* CHARTS */}
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

            {activePage === "projects" && (
              <ProjectList />
            )}

          </div>

          <Footer />

        </div>

      </div>
    </div>
  );
};

export default Admin;
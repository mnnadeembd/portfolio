import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/AdminPanel.css";

const Sidebar = ({ setActivePage, activePage }) => {
  return (
    <aside className="sidebar">

      <ul className="menu">

        <li
          className={activePage === "dashboard" ? "active" : ""}
          onClick={() => setActivePage("dashboard")}
        >
          📊 Dashboard
        </li>

        <li
          className={activePage === "projects" ? "active" : ""}
          onClick={() => setActivePage("projects")}
        >
          📁 Projects
        </li>

        <li>
          💬 Messages
        </li>

        <li>
          ⚙️ Settings
        </li>

      </ul>

    </aside>
  );
};

export default Sidebar;
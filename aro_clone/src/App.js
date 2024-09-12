import React from "react";
import './App.css'; // Import your CSS file for styling

const DocumentEditorApp = () => {
  const projects = [
    { name: "Assignment 1", time: "1m ago" },
    { name: "Lab 3", time: "40m ago" },
    { name: "Workbook Ch. 3", time: "2 hrs ago" },
    { name: "Worksheet 2", time: "Apr 25, 2024" },
    { name: "Resume", time: "March 27, 2023" },
    { name: "Assignment 3", time: "Feb 20, 2023" },
    { name: "Assignment 1", time: "1m ago" },
    { name: "Lab 3", time: "40m ago" },
    { name: "Workbook Ch. 3", time: "2 hrs ago" },
    { name: "Worksheet 2", time: "Apr 25, 2024" },
    { name: "Resume", time: "March 27, 2023" },
    { name: "Assignment 3", time: "Feb 20, 2023" },
  ];

  const user = {
    name: "Cole Gawin",
    email: "colegawin@gmail.com"
  }

  return (
    <div className="document-editor-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo">
          <img src="/aro-logo.svg" alt="ARO logo" />
        </div>
        <nav>
          <ul>
            <li>
              <img src="/home-variant.svg" alt="all projects" />
              All projects
            </li>
            <li>
              <img src="/account.svg" alt="your projects" />
              Your projects
            </li>
            <li>
              <img src="/account-supervisor.svg" alt="shared with you" />
              Shared with you
            </li>
            <li>
              <img src="/inbox-arrow-down.svg" alt="archived" />
              Archived
            </li>
            <li>
              <img src="/delete.svg" alt="trash" />
              Trash
            </li>
          </ul>
        </nav>
        <button className="new-project-button">+ New</button>
      </div>

      {/* Main content */}
      <div className="main-content">
        <div className="top-bar">
          <div className="search-wrapper">
            <img src="/magnify.svg" alt="search" className="search-icon" />
            <input type="text" placeholder="Search in Aro" className="search-bar" />
          </div>
          <div className="user-info">
            <div className="user-avatar">{user.name[0]}</div>
            <div className="user-details">
              <span className="user-name">{user.name}</span>
              <span className="user-email">{user.email}</span>
            </div>
          </div>
        </div>
        <div className="all-projects">
          <h2 className="all-projects-title">All Projects</h2>
          <div className="project-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-icon">
                  <img src="/document-icon.svg" alt="document icon" />
                </div>
                <div className="project-details">
                  <p className="project-name">{project.name}</p>
                  <p className="project-time">{project.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentEditorApp;

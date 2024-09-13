import React, { useState } from "react";
import './App.css'; // Import your CSS file for styling

const DocumentEditorApp = () => {
  const [viewMode, setViewMode] = useState('tile'); // State for toggling view modes
  const [activePage, setActivePage] = useState('All projects'); // State for tracking the active page
  const [searchQuery, setSearchQuery] = useState(''); // State for search query

  const projects = [
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
  };

  // Toggle between tile and list view
  const toggleView = (view) => {
    setViewMode(view);
  };

  // Set active page
  const handlePageChange = (page) => {
    setActivePage(page);
  };

  // Filter projects based on the search query
  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="document-editor-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo">
          <img src="/aro-logo.svg" alt="ARO logo" />
        </div>
        <nav>
          <ul>
            <li 
              className={activePage === 'All projects' ? 'active' : ''}
              onClick={() => handlePageChange('All projects')}
            >
              <img src="/home-variant.svg" alt="all projects" />
              All projects
            </li>
            <li 
              className={activePage === 'Your projects' ? 'active' : ''}
              onClick={() => handlePageChange('Your projects')}
            >
              <img src="/account.svg" alt="your projects" />
              Your projects
            </li>
            <li 
              className={activePage === 'Shared with you' ? 'active' : ''}
              onClick={() => handlePageChange('Shared with you')}
            >
              <img src="/account-supervisor.svg" alt="shared with you" />
              Shared with you
            </li>
            <li 
              className={activePage === 'Archived' ? 'active' : ''}
              onClick={() => handlePageChange('Archived')}
            >
              <img src="/inbox-arrow-down.svg" alt="archived" />
              Archived
            </li>
            <li 
              className={activePage === 'Trash' ? 'active' : ''}
              onClick={() => handlePageChange('Trash')}
            >
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
            <input 
              type="text" 
              placeholder="Search in Aro" 
              className="search-bar" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} // Update the search query
            />
          </div>
          <div className="user-info">
            <div className="user-avatar">{user.name[0]}</div>
            <div className="user-details">
              <span className="user-name">{user.name}</span>
              <span className="user-email">{user.email}</span>
            </div>
          </div>
        </div>

        {/* View Toggle Icons */}
        <div className="all-projects">
          <div className="projects-header">
            <h2 className="all-projects-title">All Projects</h2>
            <div className="view-toggle">
              <img
                src="/view-grid.svg" 
                alt="Tile View" 
                onClick={() => toggleView('tile')} 
                className={`toggle-icon ${viewMode === 'tile' ? 'active' : ''}`} 
              />
              <img
                src="/list-view.svg" 
                alt="List View" 
                onClick={() => toggleView('list')} 
                className={`toggle-icon ${viewMode === 'list' ? 'active' : ''}`}
              />
            </div>
          </div>
          <div className={`project-grid ${viewMode}`}>
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <div key={index} className={`project-card ${viewMode}`}>
                  <div className="project-icon">
                    <img 
                      src={viewMode === 'tile' ? "/document-icon.svg" : "/file-document.svg"} 
                      alt="document icon" 
                    />
                  </div>
                  <div className="project-details">
                    <p className="project-name">{project.name}</p>
                    <p className="project-time">{project.time}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>No projects found</p> /* Display a message if no projects match the search */
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentEditorApp;

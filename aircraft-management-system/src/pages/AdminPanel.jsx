// src/pages/AdminPanel.jsx

import React from "react";
import "../styles/AdminPanel.css";

const AdminPanel = () => {
  return (
    <div className="admin-wrapper">

      {/* TOPBAR */}
      <header className="topbar">
        <div className="logo">AeroOps Control</div>

        <div className="topbar-icons">
          <span className="material-symbols-outlined">search</span>
          <span className="material-symbols-outlined">health_metrics</span>
          <span className="material-symbols-outlined">notifications</span>
          <span className="material-symbols-outlined">settings</span>

          <div className="profile-avatar">
            JD
          </div>
        </div>
      </header>

      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>Fleet Command</h2>
          <p>V 4.2.1-Industrial</p>
        </div>

        <nav className="sidebar-nav">

          {[
            "Dashboard",
            "Aircraft",
            "Tasks",
            "Schedule",
            "Technicians",
            "Inventory",
            "History",
            "Reports",
            "Alerts",
            "Upload",
            "Admin",
            "Profile",
          ].map((item, index) => (
            <a
              href="/#"
              key={index}
              className={item === "Admin" ? "nav-item active" : "nav-item"}
            >
              <span className="material-symbols-outlined">
                {item === "Dashboard" && "dashboard"}
                {item === "Aircraft" && "flight"}
                {item === "Tasks" && "assignment"}
                {item === "Schedule" && "calendar_month"}
                {item === "Technicians" && "engineering"}
                {item === "Inventory" && "inventory_2"}
                {item === "History" && "history"}
                {item === "Reports" && "analytics"}
                {item === "Alerts" && "warning"}
                {item === "Upload" && "upload_file"}
                {item === "Admin" && "admin_panel_settings"}
                {item === "Profile" && "account_circle"}
              </span>

              <span>{item}</span>
            </a>
          ))}
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="main-content">

        {/* PAGE HEADER */}
        <div className="page-header">
          <div>
            <h1>Admin Control Center</h1>
            <p>
              Global system configuration, user hierarchy, and integration
              matrix.
            </p>
          </div>

          <div className="header-buttons">
            <button className="secondary-btn">
              Export System State
            </button>

            <button className="primary-btn">
              Save All Changes
            </button>
          </div>
        </div>

        {/* METRICS */}
        <div className="metrics-grid">

          <div className="metric-card">
            <h4>API Health</h4>
            <h2>99.98%</h2>
            <p>Uptime (Last 30d)</p>
          </div>

          <div className="metric-card">
            <h4>Active Sessions</h4>
            <h2>142</h2>
            <p>Global Operators</p>
          </div>

          <div className="metric-card">
            <h4>System Latency</h4>
            <h2>24ms</h2>
            <p>Average Response</p>
          </div>

        </div>

        {/* ACTIONS + USER TABLE */}
        <div className="content-grid">

          {/* QUICK ACTIONS */}
          <div className="quick-actions">

            <h3>Critical System Actions</h3>

            <button className="action-btn">
              Flush Redis Cache
            </button>

            <button className="action-btn">
              Force Password Reset
            </button>

            <button className="action-btn danger">
              MAINTENANCE MODE
            </button>

          </div>

          {/* USER TABLE */}
          <div className="user-table-container">

            <div className="table-header">
              <h3>User Management</h3>

              <button className="primary-btn">
                + Add User
              </button>
            </div>

            <table className="user-table">

              <thead>
                <tr>
                  <th>User</th>
                  <th>Role</th>
                  <th>Last Auth</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td>
                    <div className="user-info">
                      <div className="user-avatar">JD</div>

                      <div>
                        <h4>Jameson Decker</h4>
                        <p>j.decker@aerops.ops</p>
                      </div>
                    </div>
                  </td>

                  <td>
                    <span className="role admin">
                      ADMIN_ROOT
                    </span>
                  </td>

                  <td>2023-11-24 14:22</td>

                  <td>
                    <span className="status active-status">
                      Active
                    </span>
                  </td>

                  <td>
                    <div className="table-actions">
                      <span className="material-symbols-outlined">
                        edit
                      </span>

                      <span className="material-symbols-outlined delete">
                        delete
                      </span>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className="user-info">
                      <div className="user-avatar">SV</div>

                      <div>
                        <h4>Sienna Vance</h4>
                        <p>s.vance@aerops.ops</p>
                      </div>
                    </div>
                  </td>

                  <td>
                    <span className="role maint">
                      MAINT_SUPER
                    </span>
                  </td>

                  <td>2023-11-24 16:05</td>

                  <td>
                    <span className="status active-status">
                      Active
                    </span>
                  </td>

                  <td>
                    <div className="table-actions">
                      <span className="material-symbols-outlined">
                        edit
                      </span>

                      <span className="material-symbols-outlined delete">
                        delete
                      </span>
                    </div>
                  </td>
                </tr>

              </tbody>

            </table>

          </div>

        </div>

        {/* AUDIT LOG */}
        <div className="audit-log">

          <div className="audit-header">
            <h3>System Audit Log</h3>
          </div>

          <div className="audit-item">
            <span>[AUTH]</span>
            User S.Vance logged in from 192.168.1.104
          </div>

          <div className="audit-item warning">
            <span>[CONFIG]</span>
            api_throttling_limit updated to 5000/hr
          </div>

          <div className="audit-item success">
            <span>[DB]</span>
            Automated backup successful
          </div>

          <div className="audit-item danger">
            <span>[SECURITY]</span>
            Repeated failed login attempts detected
          </div>

        </div>

      </main>
    </div>
  );
};

export default AdminPanel;
import React from "react";
import "../styles/Tasks.css";

const Tasks = () => {
  return (
    <div className="tasks-page">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo-section">
          <h1>Fleet Command</h1>
          <p>V 4.2.1-Industrial</p>
        </div>

        <nav className="nav-links">
          <a href="#">Dashboard</a>
          <a href="#">Aircraft</a>
          <a href="#" className="active">
            Tasks
          </a>
          <a href="#">Schedule</a>
          <a href="#">Technicians</a>
          <a href="#">Inventory</a>
          <a href="#">History</a>
          <a href="#">Reports</a>
          <a href="#">Alerts</a>
          <a href="#">Upload</a>
          <a href="#">Admin</a>
          <a href="#">Profile</a>
        </nav>
      </aside>

      {/* Main */}
      <main className="main-content">
        {/* Header */}
        <header className="topbar">
          <div className="topbar-left">
            <h2>AeroOps Control</h2>

            <div className="search-box">
              <input
                type="text"
                placeholder="Search tasks, aircraft SN..."
              />
            </div>
          </div>

          <div className="topbar-right">
            <button>🔔</button>
            <button>⚙️</button>

            <div className="profile">
              <div>
                <h4>C. Eng. Miller</h4>
                <p>Fleet Supervisor</p>
              </div>

              <img
                src="https://i.pravatar.cc/40"
                alt="profile"
              />
            </div>
          </div>
        </header>

        {/* Content */}
        <section className="content">
          <div className="page-header">
            <div>
              <h3>Maintenance Tasks</h3>

              <p>
                Manage ongoing inspections and repairs across fleet units.
              </p>
            </div>

            <button className="new-task-btn">
              + NEW MAINTENANCE TASK
            </button>
          </div>

          {/* Stats */}
          <div className="stats-grid">
            <div className="stat-card danger">
              <h5>AOG (Critical)</h5>
              <h1>04</h1>
            </div>

            <div className="stat-card primary">
              <h5>Active Tasks</h5>
              <h1>28</h1>
            </div>

            <div className="stat-card warning">
              <h5>Pending Approval</h5>
              <h1>12</h1>
            </div>

            <div className="stat-card success">
              <h5>Weekly Completion</h5>
              <h1>94%</h1>
            </div>
          </div>

          {/* Filters */}
          <div className="filters">
            <button className="filter active-filter">ALL</button>
            <button className="filter">AOG</button>
            <button className="filter">CRITICAL</button>
            <button className="filter">ROUTINE</button>

            <select>
              <option>All Fleet Units</option>
              <option>Boeing 737</option>
              <option>Airbus A320</option>
            </select>

            <select>
              <option>Inspection</option>
              <option>Repair</option>
              <option>Software Update</option>
            </select>
          </div>

          {/* Table */}
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>TASK ID & TYPE</th>
                  <th>AIRCRAFT</th>
                  <th>STATUS</th>
                  <th>TECHNICIAN</th>
                  <th>EST. COMPLETION</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <h4>Hydraulic System Seal Failure</h4>
                    <p>AD-2024-8812-H</p>
                  </td>

                  <td>
                    <strong>N-234XA</strong>
                    <p>Boeing 737-800</p>
                  </td>

                  <td>
                    <span className="status critical">
                      AOG / Critical
                    </span>
                  </td>

                  <td>M. Kowalski</td>

                  <td>2h 15m</td>

                  <td>
                    <button className="action-btn">⋮</button>
                  </td>
                </tr>

                <tr>
                  <td>
                    <h4>600-Hour Routine Inspection</h4>
                    <p>RI-600-BK-04</p>
                  </td>

                  <td>
                    <strong>N-112BT</strong>
                    <p>Cessna 208B</p>
                  </td>

                  <td>
                    <span className="status progress">
                      In Progress
                    </span>
                  </td>

                  <td>S. Jenkins</td>

                  <td>45%</td>

                  <td>
                    <button className="action-btn">⋮</button>
                  </td>
                </tr>

                <tr>
                  <td>
                    <h4>Firmware Update</h4>
                    <p>SB-AV-2024-11</p>
                  </td>

                  <td>
                    <strong>N-981KC</strong>
                    <p>Airbus A320</p>
                  </td>

                  <td>
                    <span className="status scheduled">
                      Scheduled
                    </span>
                  </td>

                  <td>Unassigned</td>

                  <td>08/15 @ 06:00Z</td>

                  <td>
                    <button className="action-btn">⋮</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Tasks;
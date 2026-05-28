// src/pages/TechnicianManagement.jsx

import React from "react";
import { NavLink } from "react-router-dom";
import "../style/TechnicianManagement.css";

const TechnicianManagement = () => {
  // Configured sidebar items matching core dashboard directory entries
  const navItems = [
    { name: "Dashboard" },
    { name: "Aircraft" },
    { name: "Tasks" },
    { name: "Schedule" },
    { name: "Technicians" },
    { name: "Inventory" },
    { name: "History" },
    { name: "Reports" },
    { name: "Alerts" },
    { name: "Upload" },
    { name: "Admin" },
    { name: "Profile" }
  ];

  // Explicit route mapper ensuring seamless alignment with App.jsx endpoints
  const getRoutePath = (item) => {
    switch (item) {
      case "Dashboard":   return "/dashboard";
      case "Aircraft":    return "/aircraft";
      case "Tasks":       return "/tasks";
      case "Schedule":    return "/schedule";
      case "Technicians": return "/technicians";
      case "Inventory":   return "/inventory";
      case "History":     return "/history";
      case "Reports":     return "/reports";
      case "Alerts":      return "/alerts";
      case "Upload":      return "/upload";
      case "Admin":       return "/admin";
      case "Profile":     return "/profile";
      default:            return `/${item.toLowerCase()}`;
    }
  };

  return (
    <div className="tech-page">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo-section">
          <h1>Fleet Command</h1>
          <p>V 4.2.1-Industrial</p>
        </div>

        <nav className="nav-links">
          {navItems.map((item) => (
            <NavLink 
              key={item.name}
              to={getRoutePath(item.name)} 
              className={({ isActive }) => isActive ? "active" : ""}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main */}
      <main className="main-content">
        {/* Header */}
        <header className="topbar">
          <div>
            <h1>AeroOps Control</h1>
          </div>

          <div className="search-box">
            <input
              type="text"
              placeholder="Search technician by ID, name, or cert..."
            />
          </div>
        </header>

        {/* Page Header */}
        <section className="page-header">
          <div>
            <h2>Technician Directory</h2>
            <p>
              Managing 142 certified maintenance professionals across 3 shifts.
            </p>
          </div>

          <button className="add-btn">+ Onboard Technician</button>
        </section>

        {/* Stats */}
        <section className="stats-grid">
          <div className="stat-card">
            <p>ON SHIFT</p>
            <h3>48</h3>
          </div>

          <div className="stat-card">
            <p>AVAILABLE</p>
            <h3>12</h3>
          </div>

          <div className="stat-card">
            <p>AOG PRIORITY</p>
            <h3>03</h3>
          </div>

          <div className="stat-card">
            <p>AVG LOAD</p>
            <h3>74%</h3>
          </div>
        </section>

        {/* Filters */}
        <section className="filters">
          <button className="filter active-filter">All Staff</button>
          <button className="filter">Avionics</button>
          <button className="filter">Engine Specialist</button>
          <button className="filter">Structural</button>

          <select>
            <option>Workload (High-Low)</option>
            <option>Cert Level</option>
            <option>Availability</option>
          </select>
        </section>

        {/* Technician Cards */}
        <section className="card-grid">
          {/* Card 1 */}
          <div className="tech-card">
            <div className="card-top">
              <img
                src="https://i.pravatar.cc/150?img=12"
                alt="tech"
              />

              <div>
                <h3>Marcus Thorne</h3>
                <p>TECH-7742-AV</p>
              </div>

              <span className="badge green">ON SHIFT</span>
            </div>

            <div className="skills">
              <span>Avionics Level III</span>
              <span>Systems Integration</span>
            </div>

            <div className="workload">
              <div className="workload-info">
                <span>WORKLOAD</span>
                <span>88%</span>
              </div>

              <div className="progress">
                <div className="progress-fill danger"></div>
              </div>
            </div>

            <div className="details">
              <div>
                <small>ASSIGNED AIRCRAFT</small>
                <p>N142-AF (Line)</p>
              </div>

              <div>
                <small>SHIFT END</small>
                <p>16:30 UTC</p>
              </div>
            </div>

            <button className="view-btn">
              VIEW ASSIGNMENT LOG
            </button>
          </div>

          {/* Card 2 */}
          <div className="tech-card">
            <div className="card-top">
              <img
                src="https://i.pravatar.cc/150?img=32"
                alt="tech"
              />

              <div>
                <h3>Elena Rodriguez</h3>
                <p>TECH-8219-EN</p>
              </div>

              <span className="badge green">ON SHIFT</span>
            </div>

            <div className="skills">
              <span>Engine Specialist</span>
              <span>FAA Cert A&P</span>
            </div>

            <div className="workload">
              <div className="workload-info">
                <span>WORKLOAD</span>
                <span>42%</span>
              </div>

              <div className="progress">
                <div className="progress-fill safe"></div>
              </div>
            </div>

            <div className="details">
              <div>
                <small>ASSIGNED AIRCRAFT</small>
                <p>A320-994 (Hangar)</p>
              </div>

              <div>
                <small>SHIFT END</small>
                <p>16:30 UTC</p>
              </div>
            </div>

            <button className="view-btn">
              VIEW ASSIGNMENT LOG
            </button>
          </div>

          {/* Critical Card */}
          <div className="tech-card critical">
            <div className="critical-tag">
              AOG PRIORITY TASK
            </div>

            <div className="card-top">
              <img
                src="https://i.pravatar.cc/150?img=25"
                alt="tech"
              />

              <div>
                <h3>Sami Al-Farsi</h3>
                <p>TECH-1104-ST</p>
              </div>

              <span className="badge green">ON SHIFT</span>
            </div>

            <div className="skills">
              <span>Structural Repair</span>
              <span>Fastener Cert</span>
            </div>

            <div className="workload">
              <div className="workload-info">
                <span>WORKLOAD</span>
                <span>100%</span>
              </div>

              <div className="progress">
                <div className="progress-fill full"></div>
              </div>
            </div>

            <div className="details">
              <div>
                <small>CRITICAL AIRCRAFT</small>
                <p>B737-MAX (Gate 4)</p>
              </div>

              <div>
                <small>EST. COMPLETION</small>
                <p>14:15 UTC</p>
              </div>
            </div>

            <button className="danger-btn">
              INTERVENE / REASSIGN
            </button>
          </div>
        </section>

        {/* Shift Timeline */}
        <section className="timeline-section">
          <h2>Shift Timeline (Current 24h)</h2>

          <table>
            <thead>
              <tr>
                <th>Shift Group</th>
                <th>00:00</th>
                <th>04:00</th>
                <th>08:00</th>
                <th>12:00</th>
                <th>16:00</th>
                <th>20:00</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Morning Alpha</td>
                <td></td>
                <td></td>
                <td className="active-slot"></td>
                <td className="active-slot"></td>
                <td className="overtime-slot"></td>
                <td></td>
              </tr>

              <tr>
                <td>Mid-Day Bravo</td>
                <td></td>
                <td></td>
                <td></td>
                <td className="active-slot"></td>
                <td className="active-slot"></td>
                <td className="active-slot"></td>
              </tr>

              <tr>
                <td>Night Gamma</td>
                <td className="active-slot"></td>
                <td className="active-slot"></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="active-slot"></td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default TechnicianManagement;
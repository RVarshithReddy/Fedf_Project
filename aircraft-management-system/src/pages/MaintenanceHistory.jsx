import React from "react";
import "../styles/MaintenanceHistory.css";

const MaintenanceHistory = () => {
  return (
    <div className="history-page">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <h1>Fleet Command</h1>
          <p>V 4.2.1-Industrial</p>
        </div>

        <nav className="sidebar-nav">
          <a href="#">Dashboard</a>
          <a href="#">Aircraft</a>
          <a href="#">Tasks</a>
          <a href="#">Schedule</a>
          <a href="#">Technicians</a>
          <a href="#">Inventory</a>
          <a href="#" className="active">
            History
          </a>
          <a href="#">Reports</a>
          <a href="#">Alerts</a>
        </nav>

        <div className="sidebar-footer">
          <a href="#">Admin</a>
          <a href="#">Profile</a>
        </div>
      </aside>

      {/* Main */}
      <main className="main-content">
        {/* Header */}
        <header className="topbar">
          <div className="topbar-left">
            <h2>History</h2>

            <div className="search-box">
              <input
                type="text"
                placeholder="Search Tail #, Part ID, or Tech..."
              />
            </div>
          </div>

          <div className="topbar-right">
            <button className="outline-btn">Filter Logs</button>
            <button className="primary-btn">Export Audit</button>

            <img
              src="https://i.pravatar.cc/40"
              alt="profile"
              className="profile-img"
            />
          </div>
        </header>

        {/* Stats */}
        <section className="stats-grid">
          <div className="stat-card">
            <h4>COMPLIANCE RATE</h4>
            <h1>99.8%</h1>
            <p>↑ 0.2% vs last month</p>
          </div>

          <div className="stat-card">
            <h4>TOTAL INSPECTIONS (30D)</h4>
            <h1>1,422</h1>
            <p>8 scheduled for today</p>
          </div>

          <div className="stat-card">
            <h4>AOG RESOLUTIONS</h4>
            <h1 className="orange">14</h1>
            <p>Avg. resolution 4.2h</p>
          </div>
        </section>

        {/* Main Grid */}
        <section className="content-grid">
          {/* Table */}
          <div className="table-container">
            <div className="table-header">
              <h3>Maintenance Audit Log</h3>
              <span className="live-badge">LIVE FEED</span>
            </div>

            <table>
              <thead>
                <tr>
                  <th>DATE/TIME</th>
                  <th>TAIL #</th>
                  <th>MAINTENANCE TYPE</th>
                  <th>STATUS</th>
                  <th>TECHNICIAN</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>2023-10-24 08:14</td>
                  <td className="tail">N742-XP</td>
                  <td>
                    <strong>Engine Cowling Fastener Replacement</strong>
                    <p>AD 2023-01 Compliance Check</p>
                  </td>
                  <td>
                    <span className="status success">Airworthy</span>
                  </td>
                  <td>M. Kowalski</td>
                </tr>

                <tr>
                  <td>2023-10-24 06:45</td>
                  <td className="tail">G-BHLP</td>
                  <td>
                    <strong>B-Check Heavy Maintenance</strong>
                    <p>Event ID: 99420-MC</p>
                  </td>
                  <td>
                    <span className="status progress">In Progress</span>
                  </td>
                  <td>J. Doe</td>
                </tr>

                <tr>
                  <td>2023-10-23 22:12</td>
                  <td className="tail">N122-AF</td>
                  <td>
                    <strong>Hydraulic Leak Rectification</strong>
                    <p>System: Main Landing Gear</p>
                  </td>
                  <td>
                    <span className="status success">Airworthy</span>
                  </td>
                  <td>R. Ames</td>
                </tr>

                <tr>
                  <td>2023-10-23 15:30</td>
                  <td className="tail">F-GRXP</td>
                  <td>
                    <strong>Avionics Upgrade: SatCom B</strong>
                    <p>Part Installed: AC-99-B</p>
                  </td>
                  <td>
                    <span className="status danger">AOG</span>
                  </td>
                  <td>S. Vane</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Timeline */}
          <div className="timeline-card">
            <div className="timeline-header">
              <h3>Live Event Feed</h3>
              <span className="dot"></span>
            </div>

            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-icon green"></div>

                <div className="timeline-content">
                  <div className="timeline-top">
                    <h4>Release to Service</h4>
                    <span>08:14</span>
                  </div>

                  <p>
                    N742-XP cleared for flight ops following AD check.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-icon blue"></div>

                <div className="timeline-content">
                  <div className="timeline-top">
                    <h4>Part Replacement</h4>
                    <span>07:22</span>
                  </div>

                  <p>
                    G-BHLP fuel pump replaced successfully.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-icon red"></div>

                <div className="timeline-content">
                  <div className="timeline-top">
                    <h4>AOG Alert Issued</h4>
                    <span>06:45</span>
                  </div>

                  <p>
                    F-GRXP grounded due to primary HUD failure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Card */}
        <section className="compliance-card">
          <h3>Compliance Check</h3>

          <p>
            You have 3 upcoming AD deadlines within the next 48 hours
            for the regional fleet.
          </p>

          <div className="progress-row">
            <span>AD 2023-14-12</span>
            <span>14H REMAINING</span>
          </div>

          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>

          <button className="compliance-btn">
            PREPARE COMPLIANCE PACK
          </button>
        </section>

        {/* FAB */}
        <button className="fab">+</button>
      </main>
    </div>
  );
};

export default MaintenanceHistory;
import { useState } from "react";
import "./FleetDashboard.css";

function FleetDashboard() {
  const [showPanel, setShowPanel] = useState(false);
  const [selectedAircraft, setSelectedAircraft] = useState("N982WC");

  const openPanel = (tailNo) => {
    setSelectedAircraft(tailNo);
    setShowPanel(true);
  };

  const closePanel = () => {
    setShowPanel(false);
  };

  return (
    <div className="dashboard">

      {/* Sidebar */}
      <aside className="sidebar">

        <div className="logo-section">
          <h2>Fleet Command</h2>
          <p>V 4.2.1-Industrial</p>
        </div>

        <nav className="nav-links">
          <a href="/">Dashboard</a>
          <a href="/" className="active">Aircraft</a>
          <a href="/">Tasks</a>
          <a href="/">Schedule</a>
          <a href="/">Technicians</a>
          <a href="/">Inventory</a>
          <a href="/">History</a>

          <div className="system-label">
            <p>System</p>
          </div>

          <a href="/">Reports</a>
          <a href="/">Alerts</a>
          <a href="/">Admin</a>
        </nav>

        <div className="profile-card">
          <div className="avatar">CE</div>

          <div>
            <h4>Chief Engineer</h4>
            <p>Maintenance Div.</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">

        {/* Topbar */}
        <header className="topbar">

          <div className="topbar-left">
            <h1>AeroOps Control</h1>

            <div className="search-box">
              <input
                type="text"
                placeholder="Search Tail No., Fleet ID or Model..."
              />
            </div>
          </div>

          <div className="topbar-right">
            <button>📊</button>
            <button>🔔</button>
            <button>⚙️</button>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="content">

          {/* Header */}
          <div className="content-header">

            <div>
              <p className="subheading">
                STRATEGIC READINESS
              </p>

              <h2>Fleet Management Overview</h2>
            </div>

            <div className="header-buttons">
              <button className="outline-btn">
                FILTER
              </button>

              <button className="primary-btn">
                REGISTER AIRCRAFT
              </button>
            </div>
          </div>

          {/* Stats */}
          <section className="stats-grid">

            <div className="stat-card">
              <p>TOTAL FLEET</p>
              <h3>124</h3>
              <span>+2 This Month</span>
            </div>

            <div className="stat-card">
              <p>OPERATIONAL</p>
              <h3>108</h3>
              <span>87.1%</span>
            </div>

            <div className="stat-card danger">
              <p>AOG (CRITICAL)</p>
              <h3>06</h3>
              <span>Immediate Action</span>
            </div>

            <div className="stat-card warning">
              <p>SCHEDULED MAINT.</p>
              <h3>10</h3>
              <span>Routine Checks</span>
            </div>

          </section>

          {/* Aircraft Table */}
          <section className="table-section">

            <table>

              <thead>
                <tr>
                  <th>TAIL NUMBER</th>
                  <th>MODEL / CONFIG</th>
                  <th>STATUS</th>
                  <th>LAST FLIGHT</th>
                  <th>NEXT INSPECTION</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>

              <tbody>

                <tr onClick={() => openPanel("N1245A")}>
                  <td>N1245A</td>
                  <td>Boeing 737-800</td>

                  <td>
                    <span className="badge green">
                      Airworthy
                    </span>
                  </td>

                  <td>JFK-LHR</td>
                  <td>Oct 24, 2023</td>

                  <td>
                    <button className="table-btn">
                      VIEW LOGS
                    </button>
                  </td>
                </tr>

                <tr onClick={() => openPanel("N982WC")}>
                  <td>N982WC</td>
                  <td>Airbus A320neo</td>

                  <td>
                    <span className="badge red">
                      AOG - ENGINE 2
                    </span>
                  </td>

                  <td>ORD-LAX</td>
                  <td>OVERDUE</td>

                  <td>
                    <button className="table-btn red-text">
                      URGENT ACTION
                    </button>
                  </td>
                </tr>

                <tr onClick={() => openPanel("N773PX")}>
                  <td>N773PX</td>
                  <td>Gulfstream G650</td>

                  <td>
                    <span className="badge blue">
                      IN MAINTENANCE
                    </span>
                  </td>

                  <td>SFO-HND</td>
                  <td>Oct 18, 2023</td>

                  <td>
                    <button className="table-btn">
                      VIEW LOGS
                    </button>
                  </td>
                </tr>

              </tbody>
            </table>
          </section>
        </div>
      </main>

      {/* Side Panel */}
      <div className={`detail-panel ${showPanel ? "show" : ""}`}>

        <div className="panel-header">

          <div>
            <p>AIRCRAFT PROFILE</p>
            <h2>{selectedAircraft}</h2>
          </div>

          <button onClick={closePanel}>✕</button>
        </div>

        <div className="panel-content">

          <img
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200"
            alt="Aircraft"
          />

          <div className="spec-grid">

            <div className="spec-card">
              <p>AIRFRAME HOURS</p>
              <h4>12,450.2</h4>
            </div>

            <div className="spec-card">
              <p>CYCLES</p>
              <h4>8,112</h4>
            </div>
          </div>

          <div className="maintenance-section">

            <h3>CRITICAL MAINTENANCE LOG</h3>

            <div className="issue-card">

              <span>HIGH PRIORITY</span>

              <h4>
                Engine #2 Vibration Anomaly
              </h4>

              <p>
                Abnormal thermal reading on secondary exhaust sensor.
                Inspection required immediately.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {showPanel && (
        <div
          className="overlay"
          onClick={closePanel}
        ></div>
      )}

      {/* Floating Button */}
      <button className="fab">
        +
      </button>
    </div>
  );
}

export default FleetDashboard;
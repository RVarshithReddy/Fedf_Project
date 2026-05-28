import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-page">

      {/* Top Navbar */}
      <header className="topbar">
        <div className="topbar-left">
          <h1>AeroOps Control</h1>

          <div className="search-box">
            <input
              type="text"
              placeholder="Search aircraft ID, task, or technician..."
            />
          </div>
        </div>

        <div className="topbar-right">
          <button>⚙️</button>
          <button>🔔</button>

          <div className="profile">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUIAWfANgfXpTCThXH4uedHl9W6fY709d-fnv4plPSQK6fVua4N-0MO-PXn2kCa6JV4Vyp_FUtmHkGjnAEFlyHcjQiKJBS_47gn-_MD2hbqXb4MXHhLK9d9HV58I1bismUjNPIPQwv97LOd4cUxu6OdTQ-3aWMRO8AmOHwIEfoW6k27-J8mvSSyGhJGhnt9v4gXOvv3yBmIYL-94yjBnlB9yYTTgNfcOoDfQ4WTZjeZc0aubw56sw4n8M3e62MkGYX9fDbPONIgFo"
              alt="profile"
            />
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          <h2>Fleet Command</h2>
          <p>V 4.2.1</p>
        </div>

        <nav>
          <a className="active">Dashboard</a>
          <a>Aircraft</a>
          <a>Tasks</a>
          <a>Schedule</a>
          <a>Technicians</a>
          <a>Inventory</a>
          <a>Reports</a>
          <a>Alerts</a>
          <a>Profile</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">

        {/* KPI Cards */}
        <section className="kpi-grid">

          <div className="kpi-card">
            <h4>Fleet Availability</h4>
            <h2>94.2%</h2>
            <div className="progress">
              <div style={{ width: "94%" }}></div>
            </div>
          </div>

          <div className="kpi-card alert">
            <h4>Critical Alerts</h4>
            <h2>03</h2>
            <p>Aircraft AOG</p>
          </div>

          <div className="kpi-card">
            <h4>Active Work Orders</h4>
            <h2>28</h2>
            <p>12 Routine | 16 Scheduled</p>
          </div>

          <div className="kpi-card">
            <h4>Parts Shortage</h4>
            <h2>14</h2>
            <p>Critical</p>
          </div>
        </section>

        {/* Dashboard Grid */}
        <section className="dashboard-grid">

          {/* Fleet Map */}
          <div className="fleet-map">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuLQsy9yWpqLeVk_V1Oqn1U2FbGEXf2RCISSLZX8E2CboVLSA2SklOOSmh-4Y1Oq8jrr_d2gVdztdv6iPZweTwTYe1e3ajdopR140qFdQFwDcNjh2Tyx7BvNXryHvPVrQsudvQQMGsxhmuMI838pCGdqjwAGsNqZRvuzJ3oCf3U9tsCsLcvvkVSPArPIEPogzGazn7YomJ4vEOXgPfTeqfisycR5U_VD0TAGEyoOOtkgiCeeY-fmgwPPIg3lXZ23BDzA-92Ax_AQo"
              alt="fleet map"
            />

            <div className="map-overlay">
              <div className="status green">ATL-209 IN FLIGHT</div>
              <div className="status red">JFK-112 AOG</div>
            </div>
          </div>

          {/* Outlook Chart */}
          <div className="outlook-card">
            <h3>7-Day Outlook</h3>

            <div className="chart">
              <div className="bar" style={{ height: "40%" }}></div>
              <div className="bar" style={{ height: "65%" }}></div>
              <div className="bar active" style={{ height: "85%" }}></div>
              <div className="bar" style={{ height: "50%" }}></div>
              <div className="bar" style={{ height: "30%" }}></div>
              <div className="bar" style={{ height: "20%" }}></div>
              <div className="bar" style={{ height: "15%" }}></div>
            </div>
          </div>
        </section>

        {/* Table */}
        <section className="table-section">

          <div className="table-header">
            <h3>Active Maintenance Priorities</h3>

            <div>
              <button className="primary-btn">Export Report</button>
              <button className="secondary-btn">Filter All</button>
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th>Aircraft ID</th>
                <th>Task Type</th>
                <th>Status</th>
                <th>Assignee</th>
                <th>Time Remaining</th>
                <th>Progress</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>N445AX</td>
                <td>Engine Assembly Check</td>
                <td>
                  <span className="badge red">AOG</span>
                </td>
                <td>J. Doe</td>
                <td>02:14:55</td>
                <td>85%</td>
              </tr>

              <tr>
                <td>B787-802</td>
                <td>B-Check Service</td>
                <td>
                  <span className="badge green">Scheduled</span>
                </td>
                <td>M. Kuznetsov</td>
                <td>14:00:00</td>
                <td>12%</td>
              </tr>

              <tr>
                <td>N992SP</td>
                <td>Avionics Calibration</td>
                <td>
                  <span className="badge blue">In Progress</span>
                </td>
                <td>R. Wright</td>
                <td>04:30:12</td>
                <td>45%</td>
              </tr>

            </tbody>
          </table>
        </section>

      </main>
    </div>
  );
}

export default Dashboard;
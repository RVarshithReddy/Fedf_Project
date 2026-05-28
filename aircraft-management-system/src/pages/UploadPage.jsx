import React from "react";
import "../styles/UploadPage.css";

const UploadPage = () => {
  return (
    <div className="upload-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo-section">
          <h1>Fleet Command</h1>
          <p>V 4.2.1-Industrial</p>
        </div>

        <nav className="nav-menu">
          <a href="#">Dashboard</a>
          <a href="#">Aircraft</a>
          <a href="#">Tasks</a>
          <a href="#">Schedule</a>
          <a href="#">Technicians</a>
          <a href="#">Inventory</a>
          <a href="#">History</a>
          <a href="#">Reports</a>
          <a href="#">Alerts</a>

          <a href="#" className="active">
            Upload
          </a>

          <a href="#">Admin</a>
          <a href="#">Profile</a>
        </nav>

        <div className="engineer-box">
          <div className="engineer-avatar">E</div>

          <div>
            <h4>Chief Engineer</h4>
            <p>Terminal B-4</p>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="main-content">
        {/* Topbar */}
        <header className="topbar">
          <div>
            <h2>AeroOps Control</h2>
            <span>Upload</span>
          </div>

          <input type="text" placeholder="Search system logs..." />
        </header>

        {/* Content */}
        <div className="content-wrapper">
          {/* Heading */}
          <div className="page-header">
            <div>
              <p className="sub-title">SYSTEM INTEGRATION TERMINAL</p>

              <h1>Data Import & Synchronization</h1>
            </div>

            <div className="header-buttons">
              <button className="outline-btn">Manage API Keys</button>

              <button className="primary-btn">
                Full Fleet Sync
              </button>
            </div>
          </div>

          {/* Grid */}
          <div className="grid-layout">
            {/* Left */}
            <div className="left-section">
              {/* Upload Box */}
              <div className="upload-box">
                <div className="upload-icon">☁</div>

                <h2>Drop Maintenance Files Here</h2>

                <p>
                  Support for aircraft telemetry (CSV, PDF, JSON/XML)
                </p>

                <div className="upload-buttons">
                  <button className="primary-btn">
                    Browse Local Storage
                  </button>

                  <button className="outline-btn">
                    Connect S3 Bucket
                  </button>
                </div>
              </div>

              {/* Transfers */}
              <div className="card">
                <div className="card-header">
                  <h3>In-Progress Transfers</h3>

                  <span>2 ACTIVE</span>
                </div>

                {/* Item */}
                <div className="transfer-item">
                  <div className="transfer-top">
                    <div>
                      <h4>N732-ENG-TELEMETRY.parquet</h4>

                      <p>42.8 MB</p>
                    </div>

                    <strong>82%</strong>
                  </div>

                  <div className="progress-bar">
                    <div className="progress-fill orange"></div>
                  </div>
                </div>

                {/* Item */}
                <div className="transfer-item">
                  <div className="transfer-top">
                    <div>
                      <h4>AIRFRAME-LOGBOOK.pdf</h4>

                      <p>12.1 MB</p>
                    </div>

                    <strong>45%</strong>
                  </div>

                  <div className="progress-bar">
                    <div className="progress-fill blue"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="right-section">
              {/* Health */}
              <div className="health-card">
                <h4>SYSTEM HEALTH</h4>

                <h1>99.8%</h1>

                <p>Data Integrity Score</p>
              </div>

              {/* Recent Results */}
              <div className="card">
                <h3>Recent Results</h3>

                <div className="result success">
                  <h4>Engine Sensors V4.2</h4>

                  <p>Imported 12,402 records successfully.</p>
                </div>

                <div className="result error">
                  <h4>Pre-flight Checklist Scan</h4>

                  <p>Manual review required.</p>
                </div>

                <div className="result neutral">
                  <h4>Legacy Logbook B-99</h4>

                  <p>Archived successfully.</p>
                </div>
              </div>

              {/* Connectors */}
              <div className="card">
                <h3>Active Connectors</h3>

                <div className="connector">
                  <span>FAA Registry Sync</span>
                  <div className="status active"></div>
                </div>

                <div className="connector">
                  <span>Pratt & Whitney</span>
                  <div className="status active"></div>
                </div>

                <div className="connector">
                  <span>Rolls-Royce</span>
                  <div className="status inactive"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Visualization */}
          <div className="topology-card">
            <h2>Fleet Data Topology</h2>

            <p>
              Real-time visualization of data flowing from aircraft
              into central command.
            </p>

            <div className="topology-center">
              <div className="hub">CORE OPS</div>

              <div className="node top-left">TAIL N722</div>

              <div className="node bottom-right alert">
                AOG: N441DX
              </div>

              <div className="node left">SENSOR NET</div>

              <div className="node right">LOGS</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UploadPage;
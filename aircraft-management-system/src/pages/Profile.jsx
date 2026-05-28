import React from "react";
import "../styles/Profile.css";

const Profile = () => {
  return (
    <div className="profile-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <h1>Fleet Command</h1>
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
          ].map((item) => (
            <a href="/" key={item} className="nav-item">
              {item}
            </a>
          ))}

          <a href="/" className="nav-item active">
            Profile
          </a>
        </nav>

        <div className="sidebar-user">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWbsPhEoFQMGzM73VeGfvq51MIe9nsTtGs26MoZ86r1F1R3K0_1caqLNE2qYusa_tnEQ9K94_WcRuQi-EjwBTRWNM4AtYoBHqEAkqoi2c3D5CRDVItJQ09wJnJZJSgKcY62el9enU-EYh3HuIFt9QV9bzWwtAx-fMOpaT0Y9aHJGIUB54fzH0BWUL8jkdhsffCnANZj4a9srHxmY3s-0hPUVTVDxGcJmbNLvukL8z0JOSW6iY5_jz60lEb6A2DRIklak9J-CUFWJA"
            alt="user"
          />
          <div>
            <h4>E. Richardson</h4>
            <p>Chief Engineer</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Topbar */}
        <header className="topbar">
          <div className="topbar-left">
            <h2>AeroOps Control</h2>
          </div>

          <div className="topbar-right">
            <input type="text" placeholder="Search..." />
          </div>
        </header>

        {/* Profile Header */}
        <section className="profile-header">
          <img
            className="profile-avatar"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAX8PUPk_q_MyigbfqMX3zm39su_VmM3qJPQs9vJRdiphGQfdN_t-7ZhvBJcWrs5_hK4CJp4B9Sz29fWrx8-eKD3miI62WEB4VUG13mDM4MUws8N9qqwHtCavbuaL1LnlnqiySEoXUGDuKHWha5lI-mn6bfwlJaWanGvtOjwz8OELXIPSvhLPjqM6ww80jl3udecdT-WZqhAssW0-zSvU6nAd1SfOT_Qv5ZOrNRzgcKuR_H2pjIooAz25YTJvSTb-aPQIp4ESM_t1Q"
            alt="profile"
          />

          <div className="profile-info">
            <span className="badge">ACTIVE COMMAND</span>
            <h1>Edward Richardson</h1>
            <p>Chief Maintenance Engineer • Fleet Operations</p>
          </div>

          <div className="profile-actions">
            <button>Edit Profile</button>
            <button className="secondary-btn">Share</button>
          </div>
        </section>

        {/* Grid Section */}
        <section className="grid-layout">
          {/* Certifications */}
          <div className="card">
            <h3>Professional Certifications</h3>

            <div className="cert-item">
              <h4>FAA Part 65 A&P</h4>
              <p>Airframe & Powerplant • Issued 2012</p>
            </div>

            <div className="cert-item">
              <h4>Boeing 787 Type Rating</h4>
              <p>Mechanical/Avionics • Exp. 2026</p>
            </div>

            <div className="cert-item">
              <h4>ASNT NDT Level III</h4>
              <p>Non-Destructive Testing • Verified</p>
            </div>
          </div>

          {/* Notification Preferences */}
          <div className="card">
            <h3>Notification Preferences</h3>

            <div className="toggle-row">
              <span>Critical Safety Alerts</span>
              <input type="checkbox" defaultChecked />
            </div>

            <div className="toggle-row">
              <span>Inventory Thresholds</span>
              <input type="checkbox" defaultChecked />
            </div>

            <div className="toggle-row">
              <span>Team Shift Changes</span>
              <input type="checkbox" />
            </div>

            <div className="toggle-row">
              <span>Maintenance Milestones</span>
              <input type="checkbox" defaultChecked />
            </div>
          </div>

          {/* Security */}
          <div className="card">
            <h3>Security Settings</h3>

            <button className="security-btn">
              Update Password
            </button>

            <button className="security-btn">
              Two-Factor Auth
            </button>

            <button className="security-btn">
              Active Sessions
            </button>
          </div>
        </section>

        {/* Timeline */}
        <section className="timeline-card">
          <h2>Recent Operational History</h2>

          <div className="timeline">
            <div className="timeline-item">
              <h4>Critical Airworthiness Release Approval</h4>
              <p>
                Final technical verification for Boeing 787-8 following
                engine replacement.
              </p>
              <span>OCT 24, 2023</span>
            </div>

            <div className="timeline-item">
              <h4>Shift Handover Documented</h4>
              <p>
                Successfully transitioned Command Duty to Night Lead.
              </p>
              <span>OCT 23, 2023</span>
            </div>

            <div className="timeline-item">
              <h4>Inventory Procurement Request</h4>
              <p>
                Requested emergency procurement for repair kits.
              </p>
              <span>OCT 22, 2023</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Profile;
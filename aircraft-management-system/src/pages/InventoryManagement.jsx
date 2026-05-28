// src/pages/InventoryManagement.jsx

import React from "react";
import { NavLink } from "react-router-dom";
import "../style/InventoryManagement.css";

const InventoryManagement = () => {
  // Explicit route mapper ensuring seamless alignment with App.jsx endpoints
  const getRoutePath = (item) => {
    switch (item) {
      case "Dashboard":   return "/dashboard";
      case "Aircraft":    return "/aircraft";
      case "Tasks":       return "/tasks";
      case "Inventory":   return "/inventory";
      case "Technicians": return "/technicians";
      case "Schedule":    return "/schedule";
      case "Reports":     return "/reports";
      case "Alerts":      return "/alerts";
      default:            return `/${item.toLowerCase()}`;
    }
  };

  return (
    <div className="inventory-page">

      {/* HEADER */}
      <header className="topbar">
        <div className="logo-section">
          <h1 className="logo">AeroOps Control</h1>

          <div className="search-box">
            <span className="material-symbols-outlined">search</span>
            <input
              type="text"
              placeholder="Search inventory by Part ID, Bin, or Description..."
            />
          </div>
        </div>

        <div className="top-actions">
          <button className="icon-btn">
            <span className="material-symbols-outlined">
              health_metrics
            </span>
          </button>

          <button className="icon-btn notification">
            <span className="material-symbols-outlined">
              notifications
            </span>
            <div className="notification-dot"></div>
          </button>

          <button className="icon-btn">
            <span className="material-symbols-outlined">settings</span>
          </button>

          <div className="profile">
            <div>
              <h4>Chief Maintenance Engineer</h4>
              <p>Terminal A-4</p>
            </div>

            <img
              src="https://i.pravatar.cc/100"
              alt="profile"
            />
          </div>
        </div>
      </header>

      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="sidebar-top">
          <h2>Fleet Command</h2>
          <p>V 4.2.1-Industrial</p>
        </div>

        <nav className="sidebar-nav">
          {[
            "Dashboard",
            "Aircraft",
            "Tasks",
            "Inventory",
            "Technicians",
            "Schedule",
            "Reports",
            "Alerts",
          ].map((item, index) => (
            <NavLink
              key={index}
              to={getRoutePath(item)}
              className={({ isActive }) => isActive ? "active" : ""}
            >
              {item}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="main-content">

        {/* PAGE HEADER */}
        <div className="page-header">
          <div>
            <p className="breadcrumb">
              Fleet Command / Spare Parts Inventory
            </p>

            <h1>Warehouse A-102</h1>
          </div>

          <div className="header-buttons">
            <button className="outline-btn">
              Import Manifest
            </button>

            <button className="primary-btn">
              Add New Part
            </button>
          </div>
        </div>

        {/* STATS */}
        <div className="stats-grid">

          <div className="stat-card">
            <p>Total SKU Count</p>
            <h2>12,842</h2>
            <span>+124 this month</span>
          </div>

          <div className="stat-card danger">
            <p>AOG Critical Lows</p>
            <h2>14 Items</h2>
            <span>Immediate reorder required</span>
          </div>

          <div className="stat-card">
            <p>Inventory Valuation</p>
            <h2>$4.2M</h2>
            <span>Last reconciled: 2h ago</span>
          </div>

          <div className="stat-card">
            <p>Pending Shipments</p>
            <h2>08</h2>
            <span>Inbound ETA: 14:00 Today</span>
          </div>

        </div>

        {/* FILTER BAR */}
        <div className="filter-bar">

          <select defaultValue="All Categories">
            <option>All Categories</option>
          </select>

          <select defaultValue="All Bin Locations">
            <option>All Bin Locations</option>
          </select>

          <select defaultValue="Status: All">
            <option>Status: All</option>
          </select>

          <button>Clear Filters</button>

        </div>

        {/* TABLE */}
        <div className="table-container">

          <table>
            <thead>
              <tr>
                <th>Part Identification</th>
                <th>Category</th>
                <th>Bin Location</th>
                <th>Stock Level</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>
                  <strong>P/N: 737-HYD-ACT-002</strong>
                  <p>Actuator Assembly - Landing Gear</p>
                </td>

                <td>Mechanical</td>

                <td>BIN A-42-L</td>

                <td>02/10</td>

                <td>
                  <span className="status critical">
                    CRITICAL LOW
                  </span>
                </td>
              </tr>

              <tr>
                <td>
                  <strong>P/N: AVN-GPS-MOD-X9</strong>
                  <p>GPS Integrated Signal Module</p>
                </td>

                <td>Avionics</td>

                <td>BIN C-12-S</td>

                <td>45/50</td>

                <td>
                  <span className="status good">
                    AIRWORTHY
                  </span>
                </td>
              </tr>

              <tr>
                <td>
                  <strong>P/N: SCR-TI-M8-40</strong>
                  <p>Titanium M8 Mounting Screw</p>
                </td>

                <td>Hardware</td>

                <td>BIN F-02-A</td>

                <td>12/100</td>

                <td>
                  <span className="status pending">
                    REORDER IN TRANSIT
                  </span>
                </td>
              </tr>

            </tbody>
          </table>
        </div>

      </main>

      {/* FLOATING BUTTON */}
      <button className="fab">
        <span className="material-symbols-outlined">
          barcode_scanner
        </span>
      </button>
    </div>
  );
};

export default InventoryManagement;
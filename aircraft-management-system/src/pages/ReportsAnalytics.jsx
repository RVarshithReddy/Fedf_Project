import React from "react";
import "../styles/ReportsAnalytics.css";

const ReportsAnalytics = () => {
  return (
    <div className="reports-page">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo-section">
          <h1>Fleet Command</h1>
          <p>V 4.2.1-Industrial</p>
        </div>

        <nav className="nav-links">
          <a href="#"><span className="material-symbols-outlined">dashboard</span>Dashboard</a>
          <a href="#"><span className="material-symbols-outlined">flight</span>Aircraft</a>
          <a href="#"><span className="material-symbols-outlined">assignment</span>Tasks</a>
          <a href="#"><span className="material-symbols-outlined">calendar
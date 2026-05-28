// src/pages/Schedule.jsx

import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../style/Schedule.css";

const Schedule = () => {
  useEffect(() => {
    const draggables = document.querySelectorAll(".draggable-task");

    draggables.forEach((draggable) => {
      draggable.addEventListener("dragstart", () => {
        draggable.classList.add("dragging");
      });

      draggable.addEventListener("dragend", (e) => {
        draggable.classList.remove("dragging");

        const rect = draggable.parentElement.getBoundingClientRect();
        const x = e.clientX - rect.left - draggable.offsetWidth / 2;

        const snappedX = Math.round(x / 40) * 40;

        if (snappedX >= 0) {
          draggable.style.left = `${snappedX}px`;
        }
      });
    });

    const grids = document.querySelectorAll(".gantt-grid");

    grids.forEach((grid) => {
      grid.addEventListener("dragover", (e) => {
        e.preventDefault();
      });
    });
  }, []);

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

  const timeline = Array.from({ length: 30 }, (_, i) => i + 1);

  const aircraft = [
    {
      id: "N734MA",
      type: "B737-800 · Heavy Fleet",
      tasks: [
        {
          left: 120,
          width: 240,
          title: "C-CHECK MAINTENANCE",
          sub: "TSN: 14,230h",
          className: "task-blue",
        },
      ],
    },
    {
      id: "N812AF",
      type: "A321neo · Regional",
      tasks: [
        {
          left: 400,
          width: 120,
          title: "AOG: HYDRAULIC LEAK",
          sub: "CRITICAL",
          className: "task-red",
        },
        {
          left: 640,
          width: 100,
          title: "ROUTINE OPS",
          sub: "",
          className: "task-green",
        },
      ],
    },
    {
      id: "N445BB",
      type: "B737-MAX · Heavy Fleet",
      tasks: [
        {
          left: 0,
          width: 320,
          title: "ENGINE OVERHAUL",
          sub: "COMPLETED MAY 10",
          className: "task-gray",
        },
        {
          left: 800,
          width: 160,
          title: "AVIONICS UPGRADE",
          sub: "EST: 48H",
          className: "task-blue",
        },
      ],
    },
  ];

  return (
    <div className="schedule-container">
      {/* HEADER */}
      <header className="topbar">
        <div className="logo">AeroOps Control</div>

        <div className="top-actions">
          <button>🔔</button>
          <button>⚙️</button>
        </div>
      </header>

      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <h1>Fleet Command</h1>
          <p>V 4.2.1-Industrial</p>
        </div>

        <nav className="sidebar-nav">
          {["Dashboard", "Aircraft", "Tasks", "Schedule", "Technicians", "Inventory"].map((item) => (
            <NavLink
              key={item}
              to={getRoutePath(item)}
              className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
            >
              {item}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* MAIN */}
      <main className="main-content">
        {/* PAGE HEADER */}
        <section className="page-header">
          <div>
            <p className="subtitle">OPERATIONS SCHEDULING</p>
            <h1>Fleet Maintenance Schedule</h1>
          </div>

          <button className="new-slot-btn">+ NEW SLOT</button>
        </section>

        {/* LEGEND */}
        <section className="legend-bar">
          <div className="legend-item">
            <span className="legend red"></span>
            Critical / AOG
          </div>

          <div className="legend-item">
            <span className="legend blue"></span>
            Scheduled Service
          </div>

          <div className="legend-item">
            <span className="legend green"></span>
            Routine Inspection
          </div>
        </section>

        {/* GANTT CHART */}
        <section className="gantt-wrapper">
          {/* TIMELINE */}
          <div className="timeline-header">
            <div className="aircraft-col">AIRCRAFT ID</div>

            <div className="timeline-days">
              {timeline.map((day) => (
                <div
                  key={day}
                  className={`day-cell ${day === 14 ? "today" : ""}`}
                >
                  {day}
                </div>
              ))}
            </div>
          </div>

          {/* ROWS */}
          {aircraft.map((plane, index) => (
            <div className="gantt-row" key={index}>
              <div className="aircraft-info">
                <h3>{plane.id}</h3>
                <p>{plane.type}</p>
              </div>

              <div className="gantt-grid">
                {plane.tasks.map((task, idx) => (
                  <div
                    key={idx}
                    draggable
                    className={`task-bar draggable-task ${task.className}`}
                    style={{
                      left: `${task.left}px`,
                      width: `${task.width}px`,
                    }}
                  >
                    <div className="task-title">{task.title}</div>
                    <div className="task-sub">{task.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <p>Schedule auto-syncs every 5 mins.</p>

          <button>Manual Sync</button>
        </footer>
      </main>

      {/* FAB */}
      <button className="fab">+</button>
    </div>
  );
};

export default Schedule;
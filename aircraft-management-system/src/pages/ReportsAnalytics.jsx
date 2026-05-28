// src/pages/ReportsAnalytics.jsx

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../style/ReportsAnalytics.css';

export default function ReportsAnalytics() {
  const [lastUpdated, setLastUpdated] = useState('08 Oct 2023, 09:42 UTC');

  // Navigation Sidebar Configurations
  const navLinks = [
    { name: 'Dashboard', icon: 'dashboard' },
    { name: 'Aircraft', icon: 'flight' },
    { name: 'Tasks', icon: 'assignment' },
    { name: 'Schedule', icon: 'calendar_month' },
    { name: 'Technicians', icon: 'engineering' },
    { name: 'Reports', icon: 'analytics' },
    { name: 'Alerts', icon: 'warning' },
  ];

  // Explicit route mapper ensuring seamless alignment with App.jsx endpoints
  const getRoutePath = (item) => {
    switch (item) {
      case 'Dashboard':   return '/dashboard';
      case 'Aircraft':    return '/aircraft';
      case 'Tasks':       return '/tasks';
      case 'Schedule':    return '/schedule';
      case 'Technicians': return '/technicians';
      case 'Inventory':   return '/inventory';
      case 'History':     return '/history';
      case 'Reports':     return '/reports';
      case 'Alerts':      return '/alerts';
      case 'Upload':      return '/upload';
      case 'Admin':       return '/admin';
      case 'Profile':     return '/profile';
      default:            return `/${item.toLowerCase()}`;
    }
  };

  // Mock Data for Charts and Metrics
  const mttrHistory = ['h-4 opacity-20', 'h-6 opacity-40', 'h-10 opacity-60', 'h-8 opacity-80', 'h-12'];
  
  const monthlyTrends = [
    { month: 'JAN', flightHours: 'h-[60%]', cost: 'h-[40%]' },
    { month: 'FEB', flightHours: 'h-[55%]', cost: 'h-[45%]' },
    { month: 'MAR', flightHours: 'h-[72%]', cost: 'h-[38%]' },
    { month: 'APR', flightHours: 'h-[65%]', cost: 'h-[50%]' },
    { month: 'MAY', flightHours: 'h-[85%]', cost: 'h-[55%]' },
  ];

  const technicians = [
    { name: 'Sarah Miller (Lvl 3)', utilization: 94, hours: '142 HRS LOGGED', status: 'PEAK PERFORMANCE', statusClass: 'text-green-600', barClass: 'w-[94%] bg-primary-container' },
    { name: 'James Chen (Lvl 2)', utilization: 82, hours: '120 HRS LOGGED', status: 'ON SCHEDULE', statusClass: 'text-on-surface-variant', barClass: 'w-[82%] bg-primary-container' },
    { name: 'Robert Vogt (Lvl 3)', utilization: 65, hours: '98 HRS LOGGED', status: 'UNDER UTILIZED', statusClass: 'text-secondary', barClass: 'w-[65%] bg-secondary' },
  ];

  const auditLogs = [
    { id: 'AD-2023-0811', asset: 'N-782XP', type: 'Structural Crack Inspection', time: '2023-10-08 08:22', status: 'VERIFIED', isPending: false },
    { id: 'MS-981-L4', asset: 'N-442BB', type: 'L-Check Engine #2', time: '2023-10-07 14:15', status: 'VERIFIED', isPending: false },
    { id: 'FAA-D-9122', asset: 'N-001AF', type: 'Annual Avionics Recalibration', time: '2023-10-06 11:45', status: 'PENDING SIGN-OFF', isPending: true },
  ];

  return (
    <div className="reports-analytics-container text-on-surface">
      
      {/* Sidebar Navigation */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <h1 className="logo-text">Fleet Command</h1>
          <p className="version-tag">V 4.2.1-Industrial</p>
        </div>
        
        <nav className="sidebar-nav">
          {navLinks.map((link, idx) => (
            <NavLink 
              key={idx} 
              to={getRoutePath(link.name)} 
              className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            >
              <span className="material-symbols-outlined icon-margin">{link.icon}</span>
              {link.name}
            </NavLink>
          ))}
        </nav>
        
        <div className="sidebar-footer">
          <NavLink to={getRoutePath('Profile')} className="profile-container-link">
            <div className="profile-container">
              <img 
                alt="Profile" 
                className="profile-img" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkksn4Q4oK8ZK73tZyChcXvnNwAT6z1wk5pdHFKDrDI0V57W9kaI-7hwdiWfS9cf6aODzjMPzTzhUgvYdGwDEiTzVQM73AWAgz7e2OjtcjRGlfIMzO7iCDsKRf4Eu3I2TLTiXocnDCM4-9xMVH1wS2q4Iuk1828yDF7RpHtQKIvTK56qp5uVWjJbG_1sB0nhOpTwCc8fDkrJ06MkzPSqXKr1Jk_8iooHCLhGIiDETDy5wLFUQaXoZf89BgXKdptQ2DtkvQ_z_f750"
              />
              <div>
                <p className="profile-title">Chief Engineer</p>
                <p className="profile-id">ID: 99281-A</p>
              </div>
            </div>
          </NavLink>
        </div>
      </aside>

      {/* Main Content Space */}
      <main className="main-content">
        
        {/* Top App Bar */}
        <header className="top-bar">
          <div className="top-bar-left">
            <span className="brand-title">AeroOps Control</span>
            <div className="divider-vertical"></div>
            <h2 className="page-subtitle">Fleet Analytics Engine</h2>
          </div>
          
          <div className="top-bar-right">
            <div className="search-wrapper">
              <span className="material-symbols-outlined search-icon">search</span>
              <input className="search-input" placeholder="Search parameters..." type="text" />
            </div>
            <div className="action-icons">
              <button className="icon-btn">health_metrics</button>
              <button className="icon-btn">notifications</button>
              <button className="icon-btn">settings</button>
            </div>
          </div>
        </header>

        {/* Analytics Canvas Workspace */}
        <div className="analytics-canvas">
          
          {/* Global Action Bar */}
          <div className="action-bar flex-row justify-between items-end">
            <div>
              <h3 className="section-title">Operational Performance Matrix</h3>
              <p className="timestamp">Last updated: {lastUpdated}</p>
            </div>
            <div className="flex-row gap-3">
              <button className="btn btn-secondary-outline">
                <span className="material-symbols-outlined text-size-18">filter_list</span> Filter View
              </button>
              <button className="btn btn-primary-filled">
                <span className="material-symbols-outlined text-size-18">file_download</span> Export Regulatory Audit (FAA Form 8130-3)
              </button>
            </div>
          </div>

          {/* Bento Grid Layout */}
          <div className="bento-grid">
            
            {/* KPI Card 1: MTTR */}
            <div className="col-span-4 kpi-card">
              <div className="flex-row justify-between items-start">
                <span className="kpi-label">MTTR (Mean Time to Repair)</span>
                <span className="trend-down text-green flex-row items-center gap-1 font-mono">
                  <span className="material-symbols-outlined text-size-14">arrow_downward</span> 12.4%
                </span>
              </div>
              <div className="flex-row items-baseline gap-2">
                <span className="display-large">4.2</span>
                <span className="unit-text">Hours / Job</span>
              </div>
              <div className="card-footer-chart mt-auto">
                <div className="mini-bar-chart">
                  {mttrHistory.map((opacityClass, idx) => (
                    <div key={idx} className={`mini-bar bg-primary ${opacityClass}`}></div>
                  ))}
                </div>
              </div>
            </div>

            {/* KPI Card 2: OPEX */}
            <div className="col-span-4 kpi-card">
              <div className="flex-row justify-between items-start">
                <span className="kpi-label">Total Fleet OPEX (Monthly)</span>
                <span className="trend-up text-orange flex-row items-center gap-1 font-mono">
                  <span className="material-symbols-outlined text-size-14">trending_up</span> 4.1%
                </span>
              </div>
              <div className="flex-row items-baseline gap-2">
                <span className="display-large">$1.84M</span>
              </div>
              <div className="card-footer-chart mt-auto">
                <div className="segment-progress-bar">
                  <div className="bg-primary width-65" title="Parts"></div>
                  <div className="bg-secondary width-20" title="Labor"></div>
                  <div className="bg-tertiary-container width-15" title="Fixed"></div>
                </div>
                <div className="flex-row justify-between segments-legend">
                  <span>PARTS 65%</span>
                  <span>LABOR 20%</span>
                </div>
              </div>
            </div>

            {/* KPI Card 3: Safety */}
            <div className="col-span-4 kpi-card">
              <div className="flex-row justify-between items-start">
                <span className="kpi-label">Safety Compliance Score</span>
                <span className="material-symbols-outlined text-green fill-icon">verified</span>
              </div>
              <div className="flex-row items-baseline gap-2">
                <span className="display-large">99.8%</span>
              </div>
              <div className="mt-auto space-y-2">
                <div className="flex-row justify-between text-sm">
                  <span>Open ADs</span>
                  <span className="font-mono">0</span>
                </div>
                <div className="flex-row justify-between text-sm">
                  <span>Critical Faults</span>
                  <span className="font-mono text-orange">2 (AOG)</span>
                </div>
              </div>
            </div>

            {/* Main Bar Chart Panel */}
            <div className="col-span-8 visualization-panel">
              <div className="flex-row justify-between items-center mb-6">
                <h4 className="panel-heading">Flight Hours vs. Maintenance Burdens</h4>
                <div className="flex-row gap-2">
                  <span className="legend-tag">
                    <div className="dot bg-primary"></div> FLIGHT HOURS
                  </span>
                  <span className="legend-tag">
                    <div className="dot bg-secondary"></div> MAINTENANCE COST
                  </span>
                </div>
              </div>

              <div className="chart-canvas-wrapper">
                {/* Y-Axis scale metric references */}
                <div className="y-axis-labels font-mono">
                  <span>50k</span><span>40k</span><span>30k</span><span>20k</span><span>10k</span><span>0</span>
                </div>
                
                {/* Horizontal Grid structural guidance elements */}
                <div className="grid-lines-container">
                  <div className="grid-line"></div>
                  <div className="grid-line"></div>
                  <div className="grid-line"></div>
                  <div className="grid-line"></div>
                  <div className="grid-line"></div>
                </div>

                {/* Main Dynamic Bar Pairs Container */}
                <div className="bars-container">
                  {monthlyTrends.map((data, index) => (
                    <div key={index} className="bar-group-column">
                      <div className={`bar bar-secondary ${data.cost}`}></div>
                      <div className={`bar bar-primary ${data.flightHours}`}></div>
                      <span className="x-axis-label">{data.month}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Staff Efficiency Panel */}
            <div className="col-span-4 visualization-panel">
              <h4 className="panel-heading mb-6">Staff Efficiency</h4>
              <div className="staff-scroll-list pr-2">
                {technicians.map((tech, idx) => (
                  <div key={idx} className="space-y-2 mb-6">
                    <div className="flex-row justify-between items-center">
                      <span className="tech-name">{tech.name}</span>
                      <span className="font-mono text-sm">{tech.utilization}%</span>
                    </div>
                    <div className="progress-bar-track">
                      <div className={`progress-bar-fill ${tech.barClass}`}></div>
                    </div>
                    <div className="flex-row justify-between tech-meta-metrics">
                      <span>{tech.hours}</span>
                      <span className={tech.statusClass}>{tech.status}</span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="btn btn-block-flat mt-4">View All Personnel</button>
            </div>

            {/* Regulatory Compliance / Active Audit Logs Table */}
            <div className="col-span-12 table-card-panel">
              <div className="table-header-bar flex-row justify-between items-center">
                <div className="flex-row items-center gap-3">
                  <span className="material-symbols-outlined text-primary">description</span>
                  <h4 className="panel-heading">Active Regulatory Audit Trail</h4>
                </div>
                <div>
                  <select className="select-dropdown">
                    <option>Current Quarter (Q4 2023)</option>
                    <option>Annual 2023</option>
                    <option>Archive 2022</option>
                  </select>
                </div>
              </div>

              <div className="table-responsive-wrapper">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Document ID</th>
                      <th>Asset (Tail #)</th>
                      <th>Inspection Type</th>
                      <th>Timestamp (UTC)</th>
                      <th>Status</th>
                      <th className="text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {auditLogs.map((log, idx) => (
                      <tr key={idx} className="table-row-group">
                        <td className="font-mono">{log.id}</td>
                        <td className="font-bold">{log.asset}</td>
                        <td>{log.type}</td>
                        <td>{log.time}</td>
                        <td>
                          <span className={`status-badge ${log.isPending ? 'badge-pending' : 'badge-verified'}`}>
                            {log.status}
                          </span>
                        </td>
                        <td className="text-right">
                          <button className="table-action-btn">visibility</button>
                          <button className="table-action-btn ml-2">download</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
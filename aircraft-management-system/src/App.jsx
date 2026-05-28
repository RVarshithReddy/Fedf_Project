import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import FleetDashboard from "./pages/FleetDashboard";
import FleetManagement from "./pages/FleetManagement";
import InventoryManagement from "./pages/InventoryManagement";
import MaintenanceHistory from "./pages/MaintenanceHistory";
import Schedule from "./pages/Schedule";
import Tasks from "./pages/Tasks";
import TechnicianManagement from "./pages/TechnicianManagement";
import ReportsAnalytics from "./pages/ReportsAnalytics";
import AlertsNotifications from "./pages/AlertsNotifications";
import UploadPage from "./pages/UploadPage";
import Profile from "./pages/Profile";
import AdminPanel from "./pages/AdminPanel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Root matches Login panel */}
        <Route path="/" element={<Login />} />
        
        {/* URL paths matched directly to your components' navigation strings */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/aircraft" element={<FleetDashboard />} />
        <Route path="/fleet-management" element={<FleetManagement />} />
        <Route path="/inventory" element={<InventoryManagement />} />
        <Route path="/history" element={<MaintenanceHistory />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/technicians" element={<TechnicianManagement />} />
        <Route path="/reports" element={<ReportsAnalytics />} />
        <Route path="/alerts" element={<AlertsNotifications />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
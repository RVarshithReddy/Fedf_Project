// src/pages/Login.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Login.css";

function Login() {
  const [showMFA, setShowMFA] = useState(false);
  const navigate = useNavigate();

  const handleVerifyComplete = (e) => {
    e.preventDefault();
    // Programmatically push the user onto the core ecosystem dashboard
    navigate("/dashboard");
  };

  // Explicit route mapper ensuring seamless alignment with App.jsx endpoints
  const getRoutePath = (item) => {
    switch (item) {
      case "Support":   return "/support";
      case "Emergency": return "/emergency";
      default:          return "/login";
    }
  };

  return (
    <div className="login-page">
      {/* Background */}
      <div className="background-layer">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1gwWHM881lz-nvfMZ0u_e_aRzPYLiRzj8WgUQ3IArta4WXU-hKcDjKByfl1WxhFsduZmGARcI3CyzA78v8gJUbvjW7FS9sQ4zS0ASVp4fIP_fjG32SpyvsAXzO32nArhXxnYJeFPZSM5PkG0SYeQmiY0NaTgkbhQYXSYGTlcImOe2hHl0j2planWjAt_niepubwBQrpiw9jyDM7JFGdp2RJ3E4xN5k1D0-Geo4EkJ6eNG-dN0DjnLIkAll9c3AjvBcOtQNz1hOEI"
          alt="Aircraft Hangar"
        />
        <div className="overlay"></div>
      </div>

      {/* Main Card */}
      <main className="login-container">
        {/* Left Section */}
        <div className="left-panel">
          <div>
            <h1>AeroOps Control</h1>
            <p>
              Unified Fleet Command & Maintenance Intelligence System.
            </p>
          </div>

          <div className="status-box">
            <h3>SYSTEM STATUS: SECURE</h3>
            <p>
              Authenticated sessions are monitored 24/7. Unauthorized access is
              strictly prohibited.
            </p>

            <div className="system-info">
              <div>
                <span>NODE</span>
                <p>US-EAST-01</p>
              </div>

              <div>
                <span>VERSION</span>
                <p>V 4.2.1</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="right-panel">
          <div className="form-container">
            <h2>Personnel Login</h2>
            <p>Enter your credentials to access fleet command.</p>

            {!showMFA ? (
              <div className="form-section">
                <div className="input-group">
                  <label>ENGINEER ID / EMAIL</label>
                  <input type="text" placeholder="AE-7700-001" />
                </div>

                <div className="input-group">
                  <label>ACCESS KEY</label>
                  <input type="password" placeholder="••••••••" />
                </div>

                <button
                  className="primary-btn"
                  onClick={() => setShowMFA(true)}
                >
                  Authorize Access
                </button>
              </div>
            ) : (
              <div className="mfa-section">
                <div className="mfa-box">
                  <h3>MFA REQUIRED</h3>
                  <p>
                    A temporary 6-digit code has been sent to your device.
                  </p>
                </div>

                <div className="mfa-inputs">
                  <input maxLength="1" />
                  <input maxLength="1" />
                  <input maxLength="1" />
                  <span>-</span>
                  <input maxLength="1" />
                  <input maxLength="1" />
                  <input maxLength="1" />
                </div>

                <button 
                  className="secondary-btn"
                  onClick={handleVerifyComplete}
                >
                  Complete Verification
                </button>

                <button
                  className="back-btn"
                  onClick={() => setShowMFA(false)}
                >
                  Back to credentials
                </button>
              </div>
            )}

            <div className="help-links">
              <span 
                className="link-style"
                onClick={() => navigate(getRoutePath("Support"))}
                style={{ cursor: "pointer" }}
              >
                Access Support
              </span>
              <span 
                className="emergency link-style"
                onClick={() => navigate(getRoutePath("Emergency"))}
                style={{ cursor: "pointer" }}
              >
                EMERGENCY LINE
              </span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer>
        © 2024 AeroOps Global Fleet Systems. All Rights Reserved.
      </footer>
    </div>
  );
}

export default Login;
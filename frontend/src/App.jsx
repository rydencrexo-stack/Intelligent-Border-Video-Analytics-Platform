import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Dashboard from "./pages/Dashboard";
import LiveMonitoring from "./pages/LiveMonitoring";
import IntrusionDetection from "./pages/IntrusionDetection";
import Alerts from "./pages/Alerts";
import ANPR from "./pages/ANPR";
import Tracking from "./pages/Tracking";
import Analytics from "./pages/Analytics";

import api from "./api/client";
import "./App.css";

function Layout() {
  const navigate = useNavigate();

  const [backendStatus, setBackendStatus] = useState("Checking...");

  useEffect(() => {
    api
      .get("/")
      .then((response) => {
        setBackendStatus(response.data.status);
      })
      .catch(() => {
        setBackendStatus("Offline");
      });
  }, []);

  const navigationItems = [
    {
      name: "Dashboard",
      path: "/",
    },
    {
      name: "Live Monitoring",
      path: "/live-monitoring",
    },
    {
      name: "Intrusion Detection",
      path: "/intrusion-detection",
    },
    {
      name: "Alerts",
      path: "/alerts",
    },
    {
      name: "ANPR",
      path: "/anpr",
    },
    {
      name: "Tracking",
      path: "/tracking",
    },
    {
      name: "Analytics",
      path: "/analytics",
    },
  ];

  const currentPath = window.location.pathname;

  return (
    <div className="app">

      {/* SIDEBAR */}
      <aside className="sidebar">

        <div className="logo">
          <div className="logo-icon">IB</div>

          <div>
            <h2>IBVAP</h2>
            <span>Border Intelligence</span>
          </div>
        </div>

        <nav>
          {navigationItems.map((item) => (
            <button
              key={item.path}
              className={`nav-item ${
                currentPath === item.path ? "active" : ""
              }`}
              onClick={() => navigate(item.path)}
            >
              {item.name}
            </button>
          ))}
        </nav>

        <div className="system-status">

          <span className="status-dot"></span>

          <div>
            <strong>System Online</strong>

            <small>
              Backend: {backendStatus}
            </small>
          </div>

        </div>

      </aside>

      {/* MAIN CONTENT */}

      <main className="main">

        <Routes>

          <Route
            path="/"
            element={<Dashboard />}
          />

          <Route
            path="/live-monitoring"
            element={<LiveMonitoring />}
          />

          <Route
            path="/intrusion-detection"
            element={<IntrusionDetection />}
          />

          <Route
            path="/alerts"
            element={<Alerts />}
          />

          <Route
            path="/anpr"
            element={<ANPR />}
          />

          <Route
            path="/tracking"
            element={<Tracking />}
          />

          <Route
            path="/analytics"
            element={<Analytics />}
          />

        </Routes>

      </main>

    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
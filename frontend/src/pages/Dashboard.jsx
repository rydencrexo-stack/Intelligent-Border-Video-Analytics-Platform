function Dashboard() {
  return (
    <div className="page">

      {/* Header */}
      <header className="topbar">
        <div>
          <h1>Border Surveillance Dashboard</h1>
          <p>Intelligent Border Video Analytics Platform</p>
        </div>

        <div className="header-status">
          <span className="status-dot"></span>
          LIVE
        </div>
      </header>

      {/* Statistics */}
      <section className="stats">

        <div className="stat-card">
          <span>Active Cameras</span>
          <strong>12</strong>
          <small>All systems operational</small>
        </div>

        <div className="stat-card">
          <span>People Detected</span>
          <strong>48</strong>
          <small>Current monitoring</small>
        </div>

        <div className="stat-card warning">
          <span>Active Alerts</span>
          <strong>03</strong>
          <small>Requires attention</small>
        </div>

        <div className="stat-card">
          <span>Vehicles Detected</span>
          <strong>27</strong>
          <small>Today's activity</small>
        </div>

      </section>

      {/* Main Monitoring Area */}
      <section className="content-grid">

        {/* Live Camera */}
        <div className="camera-panel">

          <div className="panel-header">
            <div>
              <h2>Live Border Monitoring</h2>
              <span>Camera 01 • Main Border Gate</span>
            </div>

            <span className="live-badge">● LIVE</span>
          </div>

          <div className="camera-screen">

            <div className="camera-overlay">
              <span>CAM-01</span>
              <span>00:00:00</span>
            </div>

            <div className="camera-message">
              <div className="camera-icon">◉</div>

              <h3>Live Video Feed</h3>

              <p>
                Camera stream will appear here
              </p>
            </div>

          </div>

        </div>

        {/* Recent Alerts */}
        <div className="alerts-panel">

          <div className="panel-header">
            <div>
              <h2>Recent Alerts</h2>
              <span>Latest security events</span>
            </div>
          </div>

          <div className="alert">

            <div className="alert-icon danger">
              !
            </div>

            <div>
              <strong>Intrusion Detected</strong>
              <p>Restricted Zone A</p>
              <small>2 minutes ago</small>
            </div>

          </div>

          <div className="alert">

            <div className="alert-icon warning">
              !
            </div>

            <div>
              <strong>Unknown Vehicle</strong>
              <p>Camera 03</p>
              <small>8 minutes ago</small>
            </div>

          </div>

          <div className="alert">

            <div className="alert-icon info">
              i
            </div>

            <div>
              <strong>Person Detected</strong>
              <p>Border Sector B</p>
              <small>14 minutes ago</small>
            </div>

          </div>

        </div>

      </section>

      {/* Analytics Modules */}
      <section className="modules">

        <h2>Analytics Modules</h2>

        <div className="module-grid">

          <div className="module-card">
            <span>◉</span>
            <h3>Intrusion Detection</h3>
            <p>Monitor restricted zones</p>
          </div>

          <div className="module-card">
            <span>▣</span>
            <h3>ANPR</h3>
            <p>Automatic number plate recognition</p>
          </div>

          <div className="module-card">
            <span>●</span>
            <h3>Face Detection</h3>
            <p>Detect faces in video streams</p>
          </div>

          <div className="module-card">
            <span>↗</span>
            <h3>Object Tracking</h3>
            <p>Track people and vehicles</p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Dashboard;
function IntrusionDetection() {
  return (
    <div className="page">

      <header className="topbar">
        <div>
          <h1>Intrusion Detection</h1>
          <p>Monitor restricted zones and suspicious activity</p>
        </div>

        <div className="header-status">
          <span className="status-dot"></span>
          ACTIVE
        </div>
      </header>

      <section className="stats">

        <div className="stat-card">
          <span>Monitored Zones</span>
          <strong>08</strong>
          <small>All zones active</small>
        </div>

        <div className="stat-card">
          <span>People Detected</span>
          <strong>48</strong>
          <small>Current monitoring</small>
        </div>

        <div className="stat-card warning">
          <span>Intrusions Today</span>
          <strong>03</strong>
          <small>Requires attention</small>
        </div>

        <div className="stat-card">
          <span>Zones Secure</span>
          <strong>05</strong>
          <small>No active threats</small>
        </div>

      </section>

      <section className="content-grid">

        <div className="camera-panel">

          <div className="panel-header">
            <div>
              <h2>Border Zone Monitoring</h2>
              <span>Restricted areas and perimeter activity</span>
            </div>

            <span className="live-badge">● MONITORING</span>
          </div>

          <div className="camera-screen">

            <div className="camera-overlay">
              <span>ZONE-A</span>
              <span>MONITORING</span>
            </div>

            <div className="camera-message">
              <div className="camera-icon">◉</div>
              <h3>Intrusion Detection View</h3>
              <p>Restricted-zone activity will appear here</p>
            </div>

          </div>

        </div>

        <div className="alerts-panel">

          <div className="panel-header">
            <div>
              <h2>Detection Events</h2>
              <span>Latest intrusion events</span>
            </div>
          </div>

          <div className="alert">
            <div className="alert-icon danger">!</div>

            <div>
              <strong>Intrusion Detected</strong>
              <p>Restricted Zone A</p>
              <small>2 minutes ago</small>
            </div>
          </div>

          <div className="alert">
            <div className="alert-icon warning">!</div>

            <div>
              <strong>Person Near Boundary</strong>
              <p>Border Sector B</p>
              <small>7 minutes ago</small>
            </div>
          </div>

          <div className="alert">
            <div className="alert-icon info">i</div>

            <div>
              <strong>Zone Cleared</strong>
              <p>Restricted Zone C</p>
              <small>15 minutes ago</small>
            </div>
          </div>

        </div>

      </section>

      <section className="modules">

        <h2>Restricted Zones</h2>

        <div className="module-grid">

          <div className="module-card">
            <span>🛡️</span>
            <h3>Zone A</h3>
            <p>Restricted Border Area</p>
            <small>⚠ Activity detected</small>
          </div>

          <div className="module-card">
            <span>🛡️</span>
            <h3>Zone B</h3>
            <p>Perimeter Sector</p>
            <small>● Secure</small>
          </div>

          <div className="module-card">
            <span>🛡️</span>
            <h3>Zone C</h3>
            <p>Vehicle Boundary</p>
            <small>● Secure</small>
          </div>

          <div className="module-card">
            <span>🛡️</span>
            <h3>Zone D</h3>
            <p>High Security Area</p>
            <small>● Secure</small>
          </div>

        </div>

      </section>

    </div>
  );
}

export default IntrusionDetection;
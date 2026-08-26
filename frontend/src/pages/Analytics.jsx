function Analytics() {
  return (
    <div className="page">

      <header className="topbar">
        <div>
          <h1>Border Analytics</h1>
          <p>Surveillance activity and security statistics</p>
        </div>

        <div className="header-status">
          <span className="status-dot"></span>
          ANALYTICS ACTIVE
        </div>
      </header>

      <section className="stats">

        <div className="stat-card">
          <span>Total Detections</span>
          <strong>1,284</strong>
          <small>Today's detections</small>
        </div>

        <div className="stat-card">
          <span>People Detected</span>
          <strong>736</strong>
          <small>Across all cameras</small>
        </div>

        <div className="stat-card">
          <span>Vehicles Detected</span>
          <strong>421</strong>
          <small>Across all checkpoints</small>
        </div>

        <div className="stat-card warning">
          <span>Security Events</span>
          <strong>127</strong>
          <small>Requires analysis</small>
        </div>

      </section>

      <section className="content-grid">

        <div className="camera-panel">

          <div className="panel-header">
            <div>
              <h2>Detection Activity</h2>
              <span>Current surveillance activity</span>
            </div>
          </div>

          <div className="camera-screen">

            <div className="camera-message">
              <div className="camera-icon">▥</div>
              <h3>Analytics Visualization</h3>
              <p>Detection charts will appear here</p>
            </div>

          </div>

        </div>

        <div className="alerts-panel">

          <div className="panel-header">
            <div>
              <h2>Event Summary</h2>
              <span>Today's security activity</span>
            </div>
          </div>

          <div className="alert">
            <div className="alert-icon danger">!</div>
            <div>
              <strong>Intrusions</strong>
              <p>23 events detected</p>
              <small>+8% from previous period</small>
            </div>
          </div>

          <div className="alert">
            <div className="alert-icon info">●</div>
            <div>
              <strong>Person Detection</strong>
              <p>736 detections</p>
              <small>Across monitored zones</small>
            </div>
          </div>

          <div className="alert">
            <div className="alert-icon warning">!</div>
            <div>
              <strong>Vehicle Events</strong>
              <p>421 detections</p>
              <small>Across checkpoints</small>
            </div>
          </div>

        </div>

      </section>

      <section className="modules">

        <h2>Analytics Modules</h2>

        <div className="module-grid">

          <div className="module-card">
            <span>📊</span>
            <h3>Detection Statistics</h3>
            <p>Analyze people, vehicles and objects detected.</p>
          </div>

          <div className="module-card">
            <span>🚨</span>
            <h3>Security Events</h3>
            <p>Analyze intrusion and security event patterns.</p>
          </div>

          <div className="module-card">
            <span>📹</span>
            <h3>Camera Performance</h3>
            <p>Monitor camera activity and availability.</p>
          </div>

          <div className="module-card">
            <span>📈</span>
            <h3>Activity Trends</h3>
            <p>View surveillance activity over time.</p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Analytics;
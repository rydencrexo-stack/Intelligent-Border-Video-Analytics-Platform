function LiveMonitoring() {
  return (
    <div className="page">

      <header className="topbar">
        <div>
          <h1>Live Border Monitoring</h1>
          <p>Real-time surveillance camera monitoring</p>
        </div>

        <div className="header-status">
          <span className="status-dot"></span>
          LIVE
        </div>
      </header>

      <section className="stats">
        <div className="stat-card">
          <span>Active Cameras</span>
          <strong>12</strong>
          <small>All systems operational</small>
        </div>

        <div className="stat-card">
          <span>Online Cameras</span>
          <strong>11</strong>
          <small>Connected</small>
        </div>

        <div className="stat-card warning">
          <span>Offline Cameras</span>
          <strong>01</strong>
          <small>Requires attention</small>
        </div>

        <div className="stat-card">
          <span>Live Streams</span>
          <strong>11</strong>
          <small>Currently streaming</small>
        </div>
      </section>

      <section className="modules">

        <h2>Border Cameras</h2>

        <div className="module-grid">

          <div className="module-card">
            <span>📹</span>
            <h3>Camera 01</h3>
            <p>Main Border Gate</p>
            <small>● LIVE</small>
          </div>

          <div className="module-card">
            <span>📹</span>
            <h3>Camera 02</h3>
            <p>Border Sector A</p>
            <small>● LIVE</small>
          </div>

          <div className="module-card">
            <span>📹</span>
            <h3>Camera 03</h3>
            <p>Vehicle Checkpoint</p>
            <small>● LIVE</small>
          </div>

          <div className="module-card">
            <span>📹</span>
            <h3>Camera 04</h3>
            <p>Border Sector B</p>
            <small>● LIVE</small>
          </div>

        </div>

      </section>

      <section className="content-grid">

        <div className="camera-panel">

          <div className="panel-header">
            <div>
              <h2>Camera 01</h2>
              <span>Main Border Gate</span>
            </div>

            <span className="live-badge">● LIVE</span>
          </div>

          <div className="camera-screen">

            <div className="camera-overlay">
              <span>CAM-01</span>
              <span>LIVE</span>
            </div>

            <div className="camera-message">
              <div className="camera-icon">◉</div>
              <h3>Live Video Feed</h3>
              <p>Camera stream will appear here</p>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default LiveMonitoring;
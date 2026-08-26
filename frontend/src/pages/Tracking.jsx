function Tracking() {
  return (
    <div className="page">

      <header className="topbar">
        <div>
          <h1>Object Tracking</h1>
          <p>Track people and vehicles across monitored areas</p>
        </div>

        <div className="header-status">
          <span className="status-dot"></span>
          TRACKING ACTIVE
        </div>
      </header>

      <section className="stats">

        <div className="stat-card">
          <span>Active Tracks</span>
          <strong>16</strong>
          <small>Currently tracked</small>
        </div>

        <div className="stat-card">
          <span>People Tracked</span>
          <strong>11</strong>
          <small>Active person IDs</small>
        </div>

        <div className="stat-card">
          <span>Vehicles Tracked</span>
          <strong>05</strong>
          <small>Active vehicle IDs</small>
        </div>

        <div className="stat-card">
          <span>Tracking Cameras</span>
          <strong>08</strong>
          <small>Currently monitoring</small>
        </div>

      </section>

      <section className="content-grid">

        <div className="camera-panel">

          <div className="panel-header">
            <div>
              <h2>Tracking View</h2>
              <span>Camera 01 • Main Border Gate</span>
            </div>

            <span className="live-badge">● TRACKING</span>
          </div>

          <div className="camera-screen">

            <div className="camera-overlay">
              <span>CAM-01</span>
              <span>TRACKING</span>
            </div>

            <div className="camera-message">
              <div className="camera-icon">↗</div>
              <h3>Object Tracking Feed</h3>
              <p>Tracked objects will appear here</p>
            </div>

          </div>

        </div>

        <div className="alerts-panel">

          <div className="panel-header">
            <div>
              <h2>Active Tracks</h2>
              <span>Currently tracked objects</span>
            </div>
          </div>

          <div className="alert">
            <div className="alert-icon info">01</div>

            <div>
              <strong>Person #01</strong>
              <p>Camera 01 • Border Gate</p>
              <small>Confidence: 94%</small>
            </div>
          </div>

          <div className="alert">
            <div className="alert-icon info">02</div>

            <div>
              <strong>Person #02</strong>
              <p>Camera 02 • Sector A</p>
              <small>Confidence: 91%</small>
            </div>
          </div>

          <div className="alert">
            <div className="alert-icon warning">03</div>

            <div>
              <strong>Vehicle #03</strong>
              <p>Camera 03 • Checkpoint</p>
              <small>Confidence: 88%</small>
            </div>
          </div>

        </div>

      </section>

      <section className="modules">

        <h2>Tracking Categories</h2>

        <div className="module-grid">

          <div className="module-card">
            <span>👤</span>
            <h3>Person Tracking</h3>
            <p>Maintain temporary IDs for detected people</p>
          </div>

          <div className="module-card">
            <span>🚗</span>
            <h3>Vehicle Tracking</h3>
            <p>Track vehicles across video frames</p>
          </div>

          <div className="module-card">
            <span>🎯</span>
            <h3>Object IDs</h3>
            <p>Unique temporary tracking identifiers</p>
          </div>

          <div className="module-card">
            <span>📍</span>
            <h3>Movement History</h3>
            <p>Track object movement through monitored zones</p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Tracking;
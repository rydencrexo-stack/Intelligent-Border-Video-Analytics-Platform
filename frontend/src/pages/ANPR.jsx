function ANPR() {
  return (
    <div className="page">

      <header className="topbar">
        <div>
          <h1>Automatic Number Plate Recognition</h1>
          <p>Vehicle and number plate monitoring</p>
        </div>

        <div className="header-status">
          <span className="status-dot"></span>
          ANPR ACTIVE
        </div>
      </header>

      <section className="stats">

        <div className="stat-card">
          <span>Vehicles Detected</span>
          <strong>27</strong>
          <small>Today's activity</small>
        </div>

        <div className="stat-card">
          <span>Plates Detected</span>
          <strong>21</strong>
          <small>Successfully processed</small>
        </div>

        <div className="stat-card">
          <span>OCR Accuracy</span>
          <strong>91%</strong>
          <small>Current estimate</small>
        </div>

        <div className="stat-card warning">
          <span>Unknown Plates</span>
          <strong>04</strong>
          <small>Requires review</small>
        </div>

      </section>

      <section className="content-grid">

        <div className="camera-panel">

          <div className="panel-header">
            <div>
              <h2>ANPR Camera Feed</h2>
              <span>Vehicle Checkpoint • Camera 03</span>
            </div>

            <span className="live-badge">● LIVE</span>
          </div>

          <div className="camera-screen">

            <div className="camera-overlay">
              <span>CAM-03</span>
              <span>ANPR</span>
            </div>

            <div className="camera-message">
              <div className="camera-icon">▣</div>
              <h3>Vehicle Video Feed</h3>
              <p>Detected number plates will appear here</p>
            </div>

          </div>

        </div>

        <div className="alerts-panel">

          <div className="panel-header">
            <div>
              <h2>Recent Plates</h2>
              <span>Latest OCR results</span>
            </div>
          </div>

          <div className="alert">
            <div className="alert-icon info">✓</div>

            <div>
              <strong>MH12AB1234</strong>
              <p>Car • Camera 03</p>
              <small>91% confidence • 2 min ago</small>
            </div>
          </div>

          <div className="alert">
            <div className="alert-icon info">✓</div>

            <div>
              <strong>MH14CD5678</strong>
              <p>Motorcycle • Camera 03</p>
              <small>88% confidence • 6 min ago</small>
            </div>
          </div>

          <div className="alert">
            <div className="alert-icon warning">?</div>

            <div>
              <strong>MH--8?21</strong>
              <p>Unknown vehicle • Camera 03</p>
              <small>54% confidence • 11 min ago</small>
            </div>
          </div>

        </div>

      </section>

      <section className="modules">

        <h2>Vehicle Categories</h2>

        <div className="module-grid">

          <div className="module-card">
            <span>🚗</span>
            <h3>Cars</h3>
            <p>18 vehicles detected</p>
          </div>

          <div className="module-card">
            <span>🏍️</span>
            <h3>Motorcycles</h3>
            <p>06 vehicles detected</p>
          </div>

          <div className="module-card">
            <span>🚚</span>
            <h3>Trucks</h3>
            <p>02 vehicles detected</p>
          </div>

          <div className="module-card">
            <span>🚌</span>
            <h3>Buses</h3>
            <p>01 vehicle detected</p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default ANPR;
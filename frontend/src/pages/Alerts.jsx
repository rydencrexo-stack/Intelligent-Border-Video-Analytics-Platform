function Alerts() {
  return (
    <div className="page">

      <header className="topbar">
        <div>
          <h1>Security Alerts</h1>
          <p>Monitor and manage border security events</p>
        </div>

        <div className="header-status">
          <span className="status-dot"></span>
          ALERT SYSTEM ACTIVE
        </div>
      </header>

      {/* Statistics */}
      <section className="stats">

        <div className="stat-card warning">
          <span>Active Alerts</span>
          <strong>03</strong>
          <small>Requires attention</small>
        </div>

        <div className="stat-card">
          <span>Today's Alerts</span>
          <strong>17</strong>
          <small>Total security events</small>
        </div>

        <div className="stat-card">
          <span>Critical Alerts</span>
          <strong>02</strong>
          <small>Immediate attention</small>
        </div>

        <div className="stat-card">
          <span>Resolved</span>
          <strong>14</strong>
          <small>Successfully handled</small>
        </div>

      </section>

      {/* Alert List */}
      <section className="alerts-panel">

        <div className="panel-header">
          <div>
            <h2>Recent Security Alerts</h2>
            <span>Latest events detected by the surveillance system</span>
          </div>
        </div>

        <div className="alert">
          <div className="alert-icon danger">!</div>

          <div>
            <strong>Intrusion Detected</strong>
            <p>Restricted Zone A • Camera 01</p>
            <small>2 minutes ago</small>
          </div>
        </div>

        <div className="alert">
          <div className="alert-icon warning">!</div>

          <div>
            <strong>Unknown Vehicle Detected</strong>
            <p>Vehicle Checkpoint • Camera 03</p>
            <small>8 minutes ago</small>
          </div>
        </div>

        <div className="alert">
          <div className="alert-icon info">i</div>

          <div>
            <strong>Person Detected</strong>
            <p>Border Sector B • Camera 04</p>
            <small>14 minutes ago</small>
          </div>
        </div>

        <div className="alert">
          <div className="alert-icon warning">!</div>

          <div>
            <strong>Restricted Zone Entry</strong>
            <p>Border Sector C • Camera 06</p>
            <small>22 minutes ago</small>
          </div>
        </div>

        <div className="alert">
          <div className="alert-icon info">i</div>

          <div>
            <strong>Camera Activity Detected</strong>
            <p>Main Border Gate • Camera 02</p>
            <small>31 minutes ago</small>
          </div>
        </div>

      </section>

      {/* Alert Categories */}
      <section className="modules">

        <h2>Alert Categories</h2>

        <div className="module-grid">

          <div className="module-card">
            <span>🚨</span>
            <h3>Intrusion</h3>
            <p>Unauthorized entry into restricted zones</p>
          </div>

          <div className="module-card">
            <span>🚗</span>
            <h3>Vehicle</h3>
            <p>Unknown or suspicious vehicle activity</p>
          </div>

          <div className="module-card">
            <span>👤</span>
            <h3>Person Detection</h3>
            <p>People detected near monitored boundaries</p>
          </div>

          <div className="module-card">
            <span>📹</span>
            <h3>Camera Events</h3>
            <p>Camera connection and activity events</p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Alerts;
import { useState } from "react";

function LiveMonitoring() {
  const cameras = [
    {
      id: "CAM-01",
      name: "Camera 01",
      location: "Main Border Gate",
    },
    {
      id: "CAM-02",
      name: "Camera 02",
      location: "Border Sector A",
    },
    {
      id: "CAM-03",
      name: "Camera 03",
      location: "Vehicle Checkpoint",
    },
    {
      id: "CAM-04",
      name: "Camera 04",
      location: "Border Sector B",
    },
  ];

  const [selectedCamera, setSelectedCamera] = useState(cameras[0]);

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

        <div className="live-camera-grid">

          {cameras.map((camera) => (
            <div
              key={camera.id}
              className={`live-camera-card ${
                selectedCamera.id === camera.id ? "active" : ""
              }`}
              onClick={() => setSelectedCamera(camera)}
            >
              <div className="live-camera-icon">📹</div>

              <h3>{camera.name}</h3>

              <p>{camera.location}</p>

              <small>● LIVE</small>
            </div>
          ))}

        </div>

      </section>

      <section className="live-preview">

        <div className="camera-panel">

          <div className="panel-header">

            <div>
              <h2>{selectedCamera.name}</h2>
              <span>{selectedCamera.location}</span>
            </div>

            <span className="live-badge">
              ● LIVE
            </span>

          </div>

          <div className="camera-screen">

            <div className="camera-overlay">
              <span>{selectedCamera.id}</span>
              <span>LIVE</span>
            </div>

            <div className="camera-message">

              <div className="camera-icon">
                ◉
              </div>

              <h3>
                Live Video Feed
              </h3>

              <p>
                {selectedCamera.name} stream will appear here
              </p>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default LiveMonitoring;
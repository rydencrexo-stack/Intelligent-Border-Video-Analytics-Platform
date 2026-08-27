import { useState } from "react";

function LiveMonitoring() {
  const cameras = [
    {
      id: "CAM-01",
      name: "Camera 01",
      location: "Main Border Gate",
      stream: "http://127.0.0.1:8000/api/video/demo",
    },
    {
      id: "CAM-02",
      name: "Camera 02",
      location: "Border Sector A",
      stream: "http://127.0.0.1:8000/api/video/demo",
    },
    {
      id: "CAM-03",
      name: "Camera 03",
      location: "Vehicle Checkpoint",
      stream: "http://127.0.0.1:8000/api/video/demo",
    },
    {
      id: "CAM-04",
      name: "Camera 04",
      location: "Border Sector B",
      stream: "http://127.0.0.1:8000/api/video/demo",
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
          <small>Configured cameras</small>
        </div>

        <div className="stat-card">
          <span>Demo Stream</span>
          <strong>01</strong>
          <small>Connected</small>
        </div>

        <div className="stat-card warning">
          <span>Offline Cameras</span>
          <strong>11</strong>
          <small>Not connected yet</small>
        </div>

        <div className="stat-card">
          <span>Video Source</span>
          <strong>MP4</strong>
          <small>Demo Mode</small>
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

              <small>● DEMO</small>
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
              ● DEMO
            </span>

          </div>

          <div className="camera-screen">

            <div className="camera-overlay">
              <span>{selectedCamera.id}</span>
              <span>DEMO MODE</span>
            </div>

            <img
              src={selectedCamera.stream}
              alt={`${selectedCamera.name} surveillance stream`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                display: "block",
              }}
            />

          </div>

        </div>

      </section>

    </div>
  );
}

export default LiveMonitoring;
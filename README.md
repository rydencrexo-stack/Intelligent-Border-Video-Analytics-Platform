# 🛡️ Intelligent Border Video Analytics Platform (IBVAP)

> An AI-powered intelligent border surveillance and video analytics platform for real-time monitoring, threat detection, vehicle analysis, object tracking, and security alerts.

---
https://prod.liveshare.vsengsaas.visualstudio.com/join?DD5C8EF78F51C5A661FE434CE58D1AB17C46
---

## 📌 Project Overview

The **Intelligent Border Video Analytics Platform (IBVAP)** is a smart surveillance platform designed to assist border security personnel through automated video analysis and real-time situational awareness.

The platform combines computer vision, video analytics, object detection, tracking, ANPR, intrusion detection, and an intelligent alert system into a centralized dashboard.

---

## 🎯 Objectives

- 📹 Real-time border surveillance
- 🚨 Automated intrusion detection
- 🚗 Automatic Number Plate Recognition (ANPR)
- 👤 Person and face detection
- 🎯 People and vehicle tracking
- 🔔 Intelligent security alerts
- 📊 Real-time surveillance analytics
- 📷 Multi-camera monitoring
- 🧠 AI-assisted threat detection

---

## ✨ Key Features

### 📹 Live Monitoring
Monitor multiple border surveillance cameras through a centralized dashboard.

### 🚨 Intrusion Detection
Detect activity inside restricted and protected border zones.

### 🚗 ANPR
Detect and recognize vehicle number plates from surveillance footage.

### 👤 Face Detection
Detect human faces within supported surveillance video streams.

### 🎯 Object Tracking
Track people and vehicles across video frames.

### 🔔 Alert Management
Generate and manage alerts for suspicious or potentially dangerous activities.

### 📊 Analytics
Provide surveillance statistics, detection information, and security-event analysis.

---

## 🏗️ System Architecture

```text
                    ┌──────────────────────────┐
                    │      Surveillance        │
                    │        Cameras            │
                    └────────────┬─────────────┘
                                 │
                                 ▼
                    ┌──────────────────────────┐
                    │     Video Processing     │
                    │       & Detection        │
                    └────────────┬─────────────┘
                                 │
              ┌──────────────────┼──────────────────┐
              │                  │                  │
              ▼                  ▼                  ▼
        ┌──────────┐       ┌──────────┐       ┌──────────┐
        │Intrusion │       │   ANPR   │       │ Tracking │
        │Detection │       │   OCR    │       │  Engine  │
        └────┬─────┘       └────┬─────┘       └────┬─────┘
             │                  │                  │
             └──────────────────┼──────────────────┘
                                ▼
                    ┌──────────────────────────┐
                    │     Alert & Analytics    │
                    │         Engine           │
                    └────────────┬─────────────┘
                                 │
                                 ▼
                    ┌──────────────────────────┐
                    │       IBVAP Dashboard     │
                    │      React + Vite         │
                    └──────────────────────────┘

```

🛠️ Technology Stack
- Frontend
- ⚛️ React
- ⚡ Vite
- 🟨 JavaScript
- 🎨 CSS
- 🔀 React Router
- Backend
- 🐍 Python
- ⚡ FastAPI
- 🚀 Uvicorn
- Computer Vision & AI
- OpenCV
- Object Detection
- Object Tracking
- OCR / ANPR
- Face Detection
- Video Analytics
- Database
- SQL-based database architecture
- SQLAlchemy

---

# 📁 Project Structure

```text

Intelligent-Border-Video-Analytics-Platform/
│
├── backend/
│   ├── alerts/
│   │   └── alert_engine.py
│   │
│   ├── analytics/
│   │   └── analytics_service.py
│   │
│   ├── anpr/
│   │   ├── plate_detector.py
│   │   ├── ocr.py
│   │   └── validator.py
│   │
│   ├── api/
│   │   ├── dependencies.py
│   │   └── routes.py
│   │
│   ├── attributes/
│   │   ├── age.py
│   │   ├── clothing.py
│   │   └── height.py
│   │
│   ├── behaviour/
│   │   ├── loitering.py
│   │   └── movement.py
│   │
│   ├── database/
│   │   ├── db.py
│   │   ├── models.py
│   │   └── schema.py
│   │
│   ├── detection/
│   │   └── detector.py
│   │
│   ├── face/
│   │   └── face_detector.py
│   │
│   ├── intrusion/
│   │   └── zone.py
│   │
│   ├── services/
│   │   └── camera_service.py
│   │
│   ├── tracking/
│   │   └── tracker.py
│   │
│   └── main.py
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   │   └── client.js
│   │   │
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── LiveMonitoring.jsx
│   │   │   ├── IntrusionDetection.jsx
│   │   │   ├── Alerts.jsx
│   │   │   ├── ANPR.jsx
│   │   │   ├── Tracking.jsx
│   │   │   └── Analytics.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md

```
----

# 🖥️ Dashboard Modules
- Module	Purpose
- 🏠 Dashboard	Overall border surveillance overview
- 📹 Live Monitoring	Monitor surveillance cameras
- 🚨 Intrusion Detection	Detect restricted-zone activity
- 🔔 Alerts	Manage security events
- 🚗 ANPR	Detect and process number plates
- 🎯 Tracking	Track people and vehicles
- 📊 Analytics	Analyze surveillance data
- 🔮 Future Enhancements
- 🎥 Real-time CCTV/RTSP stream integration
- 🤖 Advanced AI object detection
- 🧠 Intelligent threat classification
- 🚗 Real-time ANPR pipeline
- 🎯 Multi-camera object tracking
- 🚨 Real-time alert notifications
- 🗄️ Complete database integration
- 📊 Advanced analytics and reporting
- 🔐 Role-based authentication
- ☁️ Cloud deployment
- 📱 Mobile monitoring interface
- 🗺️ Geographic border-zone visualization
- 🏆 Smart India Hackathon

This project is being developed as a Smart India Hackathon (SIH) project focused on intelligent surveillance, computer vision, video analytics, and security automation.

# 👨‍💻 Author

Atharva A. Deshmukh
This platform is intended for authorized security, research, educational, and controlled surveillance environments.

Deployment should comply with applicable privacy, surveillance, data-protection, and cybersecurity regulations.

# ⭐ Support

If you find this project interesting, consider giving the repository a ⭐ and following the development journey.

Built for Smart India Hackathon 🇮🇳

Author: Atharva A. Deshmukh

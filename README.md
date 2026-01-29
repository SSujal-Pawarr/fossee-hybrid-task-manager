# Hybrid Task Manager  
### Web & Desktop Hybrid Application using Django and React

## 📌 Project Overview
This project is a simple **Hybrid Task Manager** application developed as part of the **FOSSEE Semester Long Internship 2026 screening task**.

The application runs as:
- 🌐 A **Web Application** in the browser
- 🖥️ A **Desktop Application** using Electron

Both interfaces share the **same React frontend** and communicate with a **Django REST backend**.

---

## 🛠️ Tech Stack
- **Backend:** Django, Django REST Framework
- **Frontend:** React.js
- **Desktop:** Electron
- **Database:** SQLite

---

## ⚙️ Features
- Add tasks
- View all tasks
- Persistent storage using Django backend
- REST API based communication
- Same application runs on web and desktop

---

## 🧱 Project Structure

```text
fossee-hybrid-task-manager/
│
├── backend/                     # Django backend
│   ├── server/                  # Django project settings
│   ├── tasks/                   # Tasks app (models, views, serializers)
│   ├── db.sqlite3               # SQLite database
│   └── manage.py
│
├── frontend/                    # React frontend (Web app)
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── package-lock.json
│
├── desktop/                     # Electron desktop wrapper
│   ├── index.js                 # Electron main process
│   ├── package.json
│   └── package-lock.json
│
├── screenshots/                 # Submission screenshots
│   ├── web.png
│   ├── desktop.png
│   └── api.png
│
└── README.md                    # Project documentation

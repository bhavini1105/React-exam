# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# 🏨 Hotel Management System - ReactJS Project

A simple and practical Hotel Management System built with **ReactJS**, **Redux Toolkit**, **React Router**, and **JSON Server** for demo backend operations. This project was created as part of a practical exam for learning and applying core concepts of front-end development.

---

## 🚀 Features

- 🛏️ Room listing with reservation
- 📝 Create, update, and delete reservations
- 🔐 Simple Sign-in authentication (`admin/admin123`)
- 🎯 Redux for global state management
- 🔄 JSON Server for backend-like API
- 🌟 Bootstrap UI for clean and responsive design
- 🔔 Toast notifications for actions (optional)

---

## 🧱 Tech Stack

- React JS
- React Router DOM
- Redux Toolkit
- Redux Thunk
- JSON Server
- Bootstrap
- React Toastify (optional for notifications)

---

1. **Clone the Repository**
git clone https://github.com/bhavini1105/React-exam.git
cd React-exam

2. **nstall Dependencies**
npm install
Start JSON Server

3. **Make sure you have json-server installed globally:**

npm install -g json-server

4. **Start the server:**
json-server --watch db.json --port 3001

5. **Start React App**
npm run dev

🔐 Authentication

Username: admin
Password: admin123

✅ Usage

Navigate to /rooms to view available rooms.
Go to /reserve to make a new reservation.
View and manage all reservations at /list.




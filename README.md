# Task Management Dashboard - Frontend Intern Task

A modern, responsive, and secure single-page React frontend application featuring a Login Page and a comprehensive Dashboard. This project was developed as part of the Frontend Intern assessment, closely following the provided UI/UX design and integrating with a REST API.

## 🚀 Live Demo
**View the live application here:** [https://mehedi-intern-dashboard.netlify.app/](https://mehedi-intern-dashboard.netlify.app/)

*Demo Credentials for Login:*
- **Email:** `user1@example.com`
- **Password:** `password123`

---

## ✨ Key Features

* **Secure Authentication:** Implemented login functionality with JWT token processing (`jwt-decode`) and protected/private routes to ensure the dashboard is only accessible to authenticated users.
* **Pixel-Perfect UI:** Highly accurate translation of the provided Dribbble design into code using Tailwind CSS v4.
* **Fully Responsive:** Seamless experience across desktop, tablet, and mobile devices featuring an off-canvas slide-in sidebar for smaller screens.
* **Advanced Data Fetching:** Utilized `@tanstack/react-query` and `axios` for optimized, caching-enabled API calls.
* **Dynamic Data Visualization:** Integrated `recharts` to render beautiful, interactive bar charts and half-doughnut progress charts based on real-time API data.
* **Form Handling & Toast Notifications:** Smooth login experience managed by `react-hook-form` and user feedback via `react-hot-toast`.
* **Graceful Error Handling:** Custom 404 Page Not Found and Netlify routing fallbacks included.

---

## 🛠️ Technology Stack

* **Core:** React 19, React DOM, Vite
* **Routing:** React Router v7
* **Styling:** Tailwind CSS v4
* **Data Fetching & State:** TanStack React Query v5, Axios
* **Charts:** Recharts v3.7
* **Authentication:** JWT Decode
* **Forms & Validation:** React Hook Form
* **UI Components/Icons:** Lucide React, React Hot Toast

---

## 💻 Getting Started (Local Setup)

To run this project locally on your machine, follow these steps:

**1. Clone the repository:**
```bash
git clone [https://github.com/your-username/octarnal-frontend-task-donezo.git](https://github.com/your-username/octarnal-frontend-task-donezo.git)
cd octarnal-frontend-task-donezo
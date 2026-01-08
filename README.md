🔐 AuthFlow

A frontend assignment project that demonstrates API integration, mocked authentication, protected routes, and robust error handling using React + Vite + Tailwind CSS (v4.1).

📌 Project Objective

To simulate a real-world frontend application that:

Handles authentication-like flows

Interacts with public APIs

Protects routes based on authentication

Manages loading and error states gracefully

This project follows the given BRD: API Integration & Authentication Flow (Mocked).

🛠 Tech Stack

Framework: React (Vite)

Styling: Tailwind CSS v4.1

Routing: React Router DOM

HTTP Client: Axios

State Management: React Context API

Storage: Browser localStorage

API: JSONPlaceholder (Public API)

📁 Project Structure
src/
│
├── components/
│   ├── Loader.jsx
│   ├── ErrorMessage.jsx
│   └── ProtectedRoute.jsx
│
├── pages/
│   ├── Login.jsx
│   └── Dashboard.jsx
│
├── services/
│   ├── api.js
│   └── authService.js
│
├── context/
│   └── AuthContext.jsx
│
├── hooks/
│   └── useAuth.js
│
├── utils/
│   ├── storage.js
│   └── constants.js
│
├── routes.jsx
├── App.jsx
├── main.jsx
└── index.css

✨ Features Implemented
🔐 Authentication (Mocked)

Login screen with username & password

Mock authentication logic

Token stored in localStorage

🛡 Route Protection

Dashboard is protected

Unauthenticated users are redirected to Login

📊 Dashboard

Fetches data from a public API

Displays list-based data (Users)

Responsive grid layout

🚪 Logout

Clears authentication token

Redirects user to Login

⚠️ Error & Loading Handling

Loader shown during API calls

Graceful error handling

Meaningful error messages

Retry option on API failure

🔄 Application Flow
Login → Token Stored → Dashboard (Protected)
     → Fetch API Data → Logout → Login

🔑 Login Credentials (Mock)
Username: admin
Password: admin

🚀 Getting Started
1️⃣ Clone the Repository
git clone <your-repo-url>
cd authflow

2️⃣ Install Dependencies
npm install

3️⃣ Run the Application
npm run dev


Open:
👉 http://localhost:5173

📦 Public API Used

JSONPlaceholder

Endpoint: /users

Used to display list-based dashboard data

📋 BRD Coverage Checklist
BRD Requirement	Status
Login with username & password	✅
Mocked authentication	✅
Token storage	✅
Protected dashboard	✅
API data fetching	✅
Route protection	✅
Logout	✅
Loader handling	✅
Error handling	✅
Retry option	✅
⭐ Bonus Features

Axios request interceptor

Centralized API handling

Responsive UI with Tailwind CSS v4.1

⏳ Optional Enhancements (Not Implemented)

Environment-based configuration (.env)

Token expiry handling

📄 License

This project is created for assignment and learning purposes.
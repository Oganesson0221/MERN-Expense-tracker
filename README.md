# MERN-Expense-tracker

---

# 💸 Expense Tracker Web App

## 🌟 Introduction

Welcome to the **Expense Tracker Web App**! This is a sleek, modern solution for tracking your expenses and managing your finances with ease. Built using the powerful **MERN stack**, along with **React Vite** for blazing-fast frontend performance and **Tailwind CSS** for elegant styling, this application is designed to provide a seamless user experience.

---

## 🚀 Features

- 📊 **Real-Time Expense Tracking**: Log your daily expenses and view them instantly.
- 🗂️ **Categorized Insights**: Organize expenses by categories like food, travel, shopping, and more.
- 📈 **Visual Analytics**: Get detailed insights with dynamic charts and graphs.
- 🕒 **History at a Glance**: View your expense history in a clean and intuitive interface.
- 💾 **Secure Data Storage**: Backend powered by MongoDB ensures your data is safe and accessible.
- 🎨 **Responsive UI**: Optimized for desktops and mobile devices with Tailwind CSS.

---

## 🛠️ Tech Stack

- **Frontend**: React (Vite) + Tailwind CSS
- **Backend**: Node.js + Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **State Management**: Redux Toolkit
- **Data Fetching**: Axios
- **Charts**: Chart.js

---

## 🖥️ Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites
1. Install [Node.js](https://nodejs.org/) (v16.x or higher recommended).
2. Install [npm](https://www.npmjs.com/) (comes with Node.js).
3. Install [MongoDB](https://www.mongodb.com/try/download/community).

---

### 🏗️ Backend Setup

1. **Navigate to the Backend Directory:**
   ```bash
   cd backend
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables:**
   Create a `.env` file in the `backend` directory:
   ```env
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.1yrcnpc.mongodb.net/<databaseName>
   JWT_SECRET=your_secret_key
   PORT=5000
   ```

4. **Run the Backend Server:**
   ```bash
   node app.js
   ```

The backend will start at `http://localhost:5000` (or the port you set in `.env`).

---

### 🎨 Frontend Setup

1. **Navigate to the Frontend Directory:**
   ```bash
   cd frontend
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Start the Development Server:**
   ```bash
   npm run dev
   ```

By default, the frontend will run at `http://localhost:5173`.

---

### 🌐 Access the Application

1. Open your browser and navigate to the frontend URL: `http://localhost:5173`.
2. Ensure the backend server is running (`http://localhost:5000`) for API requests.

---

## 📦 Building for Production

### Backend
No additional steps required—ensure `.env` is configured for your production environment.

### Frontend
1. Build the production-ready files:
   ```bash
   npm run build
   ```
2. Serve the static files or integrate them with your backend.

---

## 🛡️ Security

To keep sensitive information secure:
1. Add `.env` to `.gitignore`:
   ```
   .env
   ```
2. Avoid committing sensitive credentials to version control.

---

## 🛠️ Future Enhancements

- 💡 Budgeting tools to set and track savings goals.
- 🔔 Notifications for expense limits.
- 🌎 Multi-language support.
- 🖼️ Customizable themes for a personalized experience.

---


## 📞 Contact

If you have any questions or feedback, feel free to reach out:

- **Email**: [rishikamehta2004@gmail.com](mailto:rishikamehta2004@gmail.com)
- **GitHub**: [Rishika Mehta](https://github.com/Oganesson0221)

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

Happy tracking! 😊

--- 

# 🎓 EduTrack Pro - Student Management System

EduTrack Pro is a modern, full-stack Student Management System built with the **MVC (Model-View-Controller)** architecture. It features a stunning **Glassmorphism UI**, real-time search, and administrative analytics to make student data management effortless and beautiful.

![EduTrack Pro UI](https://img.shields.io/badge/UI-Glassmorphism-blueviolet)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-darkgreen)
![Express](https://img.shields.io/badge/Framework-Express-lightgrey)

---

## ✨ Features

### 🛠️ Core Functionality (CRUD)
- **Register Students**: Quickly add new students with names, emails, and courses.
- **Dynamic Directory**: View a full list of enrolled students.
- **Profiles & Updates**: Edit student information at any time.
- **Secure Deletion**: Remove records with a confirmation safety check.

### 📊 Advanced Tools
- **Stats Dashboard**: Real-time tracking of total students, active courses, and registrations made today.
- **Real-time Search**: Instant filtering by name, email, or course as you type—no page reloads.
- **CSV Export**: Download your entire student directory as a CSV file for backups or reporting.

### 🎨 Premium Design
- **Glassmorphism Aesthetic**: A sleek, dark-themed interface with frosted glass effects and vibrant accents.
- **Smart Avatars**: Automatically generated initials for every student profile.
- **Fully Responsive**: Optimized for desktops, tablets, and mobile devices.

---

## 🚀 Tech Stack

- **Frontend**: EJS (Templating), Vanilla CSS (Custom Design System), Font Awesome.
- **Backend**: Node.js, Express.js.
- **Database**: MongoDB with Mongoose.
- **Architecture**: Model-View-Controller (MVC).
- **Middleware**: `express-validator`, `method-override`, `dotenv`.

---

## 🛠️ Installation & Setup

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/Pritesh23-P/24BDA70006-5b-Pritesh-Kumar-Pandey.git
    cd 24BDA70006-5b-Pritesh-Kumar-Pandey
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Environment Variables**:
    Create a `.env` file in the root directory and add the following:
    ```env
    PORT=3000
    MONGO_URI=mongodb://127.0.0.1:27017/studentDB
    ```

4.  **Run the application**:
    ```bash
    # Development mode (with nodemon)
    npm run dev

    # Production mode
    npm start
    ```

5.  **Access the app**:
    Open [http://localhost:3000](http://localhost:3000) in your browser.


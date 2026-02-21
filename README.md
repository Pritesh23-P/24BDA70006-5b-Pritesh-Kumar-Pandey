# Student Management System (MVC)

A full-stack Student Management System built using **Node.js, Express, MongoDB, and EJS** following the **MVC (Model-View-Controller)** architecture.

## Features

- Add new students  
- View all students  
- Edit student details  
- Delete students  
- Server-side validation using express-validator  
- RESTful routing  
- Clean Bootstrap 5 UI  
- MongoDB Atlas cloud database  
- Deployed on Vercel  

---

## Project Architecture (MVC)

This project follows the MVC pattern to ensure separation of concerns:

```
student-management-system/
│
├── models/          → Database schema (Student model)
├── views/           → EJS templates (UI layer)
├── controllers/     → Business logic
├── routes/          → RESTful routes
├── middleware/      → Validation middleware
├── public/          → Static assets
├── api/             → Vercel serverless entry
├── app.js           → Main Express app
├── vercel.json      → Deployment configuration
├── package.json
└── .env             → Environment variables (not pushed)
```

---

## Tech Stack

- Node.js  
- Express.js  
- MongoDB Atlas  
- Mongoose  
- EJS  
- Bootstrap 5  
- express-validator  
- method-override  
- Vercel  

---

## RESTful Routes

| Method | Route | Description |
|--------|--------|-------------|
| GET | / | Get all students |
| GET | /add | Show add student form |
| POST | /add | Create student |
| GET | /edit/:id | Show edit form |
| PUT | /edit/:id | Update student |
| DELETE | /delete/:id | Delete student |

---

## Installation (Run Locally)

### Clone Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### Install Dependencies

```bash
npm install
```

### Create `.env` File

Create a `.env` file in the root folder:

```env
PORT=3000
MONGO_URI=your_mongodb_atlas_connection_string
```

⚠ Do NOT hardcode the database URI inside the source code.

### Run Application

```bash
npm run dev
```

Open in browser:

```
http://localhost:3000
```

---

## Deployment (Vercel)

This project is deployed using **Vercel Serverless Functions**.

Environment variable required in Vercel:

```
MONGO_URI = MongoDB Atlas connection string
```

Deployment configuration:

```json
{
  "version": 2,
  "builds": [
    { "src": "api/index.js", "use": "@vercel/node" }
  ],
  "routes": [
    { "src": "/(.*)", "dest": "api/index.js" }
  ]
}
```

---

## Environment Variables

Sensitive credentials such as database URIs are stored using environment variables.

This improves:
- Security
- Scalability
- Maintainability

Hardcoding credentials inside source code is avoided.

---

## Learning Outcomes

- Understanding MVC architecture  
- Implementing RESTful routing  
- Using middleware in Express  
- Server-side validation  
- Connecting Node.js with MongoDB Atlas  
- Deploying full-stack applications  
- Managing environment variables securely  

---

## Future Improvements

- Authentication system (Login/Register)
- Search & filtering
- Dashboard analytics
- Pagination
- Role-based access control
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const path = require('path');
require('dotenv').config();

const app = express();

/* -------------------- View Engine Setup -------------------- */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/* -------------------- Middleware -------------------- */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

/* -------------------- MongoDB Connection -------------------- */
let isConnected = false;

const connectDB = async () => {
    if (isConnected) return;

    try {
        const db = await mongoose.connect(process.env.MONGO_URI);
        isConnected = db.connections[0].readyState;
        console.log("MongoDB Connected Successfully");
    } catch (error) {
        console.error("MongoDB Connection Failed:", error);
        throw error;
    }
};

connectDB();

/* -------------------- Routes -------------------- */
app.use('/', require('./routes/studentRoutes'));

/* -------------------- 404 Handler -------------------- */
app.use((req, res) => {
    res.status(404).render('error', { error: "Page Not Found" });
});

/* -------------------- Global Error Handler -------------------- */
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('error', { error: err.message });
});

/* -------------------- Export for Vercel -------------------- */
module.exports = app;

/* -------------------- Local Server -------------------- */
if (process.env.NODE_ENV !== 'production') {
    const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}
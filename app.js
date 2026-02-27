const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
require('dotenv').config();

const app = express();
const path = require('path');
app.set('views', path.join(__dirname, 'views'));

/* -------------------- Middleware -------------------- */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.set('view engine', 'ejs');

/* -------------------- MongoDB Connection -------------------- */
const connectDB = async () => {
    try {
        if (mongoose.connection.readyState === 0) {
            await mongoose.connect(process.env.MONGO_URI);
            console.log("MongoDB Connected Successfully");
        }
    } catch (error) {
        console.error("MongoDB Connection Failed:", error.message);
        process.exit(1);
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

/* -------------------- Export App -------------------- */
module.exports = app;
if (process.env.NODE_ENV !== 'production') {
    const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}
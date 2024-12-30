const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db'); // Assuming you have a connectDB function
const authRoutes = require('./routes/authRoutes'); // Assuming you have auth routes
const taskRoutes = require('./routes/taskRoutes');

dotenv.config();
connectDB(); // Connect to the database

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes); // Path for auth 
app.use('/api/tasks', taskRoutes); // Path for tasks

const PORT = process.env.PORT; // Get the port from .env or default to 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); // Ensure the server is running
});

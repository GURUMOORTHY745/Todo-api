const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');

dotenv.config();
connectDB(); // connect to DB

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes); // path for auth 
app.use('/api/tasks', taskRoutes); //path for tasks

const PORT = process.env.PORT ; // get the port from .env 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); //ensure the server is run in which port
});
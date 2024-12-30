const mongoose = require('mongoose');
require('dotenv').config(); // Load .env

const connectDB = async () => {
    try {
        const uri = process.env.MONGODB_URI; // Ensure this is set correctly in the .env
        await mongoose.connect(uri, {
            serverSelectionTimeoutMS: 20000, // Increase timeout to 20 seconds
            socketTimeoutMS: 45000 // To Increase socket timeout
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error.message); // For error message of DB connection
        process.exit(1); // This is for Exit the process with failure
    }
};

module.exports = connectDB;
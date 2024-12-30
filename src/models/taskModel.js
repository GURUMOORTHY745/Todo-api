const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid'); // Import the uuid package

// Define the task schema
const taskSchema = new mongoose.Schema({
    taskId: { type: String, unique: true, required: true, default: uuidv4 }, // Generate a unique taskId
    title: { type: String, required: true },
    description: { type: String },
    dueDate: { type: Date },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

// Middleware to update updatedAt field before saving
taskSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

// Export the Task model
module.exports = mongoose.model('Task', taskSchema);

const mongoose = require('mongoose');
// structure of the DB to store
const taskSchema = new mongoose.Schema({
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
module.exports = mongoose.model('Task', taskSchema);
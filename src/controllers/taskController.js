const Task = require('../models/taskModel');

// To Add a Task
exports.addTask = async (req, res) => {
    const { title, description, dueDate } = req.body;
    try {
        const task = new Task({
            title,
            description,
            dueDate: new Date(dueDate) 
        });

        await task.save();
        res.status(201).json({ message: 'Task created', task });
    } catch (error) {
        res.status(400).json({ message: 'Error creating task', error });
    }
};

// To Get All Tasks with Pagination
exports.getAllTasks = async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    try {
        const tasks = await Task.find()
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();
        const count = await Task.countDocuments();
        res.status(200).json({
            tasks,
            totalPages: Math.ceil(count / limit),
            currentPage: page,
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching tasks', error });
    }
};

// To Get a Single Task by taskId
exports.getTaskById = async (req, res) => {
    const { taskId } = req.params; 
    try {
        const task = await Task.findById(taskId); 
        if (!task) return res.status(404).json({ message: 'Task not found' });
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching task', error });
    }
};

// To Update a Task by taskId
exports.updateTaskById = async (req, res) => {
    const { taskId } = req.params;
    const updates = req.body;
    try {
        const task = await Task.findByIdAndUpdate(taskId, updates, { new: true });
        if (!task) return res.status(404).json({ message: 'Task not found' });
        res.status(200).json({ message: 'Task updated', task });
    } catch (error) {
        res.status(400).json({ message: 'Error updating task', error });
    }
};

// To Delete a Task by taskId
exports.deleteTaskById = async (req, res) => {
    const { taskId } = req.params;
    try {
        const task = await Task.findByIdAndDelete(taskId);
        if (!task) return res.status(404).json({ message: 'Task not found' });
        res.status(200).json({ message: 'Task deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting task', error });
    }
};
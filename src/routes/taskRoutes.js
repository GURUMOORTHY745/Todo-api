const express = require('express');
const { addTask, getAllTasks, getTaskById, updateTaskById, deleteTaskById } = require('../controllers/taskController');
const auth = require('../middleware/auth'); // Assuming you have an auth middleware

const router = express.Router();

router.post('/', auth, addTask); // path for POST /api/tasks
router.get('/', auth, getAllTasks); // path for GET /api/tasks
router.get('/:taskId', auth, getTaskById); // path for GET /api/tasks/:taskId
router.put('/:taskId', auth, updateTaskById); // path for PUT /api/tasks/:taskId
router.delete('/:taskId', auth, deleteTaskById); // path for DELETE /api/tasks/:taskId

module.exports = router;

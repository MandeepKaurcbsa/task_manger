// new schema for task_manager.
const mongoose  = require('mongoose');
const bcrypt = require('bcrypt');
const taskSchema = new mongoose.Schema({
    taskName: {
        type: String,
        required: true,
        trim: true,
    },
    taskDescription: {
        type: String,
        required: true,
        trim: true
    },
    taskPriority: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;

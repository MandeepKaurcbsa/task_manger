// new schema for task_manager.
const mongoose  = require('mongoose');
const bcrypt = require('bcrypt');
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    priority: {
        type: String,
        enum: ['low','high','medium'],
        default:'low'
    },
    status:{
        type: String,
        enum:['completed','pending'],
        default: 'pending'
        
    }
}, {
    timestamps: true
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;

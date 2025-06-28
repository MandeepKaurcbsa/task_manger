const Task= require("../schema/taskSchema");

async function createTaskRepo(taskDetails) {
    const task = await Task.create(taskDetails)
    return task;
}

async function getAllTaskRepos() {
try {
    const task = await Task.find();
    return task
} catch (error) {
   console.log("Error fetching this task",error)
   throw error 
}
}

async function getByIdTaskRepos(taskId) {
try {
    const task = await Task.findById(taskId);
    return task
} catch (error) {
   console.log("Error fetching task id",error)
   throw error 
}
}

async function updateTaskByIdRepos(taskId, updatedData) {
try {
    const task = await Task.findByIdAndUpdate(taskId, updatedData, {
    new : true, runValidators: true                   //rv follows schema structure, and new returns updated task
});
    return task
} catch (error) {
   console.log("Error updating task id",error)
   throw error 
}
}

async function deleteTaskByIdRepo(taskId) {
try {
    const task = await Task.findByIdAndDelete(taskId)
    return task
} catch (error) {
   console.log("Error updating task id",error)
   throw error 
}
}

module.exports = {
    createTaskRepo,
    getAllTaskRepos,
    getByIdTaskRepos,
    updateTaskByIdRepos,
    deleteTaskByIdRepo
}
const Task= require("../schema/taskSchema");

async function findTask(parameters) {
    try {
        const res = await Task.findOne({ ...parameters })
        return res;
    } catch (error) {
        console.log(error)
    }
}

async function createTask(taskDetails) {
    try {
        const response = await Task.create(taskDetails)
        return response;
    } catch (error) {
         console.log("Error in Task Repository:", error);
    }
}

module.exports = {
    findTask,
    createTask
}
const { createTaskRepo, getAllTaskRepos, getByIdTaskRepos, updateTaskByIdRepos, deleteTaskByIdRepo } = require("../repository/taskRepository");
const Task = require("../schema/taskSchema");

async function createTaskService(taskDetails){
    try {
        const task = await createTaskRepo(taskDetails)
        return task;
    } catch (error) {
        console.log("Error creating the task",error)
        throw error;
    }
}

async function getAllTaskService(){
try {
    const task = await getAllTaskRepos()
    return task;
} catch (error) {
    console.log("Error Fetching All Tasks.",error)
    throw error;
}
}

async function getByIdTaskService(taskId){
try {
    const task = await getByIdTaskRepos(taskId)
    return task;
} catch (error) {
    console.log("Error Fetching Task Ids.",error)
    throw error;
}
}


async function updateTaskByIdService(taskId, updatedData){
try {
    const task = await updateTaskByIdRepos(taskId, updatedData)
    return task;
} catch (error) {
    console.log("Error updating Task.",error)
    throw error;
}
}

async function deleteTaskByIdSer(taskId){
try {
    const task = await deleteTaskByIdRepo(taskId)
    return task;
} catch (error) {
    console.log("Error deleting Task.",error)
    throw error;
}
}


module.exports={
    createTaskService,
    getAllTaskService,
    getByIdTaskService,
    updateTaskByIdService,
    deleteTaskByIdSer
}
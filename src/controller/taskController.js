const { createTaskService, getAllTaskService, getByIdTaskService, updateTaskByIdService, deleteTaskByIdSer } = require("../service/taskService");

async function createTaskController(req,res) {
    try {
        const task = await createTaskService(req.body)
        res.status(201).json({
            success: true,
            message : "Task Created Successfully.",
            task : task
        })

    } catch (error) {
        console.log(error)
       res.status(error.statusCode || 500).json({
            success: false,
            message : error.message,
            task : {},
            error : error
        }) 
    }
}

async function getAllTaskController(req,res) {
    try {
        const task = await getAllTaskService(req.params.taskId)
        console.log("Task from controller",task)
        if(!task){
            throw{reason:"Could not found the task", statusCode: 404}
        }
        res.status(201).json({
            success: true,
            message : "ALL Tasks Shown Successfully.",
            task : task
        })

    } catch (error) {
        console.log(error)
       res.status(error.statusCode || 500).json({
            success: false,
            message : error.message,
            task : {},
            error : error
        }) 
    }
}

async function getByIdTaskController(req,res) {
    try {
        const task = await getByIdTaskService(req.params.taskId)
        res.status(201).json({
            success: true,
            message : "ALL Tasks Ids are Shown Successfully.",
            task : task
        })

    } catch (error) {
        console.log(error)
       res.status(error.statusCode || 500).json({
            success: false,
            message : error.message,
            task : {},
            error : error
        }) 
    }
}

async function updateTaskByIdCon(req,res) {
    try {
        const task = await updateTaskByIdService(req.params.taskId, req.body)
        if(!task)res.status(404).json({
            success: false,
            message : "Task not found.",
            task : {}
        })
        res.status(201).json({
            success: true,
            message : "Task is updated Successfully.",
            task : task
        })

    } catch (error) {
        console.log(error)
       res.status(error.statusCode || 500).json({
            success: false,
            message : error.message,
            task : {},
            error : error
        }) 
    }
}

async function deleteTaskByIdCon(req,res) {
    try {
        const task = await deleteTaskByIdSer(req.params.taskId)
        if(!task)res.status(404).json({
            success: false,
            message : "Task not found.",
            task : {}
        })
        res.status(201).json({
            success: true,
            message : "Tasks is deleted Successfully.",
        })

    } catch (error) {
        console.log(error)
       res.status(error.statusCode || 500).json({
            success: false,
            message : error.message,
            task : {},
            error : error
        }) 
    }
}

module.exports ={
    createTaskController,
    getAllTaskController,
    getByIdTaskController,
    updateTaskByIdCon,
    deleteTaskByIdCon
}
const express = require("express")
const { createTaskController, getAllTaskController, getByIdTaskController, updateTaskByIdCon, deleteTaskByIdCon } = require("../controller/taskController")
const taskRouter = express.Router()
taskRouter.post("/", createTaskController)
taskRouter.get("/all",getAllTaskController)
taskRouter.get("/:taskId",getByIdTaskController)
taskRouter.put("/:taskId",updateTaskByIdCon)
taskRouter.delete("/:taskId",deleteTaskByIdCon)
module.exports =  taskRouter;

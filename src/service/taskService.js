const { findTask, createTask } = require("../repository/taskRepository");

async function createTaskService(taskDetails) {
    // It will create a brand new task

    const task = await findTask({
        taskName: taskDetails.taskName,
    });

    //1. We need to check if the task with this taskName already exists or not
     if(task) {
        // we found a task
        throw {reason: "Task with this Name already exists", statusCode: 500}
    }
    //2. If not then create the task in the DB
    const newTask = await createTask({
        taskName: taskDetails.taskName,
        taskDescription: taskDetails.taskDescription,
        taskPriority: taskDetails.taskPriority
    });

    if(!newTask) {
        throw {reason: "Something went wrong please try again", statusCode: 500}
    }

    //3. return the details of created task
    return newTask;
}

module.exports = createTaskService;
const createTaskService = require("../service/taskService");

async function registerTask(req, res) {
    try {
        const task = await createTaskService(req.body); // ✅ don't overwrite `res`
        return res.status(201).json({
            message: "Successfully created the Task",
            success: true,
            data: task,
            error: {}
        });
    } catch (error) {
         console.error("Error in register Task:", error);
        return res.status(500).json({
            message: error.reason || "Internal server error",
            success: false,
            data: {},
            error: error
        });
    }
}

module.exports = registerTask;
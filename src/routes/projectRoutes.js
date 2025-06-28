const express = require("express")
const { createProjectController, getAllProjectController, getAllProjectControllerById, updateProjectController, deleteProjectController } = require("../controller/projectController")
const projectRouter = express.Router()
projectRouter.post("/",createProjectController)
projectRouter.get("/all",getAllProjectController)
projectRouter.get("/:projectId",getAllProjectControllerById)
projectRouter.put("/:projectId",updateProjectController)
projectRouter.delete("/:projectId",deleteProjectController)
module.exports = projectRouter;

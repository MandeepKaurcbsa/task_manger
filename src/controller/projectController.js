const { createProjectService, getAllProjectService, getAllProjectServiceById, updateProjectService, deleteProjectService } = require("../service/projectService");

async function createProjectController(req,res) {
    try {
    const project = await createProjectService(req.body)
       res.status(201).json({
        success : true,
        message : "Project Created Successfully.",
        project : project
       }) 
    } catch (error) {
        console.log(error)
        res.status(error.statusCode || 500).json({
            success : false,
            message : error.message,
            project : {},
            error : error
        })
    }
}

async function getAllProjectController(req,res) {
    try {
        const project = await getAllProjectService(req.params.projectId)
        console.log("Project from controller",project)
        if(!project){
            throw{ reason : "Could not found the Project", statusCode : 404}
        }
        res.status(201).json({
            success : true,
            message : "All Project fetched successfully",
            project : project
        })
    } catch (error) {
        console.log(error)
        res.status(error.statusCode || 500).json({
            success : false,
            message : error.message,
            project : {},
            error : error
        })
    }
}

async function getAllProjectControllerById(req,res) {
    try {
       const project = await getAllProjectServiceById(req.params.projectId)
       res.status(201).json({
        success : true,
        message : "Project fetched by Id Successfully.",
        project : project
       })
    } catch (error) {
        console.log(error)
        res.status(error.statusCode || 500).json({
            success : false,
            message : error.message,
            project : {},
            error : error
        })
    }
}

async function updateProjectController(req,res) {
    try {
        const project = await updateProjectService(req.params.projectId, req.body)
        if(!project)res.status(404).json({
            success : false,
            message : "Project Not Found.",
            project : {}
        })
        res.status(201).json({
            success : true,
            message : "Project Updated Successfully.",
            project : project
        })
    } catch (error) {
        console.log(error)
        res.status(error.statusCode || 500).json({
            success : false,
            message : error.message,
            project : {},
            error : error
        })
    }
}

async function deleteProjectController(req,res) {
    try {
        const project = await deleteProjectService(req.params.projectId)
        if(!project)res.status(404).json({
            success : false,
            message : "Project Not Found.",
            project : {}
        })
        res.status(201).json({
            success : true,
            message : "Project Deleted Successfully.",
            project : project
        })
    } catch (error) {
       console.log(error)
       res.status(error.statusCode || 500).json({
        success : false,
        message : error.message,
        process : {},
        error : error
       }) 
    }
}
module.exports = {
    createProjectController,
    getAllProjectController,
    getAllProjectControllerById,
    updateProjectController,
    deleteProjectController
}
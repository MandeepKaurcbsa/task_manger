const Project = require("../schema/projectSchema");

async function createProjectRepo(projectDetails) {
    const project = await Project.create(projectDetails)
    return project;
}

async function getAllProjectRepo() {
    try {
        const project = await Project.find()
        return project;
    } catch (error) {
        console.log("Error fetching the projects",error)
        throw error        
    }
}

async function getAllProjectRepoById(projectId) {
    try {
        const project = await Project.findById(projectId)
        return project;
    } catch (error) {
        console.log("Error fetching ProjectId",error)
        throw error;
    }
}

async function updateProjectRepo(projectId, updatedData) {
    try {
        const project = await Project.findByIdAndUpdate(projectId, updatedData, {
        new : true, runValidators: true 
    })
    return project;
    } catch (error) {
        console.log("Error Updating the project.",error)
        throw error;
    }
  
}

async function deleteProjectRepo(projectId) {
    try {
        const project = await Project.findByIdAndDelete(projectId)
        return project
    } catch (error) {
        console.log("Error Deleting the project.",error)
        throw error
    }
}

module.exports = {
    createProjectRepo,
    getAllProjectRepo,
    getAllProjectRepoById,
    updateProjectRepo,
    deleteProjectRepo
}
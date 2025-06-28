const { createProjectRepo, getAllProjectRepo, getAllProjectRepoById, updateProjectRepo, deleteProjectRepo } = require("../repository/projectRepository");

async function createProjectService(projectDetails) {
try {
    const project = await createProjectRepo(projectDetails)
    return project;
} catch (error) {
    console.log("Error creating the Project.",error)
    throw error;
}}

async function getAllProjectService() {
    try {
        const project = await getAllProjectRepo()
        return project;
    } catch (error) {
        console.log("Error fetching the project.",error)
        throw error;
    }
}

async function getAllProjectServiceById(projectId) {
    try {
        const project = await getAllProjectRepoById(projectId)
        return project;
    } catch (error) {
       console.log("Error Fetching the ProjectId.",error)
       throw error; 
    }
}

async function updateProjectService(projectId, updatedData) {
    try {
        const project = await updateProjectRepo(projectId, updatedData)
        return project;
    } catch (error) {
        console.log("Error Updating the Project",error)
        throw error;
    }
}

async function deleteProjectService(projectId) {
    try {
        const project = await deleteProjectRepo(projectId)
        return project;
    } catch (error) {
        console.log("Error Deleting the project.",error)
        throw error;
    }
}

module.exports = {
    createProjectService,
    getAllProjectService,
    getAllProjectServiceById,
    updateProjectService,
    deleteProjectService
}
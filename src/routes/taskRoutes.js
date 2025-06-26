const express = require('express');
const registerTask = require('../controller/taskController');
//We have to initislise a router object to add routes in a new file 
//Routers are used to segregate your routes in different module
const taskRouter = express.Router();

taskRouter.post('/', registerTask) // this is a route registration

module.exports = taskRouter;
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const projectSchema = new mongoose.Schema({

    title:{
        type : String,
        required : true,
        trim : true,
    },

    description:{
        type : String,
        required : true,
        trim : true,
    },

    member:{
        type : String,
        enum : ['Alone','Two_partners','Group'],
        default : 'Alone',
    },

    priority:{
        type : String,
        enum : ['Low','Medium','High'],
        default : 'Low',
    },

    status:{
        type : String,
        enum : ['Started','Due','Completed'],
        default : 'Started',
    },

    budget:{
        type : String,
        required : true,
    }
}, {
    timestamps : true
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;

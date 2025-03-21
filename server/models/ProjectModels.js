const mongoose = require('mongoose')
const tasks = require('./TaskModels')

const projectSchema = new mongoose.Schema({
    task:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'tasks',
        required: true
    },
    Pname: {
        type: String,
        required: true
    },
    Pdescription: {
        type: String,
        required: true
    },
    PstartDate: {
        type: Date,
        required: true
    },
    PendDate: {
        type: Date,
        required: true
    },
    Pbudget: {
        type: Number,
        required: true, 
        min: 0
    }
})

const project = mongoose.model('Project', projectSchema)
module.exports = project
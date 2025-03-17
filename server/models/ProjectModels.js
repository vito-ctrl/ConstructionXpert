const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
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
        required: true
    }
})

const project = mongoose.model('Project', projectSchema)
module.exports = project
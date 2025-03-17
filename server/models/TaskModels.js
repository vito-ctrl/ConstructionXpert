const mongoose = require ('mongoose')

const TaskSchema = new mongoose.Schema({
    Tdescription:{
        type: String,
        required: true
    },
    TstartDate: {
        type: Date,
        required: true,
    },
    Tenddate: {
        type: Date,
        required: true
    },
    Tresources: {
        type: String,
        required: true
    }
})

const Task = mongoose.model('tasks', TaskSchema)
module.exports = Task
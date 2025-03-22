const express = require('express')
const router = express.Router()
const Task = require('../models/TaskModels')

router.post('/api/tasks', async(req, res) => {
    try{
        const createTask = {
            project: req.body.project,
            Tdescription: req.body.Tdescription,
            TstartDate: req.body.TstartDate,
            TendDate: req.body.TendDate,
            Tresources: req.body.Tresources
        } 
        const task = new Task(createTask)
        const result = await task.save()
        res.status(201).json(result) // Changed to 201 for resource creation
    } catch (error) {
        console.log(error)
        res.status(500).json({error: error.message})
    }
})

router.get('/api/tasks/:projectId', async(req, res) => {
    try {
        const task = await Task.find({ project: req.params.projectId }).populate('project'); 
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json(task)
    } catch (error) {
        console.log(error)
        res.status(500).json({error: error.message})
    }
})

router.put('/api/tasks/:id', async(req, res) => {
    try {
        const result = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true } // Added runValidators to ensure updates meet schema requirements
        )
        if (!result) {
            return res.status(404).json({error: 'Task not found'}) // Fixed error message
        }
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
        res.status(500).json({error: error.message})
    }
})

router.delete('/api/tasks/:id', async(req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        if (!task) {
            return res.status(404).json({message: "Task not found"}) // Added return
        }
        res.status(200).json({message: "Task deleted successfully", deletedTask: result}) // Fixed typo, added deleted item info
    } catch (error) {
        console.log(error)
        res.status(500).json({error: error.message})
    }
})

module.exports = router
const express = require('express')
const router = express.Router()
const Project = require('../models/ProjectModels') // Updated variable name for consistency

router.post('/api/projects', async(req, res) => {
    try {
        const createProject = {
            task: req.body.task,
            Pname: req.body.Pname,
            Pdescription: req.body.Pdescription,
            PstartDate: req.body.PstartDate,
            PendDate: req.body.PendDate,
            Pbudget: req.body.Pbudget
        }
        const project = new Project(createProject);
        const result = await project.save();
        res.status(201).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: error.message})
    }
});

router.get('/api/projects', async(req, res) => {
    try {
        const projects = await Project.find().populate('task');
        res.status(200).json(projects);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: error.message})
    }
})

router.put('/api/projects/:id', async(req, res) => {
    try {
        const result = await Project.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true } // Added runValidators
        )

        if(!result){
            return res.status(404).json({error: 'Project not found'}) // Fixed error message
        }
        res.status(200).json(result) // Changed to return the updated object for consistency
    } catch (error) {
        console.log(error)
        res.status(500).json({error: error.message})
    }
})

router.delete('/api/projects/:id', async(req, res) => {
    try {
        const result = await Project.findByIdAndDelete(req.params.id)
        if (!result) {
            return res.status(404).json({message: "Project not found"}) // Fixed error message
        }
        res.status(200).json({message: 'Project deleted successfully', deletedProject: result}) // Fixed typo and message, added deleted item info
    } catch (error) {
        console.error(error);
        res.status(500).json({error: error.message})
    }
})

module.exports = router
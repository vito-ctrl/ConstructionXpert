const express = require('express')
const router = express.Router()
const Stask = require('../models/TaskModels')

router.post('/api/tasks', async(req, res) => {
    try{
        const creatTasks = {
            Tdescription: req.body.Tdescription,
            TstartDate: req.body.TstartDate,
            TendDate: req.body.TendDate,
            Tresources: req.body.Tresources
        } 
        const task = new Stask(creatTasks)
        const result = await task.save()
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
        res.status(500).json({error: error.message})
    }
})

router.get('/api/tasks', async(req, res) => {
    try {
        const task = await Stask.find();
        res.status(200).json(task)
    } catch (error) {
        console.log(error)
        res.status(500).json({error: error.message})
    }
})

router.put('/api/tasks/:id', async(req, res) => {
    try {
        const result = await Stask.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        if (!result) {
            return res.status(404).json({error: 'product not found hhhhhhhhh!'})
        }
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
        res.status(500).json({error: error.message})
    }
})

router.delete('/api/tasks/:id', async(req, res) => {
    try {
        const result = await Stask.findByIdAndDelete(req.params.id)
        if (!result) {
            res.status(404).json({message: "task not found"})
        }
        res.status(200).json({message: "task deleted succefully"})
    } catch (error) {
        console.log(error)
        res.status(500).json({error: error.message})
    }
})

module.exports = router
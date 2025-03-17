const express = require('express')
const router = express.Router()
const Sproject = require('../models/ProjectModels')

router.post('/api/projects', async(req, res) => {
    try {
        const creatProject = {
            Pname: req.body.Pname,
            Pdescription: req.body.Pdescription,
            PstartDate: req.body.PstartDate,
            PendDate: req.body.PendDate,
            Pbudget: req.body.Pbudget
        }
        const project = new Sproject(creatProject);
        const result = await project.save();
        res.status(201).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: error.message})
    }
});

router.get('/api/projects', async(req, res) => {
    try {
        const project = await Sproject.find();
        res.status(200).json(project);
    } catch (error) {
        console.log(error);
        res.status(500)
    }
})

router.put('/api/projects/:id', async(req, res) => {
    try {
        const result = await Sproject.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )

        if(!result){
            return res.status(404).json({error: 'product not found !'})
        }
        res.status(200).json({message: "updated succefuly"})
    } catch (error) {
        console.log(error)
        res.status(500).json({error: error.message})
    }
})

router.delete('/api/projects/:id', async(req, res) => {
    try {
        const result = await Sproject.findByIdAndDelete(req.params.id)
        if (!result) {
            return res.status(404).json({message: "product not found"})
        }
        res.status(200).json({message: 'product deleted succes fully'})
    } catch (error) {
        console.error(error);
        res.status(500).json({error: error.message})
    }
})

module.exports = router
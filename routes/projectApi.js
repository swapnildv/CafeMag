const express = require('express');
const router = express.Router();
const Project = require('../models/project');

//get a list of menus from DB
router.get('/projects', function (req, res, next) {
    Project.find({}).then(function(projects){
        res.send(projects);
    })
});

//add a new menu in DB.
router.post('/projects', function (req, res, next) {
    Project.create(req.body).then(function (project) {
        res.send(project);
    }).catch(next);
});


module.exports = router;
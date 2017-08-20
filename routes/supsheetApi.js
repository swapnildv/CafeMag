const express = require('express');
const router = express.Router();

const Supdoc = require('../models/supdoc');

//get a list of menus from DB
router.get('/supdocs', function (req, res, next) {
    Supdoc.find({}).then(function(supdocs){
        res.send(supdocs);
    });
});

//add a new menu in DB.
router.post('/supdocs', function (req, res, next) {
    Supdoc.create(req.body).then(function (supdoc) {
        res.send(supdoc);
    }).catch(next);
});

module.exports = router;
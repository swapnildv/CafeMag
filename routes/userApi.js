const express = require('express');
const router = express.Router();

const User = require('../models/user');

//get a list of menus from DB
router.get('/users', function (req, res, next) {
    User.find({}).then(function(users){
        res.send(users);
    })
});

//add a new menu in DB.
router.post('/users', function (req, res, next) {
    User.create(req.body).then(function (user) {
        res.send(user);
    }).catch(next);
});

module.exports = router;
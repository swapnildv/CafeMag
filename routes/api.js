const express = require('express');
const router = express.Router();
const Menu = require('../models/menu');

//get a list of menus from DB
router.get('/menus', function (req, res, next) {
    Menu.find({}).then(function(menus){
        res.send(menus);
    })
});

//add a new menu in DB.
router.post('/menus', function (req, res, next) {
    Menu.create(req.body).then(function (menu) {
        res.send(menu);
    }).catch(next)

});
//Update a existing menu from DB
router.put('/menus/:id', function (req, res, next) {
    Menu.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
        Menu.findOne({ _id: req.params.id }).then(function (menu) {
            res.send(menu);
        });
    });
});
//delete a menu from DB
router.delete('/menus/:id', function (req, res, next) {
    Menu.findByIdAndRemove({ _id: req.params.id }).then(function (menu) {
        res.send(menu);
    });
});


module.exports = router;
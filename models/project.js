const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create menu Schema and model.
const projectSchema = new Schema({
    name:String
});

const project = mongoose.model('project',projectSchema);
module.exports = project;
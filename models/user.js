const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create menu Schema and model.
const userSchema = new Schema({
    name:String
});

const project = mongoose.model('user',userSchema);
module.exports = project;
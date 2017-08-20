const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create menu Schema and model.
const SupDocSchema = new Schema({
    timestamp: {
        type: Date
    },
    History: {
        _date:Date,
        task:String,
        projecid : mongoose.Schema.Types.ObjectId
    },
    Current: {
        _date:Date,
        task:String,
        projecid : mongoose.Schema.Types.ObjectId
    },
    userid : mongoose.Schema.Types.ObjectId,
    modifiedBy : mongoose.Schema.Types.ObjectId
});

const supDoc = mongoose.model('supdoc',SupDocSchema);

module.exports = supDoc;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create menu Schema and model.
const MenuSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    unitPrice: {
        type: Number
    },
    isActive: {
        type: Boolean,
        default: false
    }
});

const Menu = mongoose.model('menu',MenuSchema);

module.exports = Menu;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const nationSchema = new Schema({
    name: {
        type: String,
        require: true,
        unique: true,
    },
    description: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true,
    }
}, {
    timeStamps: true,
})

var Nations = mongoose.model('nations', nationSchema);

module.exports = Nations;
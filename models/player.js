const mongoose = require('mongoose')
const Schema = mongoose.Schema
const playerSchema = new Schema({
    name: {
        type: String,
        require: true,
        unique: true,
    },
    image: {
        type: String,
        require: true,
    },
    club: {
        type: String,
        require: true,
    },
    position: {
        type: String,
        require: true,
    },
    goals: {
        type: Number,
        require: true,
    },
    isCaptain: {
        type: String,
        require: true,
    }
}, {
    timeStamps: true,
})

var Player = mongoose.model('players',playerSchema)

module.exports = Player;
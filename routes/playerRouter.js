const express = require('express');
const playerController = require('../controllers/playerControllers')
const playerRouter = express.Router();

playerRouter
.route('/')
.get(playerController.index)
.post(playerController.create)

playerRouter
.route('/edit/:playerId')
.get(playerController.formEdit)
.post(playerController.edit)

playerRouter
.route('/delete/:playerId')
.get(playerController.delete)
module.exports = playerRouter;
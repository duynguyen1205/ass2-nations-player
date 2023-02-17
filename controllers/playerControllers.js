const Players = require("../models/player");
let clubData = [
  { id: "1", name: "Arsenal" },
  { id: "2", name: "Manchester City" },
  { id: "3", name: "Manchester United" },
  { id: "4", name: "Liverpool" },
  { id: "5", name: "Chelsea" },
  { id: "6", name: "Real Madrid" },
  { id: "7", name: "Barcelona" },
  { id: "8", name: "Alentico Marid" },
  { id: "9", name: "Juvetus" },
  { id: "10", name: "Ac Milan" },
];
let positionList = [
  { id: "1", name: "Goalkeeper"},
  { id: "2", name: "Defenders"},
  { id: "3", name: "Midfielders"},
  { id: "4", name: "Forwards"},
];
let isCaptainList = [
  { id: "1", name: "Yes"},
  { id: "2", name: "No"},
];

class PlayerController {
  index(req, res, next) {
    Players.find({})
      .then((players) => {
        res.render("player", {
          title: "The list of Players",
          players: players,
          clubList: clubData,
          positionData: positionList,
          isCaptainData: isCaptainList
        });
      })
      .catch(next);
  }
  //tạo player
  create(req, res, next) {
    const player = new Players(req.body);
    player
      .save()
      .then(() => res.redirect("/players"))
      .catch((error) => {});
  }
  //edit player
  formEdit(req, res, next) {
    Players.findById(req.params.playerId)
      .then((player) => {
        res.render("editPlayer", {
          title: "Update Player",
          player: player,
          clubList: clubData,
          positionData: positionList,
          isCaptainData: isCaptainList
        });
      })
      .catch(next);
  }
  edit(req, res, next) {
    Players.updateOne({ _id: req.params.playerId }, req.body)
      .then(() => {
        console.log(req.body);
        res.redirect("/players");
      })
      .catch(next);
  }
  delete(req, res, next) {
    const playersId = req.params.playerId
    Players.findByIdAndDelete(playersId)
    .then(()=> res.redirect("/players"))
    .catch(next);
  }
}

module.exports = new PlayerController();

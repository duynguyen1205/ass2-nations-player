const Nations = require("../models/nation");
class NationController {
  index(req, res, next) {
    Nations.find({})
      .then((nations) => {
        res.render("nation", {
          title: "The list of nations",
          nations: nations,
        });
      })
      .catch(next);
  }
  create(req, res, next) {
    const nation = new Nations(req.body);
    nation
      .save()
      .then(() => res.redirect("/nations"))
      .catch((error) => {});
  }
  formEdit(req, res, next) {
    Nations.findById(req.params.nationId)
    .then((nation) => {
      res.render("editNation", {
        title: "Update Nation",
        nation: nation,
      });
    })
    .catch(next);
  }
  edit(req, res, next) {
    Nations.updateOne({ _id: req.params.nationId }, req.body)
      .then(() => {
        console.log(req.body);
        res.redirect("/nations");
      })
      .catch(next);
  }
  delete(req, res, next) {
    const nationId = req.params.nationId
    console.log(nationId);
    Nations.findByIdAndDelete(nationId)
    .then(()=> res.redirect("/nations"))
    .catch(next);
  }
}

module.exports = new NationController();
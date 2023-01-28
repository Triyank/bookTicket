const showController = require("../controllers/show-controller");

module.exports = (router) => {
  router.post("/add-show", showController.addShow);
  router.get("/get-shows", showController.getShows);
};

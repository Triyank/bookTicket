const theaterController = require("../controllers/theater-controller");

module.exports = (router) => {
  router.get("/get-theaters", theaterController.getTheaters);
  router.post("/add-theater", theaterController.addTheater);
};

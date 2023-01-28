const movieController = require("../controllers/movie-controller");

module.exports = (router) => {
  router.get("/get-movies", movieController.getMovies);
  router.post("/add-movie", movieController.addMovie);
};

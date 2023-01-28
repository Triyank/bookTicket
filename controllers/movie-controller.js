const movieService = require("../services/movie-service");
const { response, sendFailureResponse } = require("../utils/response");

const addMovie = async (req, res) => {
  try {
    const serviceResponse = await movieService.addMovie(req.body);
    response({ res, ...serviceResponse });
  } catch (err) {
    console.log(err);
    sendFailureResponse({
      res,
      message: err.message,
    });
  }
};

const getMovies = async (req, res) => {
  try {
    const serviceResponse = await movieService.getMovies(req.query);
    response({ res, ...serviceResponse });
  } catch (err) {
    console.log(err);
    sendFailureResponse({
      res,
      message: err.message,
    });
  }
};

module.exports = {
  addMovie,
  getMovies,
};

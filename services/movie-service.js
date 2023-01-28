const { Movie } = require("../models");
const { movieValidator } = require("../validators/movie-validator");

const addMovie = async (body) => {
  const errors = await movieValidator(body);
  if (errors)
    return {
      statusCode: 422,
      message: errors.message,
    };

  const movie = new Movie({
    name: body.name,
    location: body.location,
  });

  await movie.save();
  return {
    statusCode: 201,
    message: "Movie added successfully",
  };
};

const getMovies = async (queryString) => {
  const movies = await Movie.find(queryString);

  return {
    statusCode: 200,
    data: {
      count: movies.length,
      rows: movies,
    },
    message: "Movies fetched successfully.",
  };
};

module.exports = {
  addMovie,
  getMovies,
};

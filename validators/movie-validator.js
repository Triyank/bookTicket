const { Movie } = require("../models");

const movieValidator = async (body) => {
  const error = null;
  if (!body.name) {
    return { message: "name required." };
  }
  const validMovie = await Movie.findOne({
    name: body.name,
  });

  if (validMovie) {
    return {
      message: "Movie already exists.",
    };
  }
};

module.exports = {
  movieValidator,
};

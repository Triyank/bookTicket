const { Show } = require("../models");

const showValidator = async (body) => {
  if (!body.movie_id || !body.theater_id || !body.time || !body.date) {
    return {
      message: "movie_id, theater_id, time and date all are mandatory.",
    };
  }

  // further validations for body parameters can be implemented here

  const showExists = await Show.findOne({
    ...body,
  });

  if (showExists) {
    return {
      message: "Show already exists.",
    };
  }
};

module.exports = {
  showValidator,
};

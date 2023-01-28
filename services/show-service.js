const { Show } = require("../models");
const { showValidator } = require("../validators/show-validator");

const addShow = async (body) => {
  const errors = await showValidator(body);
  if (errors)
    return {
      statusCode: 422,
      message: errors.message,
    };

  const show = new Show({
    theater_id: body.theater_id,
    movie_id: body.movie_id,
    time: body.time,
    date: body.date,
  });

  await show.save();
  return {
    statusCode: 201,
    message: "Show added successfully",
  };
};

const getShows = async (queryString) => {
  const shows = await Show.find(queryString);

  return {
    statusCode: 200,
    data: {
      count: shows.length,
      rows: shows,
    },
    message: "Shows fetched successfully.",
  };
};

module.exports = {
  addShow,
  getShows,
};

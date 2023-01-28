const { Theater } = require("../models");
const { theaterValidator } = require("../validators/theater-validator");

const addTheater = async (body) => {
  const errors = await theaterValidator(body);
  if (errors)
    return {
      statusCode: 422,
      message: errors.message,
    };

  const theater = new Theater({
    name: body.name,
    location: body.location,
  });

  await theater.save();
  return {
    statusCode: 201,
    message: "Theater added successfully",
  };
};

const getTheaters = async (queryString) => {
  const theaters = await Theater.find(queryString);

  return {
    statusCode: 200,
    data: {
      count: theaters.length,
      rows: theaters,
    },
    message: "Theaters fetched successfully.",
  };
};

module.exports = {
  addTheater,
  getTheaters,
};

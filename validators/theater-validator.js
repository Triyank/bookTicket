const { Theater } = require("../models");

const theaterValidator = async (body) => {
  const error = null;
  if (!body.name || !body.location) {
    return { message: "name and location required." };
  }
  const validTheater = await Theater.findOne({
    name: body.name,
    location: body.location,
  });

  if (validTheater) {
    return {
      message: "Theater already exists.",
    };
  }
};

module.exports = {
  theaterValidator,
};

const theaterService = require("../services/theater-service");
const { response, sendFailureResponse } = require("../utils/response");

const addTheater = async (req, res) => {
  try {
    const serviceResponse = await theaterService.addTheater(req.body);
    response({ res, ...serviceResponse });
  } catch (err) {
    console.log(err);
    sendFailureResponse({
      res,
      message: err.message,
    });
  }
};

const getTheaters = async (req, res) => {
  try {
    const serviceResponse = await theaterService.getTheaters(req.query);
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
  addTheater,
  getTheaters,
};

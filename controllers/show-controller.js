const showService = require("../services/show-service");
const { response, sendFailureResponse } = require("../utils/response");

const addShow = async (req, res) => {
  try {
    const serviceResponse = await showService.addShow(req.body);
    response({ res, ...serviceResponse });
  } catch (err) {
    console.log(err);
    sendFailureResponse({
      res,
      message: err.message,
    });
  }
};

const getShows = async (req, res) => {
  try {
    const serviceResponse = await showService.getShows(req.query);
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
  addShow,
  getShows,
};

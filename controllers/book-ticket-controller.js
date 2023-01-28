const bookTicketService = require("../services/book-ticket-service");
const { response, sendFailureResponse } = require("../utils/response");

const bookTicket = async (req, res) => {
  try {
    const serviceResponse = await bookTicketService.bookTicket(req.body);
    response({ res, ...serviceResponse });
  } catch (err) {
    console.log(err);
    sendFailureResponse({
      res,
      message: err.message,
    });
  }
};

const getBookings = async (req, res) => {
  try {
    const serviceResponse = await bookTicketService.getBookings(req.query);
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
  bookTicket,
  getBookings,
};

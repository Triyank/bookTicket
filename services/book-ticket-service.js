const { BookTicket } = require("../models");
const { bookTicketValidator } = require("../validators/book-ticket-validator");

const bookTicket = async (body) => {
  const errors = await bookTicketValidator(body);

  if (errors)
    return {
      statusCode: 422,
      message: errors.message,
    };

  const ticket = new BookTicket({
    show_id: body.show_id,
  });

  await ticket.save();
  return {
    statusCode: 201,
    message: "Ticket booked successfully.",
  };
};

const getBookings = async (queryString) => {
  const bookings = await BookTicket.find(queryString);
  return {
    statusCode: 200,
    data: {
      count: bookings.length,
      rows: bookings,
    },
    message: "Bookings fetched successfully.",
  };
};

module.exports = {
  bookTicket,
  getBookings,
};

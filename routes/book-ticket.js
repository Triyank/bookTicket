const bookTicketController = require("../controllers/book-ticket-controller");

module.exports = (router) => {
  router.post("/book-ticket", bookTicketController.bookTicket);
  router.get("/get-tickets", bookTicketController.getBookings);
};

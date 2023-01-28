const { Show } = require("../models");

const bookTicketValidator = async (body) => {
  if (!body.show_id) {
    return { message: "show_id required." };
  }

  const show = await Show.findById(body.show_id);
  if (!show) {
    return {
      message: "Show does not exists.",
    };
  }
};

module.exports = {
  bookTicketValidator,
};

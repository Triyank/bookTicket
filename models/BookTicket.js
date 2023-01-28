const mongoose = require("mongoose");

module.exports = {
  BookTicketModel: {
    show_id: { type: mongoose.Schema.Types.ObjectId, ref: "show" },
  },
};

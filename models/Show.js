const mongoose = require("mongoose");

module.exports = {
  showModel: {
    movie_id: { type: mongoose.Schema.Types.ObjectId, ref: "movie" },
    theater_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "theater",
    },
    date: { type: Date },
    time: { type: String },
  },
};

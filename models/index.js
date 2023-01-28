const mongoose = require("mongoose");
const { theaterModel } = require("./Theater");
const { movieModel } = require("./Movie");
const { showModel } = require("./Show");
const { BookTicketModel } = require("./BookTicket");

mongoose.connect("mongodb://localhost:27017/newCollection", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = {
  Theater: mongoose.model("theater", new mongoose.Schema(theaterModel)),
  Movie: mongoose.model("movie", new mongoose.Schema(movieModel)),
  Show: mongoose.model("show", new mongoose.Schema(showModel)),
  BookTicket: mongoose.model(
    "bookTicketModel",
    new mongoose.Schema(BookTicketModel)
  ),
};

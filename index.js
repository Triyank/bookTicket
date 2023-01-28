require("dotenv").config();

const express = require("express");
const cors = require("cors");

const router = require("./routes/index");

const ticketBookingSystem = express();
ticketBookingSystem.use(cors());
ticketBookingSystem.use(express.json());
ticketBookingSystem.use(express.urlencoded({ extended: true }));

ticketBookingSystem.use(router);

ticketBookingSystem.listen(7003, () => {
  console.log("App is running on PORT 7003");
});

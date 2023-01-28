const router = require("express").Router();

require("./theater")(router);
require("./movie")(router);
require("./show")(router);
require("./book-ticket")(router);

module.exports = router;

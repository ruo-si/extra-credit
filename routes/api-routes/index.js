const express = require("express");
const commentsRoute = require("./comments");
const router = express.Router();

router.use("/comments", commentsRoute);

module.exports = router;

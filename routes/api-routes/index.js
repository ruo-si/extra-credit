const router = require("express").Router();
const commentsRoute = require("./comments");

// go to /api/comments
router.use("/comments", commentsRoute);

module.exports = router;

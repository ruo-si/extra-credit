const express = require("express");
const router = express.Router();
const htmlRoute = require("./htmlRoutes");

// get route -> index
router.get("/", (req, res) => {
   res.redirect("/htmlRoutes");
});

// comments page
router.use("/htmlRoutes", htmlRoute);

module.exports = router;

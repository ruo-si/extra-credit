const express = require("express");
const router = express.Router();
const db = require("../../models");

// /api/commnets/create 
// post comment route -> back to index
router.post("/create", (req, res, next) => {
   db.Test.create(req.body)
      .then(newComment => {
         console.log("[node] new comment:", newComment.comment);
         res.redirect("/");
      // optionally return data created
      // res.json(newComment)
      })
      .catch(err => {
         res.status(500);
         next(err);
      });
});

module.exports = router;

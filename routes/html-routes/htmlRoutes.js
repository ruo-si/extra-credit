const express = require("express");
const router = express.Router();
// eslint-disable-next-line no-unused-vars
const db = require("../../models");

// // routing (html) /commnets
// router.get("/", (req, res) => {
//    // get comments from db and send to template
//    db.Test.findAll({})
//       .then((comments) => {
//          res.render("index", {
//             comments: comments,
//             helpers: {
//                getFirst: function(obj, col) {
//                   return obj[0].get(col);
//                },
//             },
//          });
//       })
//       .catch((err) => {
//          res.status(500);
//          next(err);
//       });
// });

// Routes
router.get("/", (req, res) => {
   res.render("index");
});

module.exports = router;

const express = require("express");
const router = express.Router();
// const db = require("../../models");

// // /api/commnets/create 
// // post comment route -> back to index
// router.post("/create", (req, res, next) => {
//    db.Test.create(req.body)
//       .then(newComment => {
//          console.log("[node] new comment:", newComment.comment);
//          res.redirect("/");
//       // optionally return data created
//       // res.json(newComment)
//       })
//       .catch(err => {
//          res.status(500);
//          next(err);
//       });
// });

// api route get random fact from server
router.get("/api/facts", (req, res) => {

   // accessing database to get a random fact row data object
   const selectRandomQuery = "SELECT * from extra_credit_db.facts_library ORDER BY RAND () LIMIT 1";

   connection.query(selectRandomQuery, (err, data) => {
      if (err) {
         throw err;
      }
      // Test it.
      console.log("The solution is: ", data[0]);

      // res.render("index", data[0]);
      res.send(data);
   });
});

module.exports = router;

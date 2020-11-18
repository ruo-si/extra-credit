
module.exports = function (app) {
    
   // api route get random fact from server
   app.get("/api/facts", (req, res) => {

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
};
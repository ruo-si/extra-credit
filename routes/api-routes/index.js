const router = require("express").Router();
const apiRoutes = require("./apiRoutes");
const db = require("../../models");

// go to /api/apiRoutes
router.use("/apiRoutes", apiRoutes);

router.get("/facts", (req, res)=> {
   db.FactsLibrary.findAll({}).then(
      data => res.json(data)
   );

   console.log("here");
});

module.exports = router;

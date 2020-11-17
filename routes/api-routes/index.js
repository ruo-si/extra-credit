const router = require("express").Router();
const apiRoutes = require("./apiRoutes");
const db = require("../../models")

// go to /api/apiRoutes
router.use("/apiRoutes", apiRoutes);

router.get("/facts", function(req, res){
    db.FactsLibrary.findOne({}).then(
        data => res.json(data)
    )

    console.log("here")
});

module.exports = router;

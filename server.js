const express = require("express");
// const apiRoutes = require("./routes/api-routes");
// const htmlRoutes = require("./routes/html-routes");
// const db = require("./models");
// const seed = require("./utils/seed");
const errorHandler = require("./utils/errorHandler");
const calculate = require("./utils/calculate");

const PORT = process.env.PORT || 3000;
const app = express();

// good place for a logging middleware

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const exphbs = require("express-handlebars");
const helpers = require("./views/helpers");

// Set Handlebars as the default templating engine.
app.engine(
   "handlebars",
   exphbs({
      defaultLayout: "main",
      partialsDir: __dirname + "/views/partials/",
      helpers: helpers
   })
);

app.set("view engine", "handlebars");

// Mock Data
// const cardsCalcArray = [
//    { name: "amex", miles: 10, rewards: 3, cashback: 4 },
//    { name: "jetblue", miles: 4, rewards: 8, cashback: 6 },
//    { name: "citi", miles: 1, rewards: 1, cashback: 5 },
// ];

// app.use("/api", apiRoutes);
// app.use(htmlRoutes);

// Routes
app.get("/", (req, res) => {
   res.render("index");
});

// error handling
app.use(errorHandler);

app.use(calculate);


// drops all tables on every restart
// db.sequelize.sync({ force: true }).then(async () => {
   
//    // seed db
//    await seed(extra_credit_db);

//    app.listen(PORT, () => {
//       console.log("🌎 => live on http://localhost:%s", PORT);
//    });
// });


app.listen(PORT, () => {
   console.log("🌎 => live on http://localhost:%s", PORT);
});
const express = require("express");
const apiRoutes = require("./routes/api-routes");
const htmlRoutes = require("./routes/html-routes");
const db = require("./models");
const seed = require("./utils/seed");
const errorHandler = require("./utils/errorHandler");

// Set Port
const PORT = process.env.PORT || 3000;
const app = express();

// Middleware handling

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Helper code
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

// Routing
app.use("/api", apiRoutes);
app.use(htmlRoutes);

// Error handling
app.use(errorHandler);

// Eqeualize and app listening every restart
const sync = true;
db.sequelize.sync({ force: sync }).then(async () => {
   
   if(sync) {
      // seed db
      await seed(db);
   }

   app.listen(PORT, () => {
      console.log("🌎 => live on http://localhost:%s", PORT);
   });
});

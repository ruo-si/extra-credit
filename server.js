const express = require("express");
const apiRoutes = require("./routes/api-routes");
const htmlRoutes = require("./routes/html-routes");
const db = require("./models");
const seed = require("./utils/seed");
const errorHandler = require("./utils/errorHandler");

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

app.engine(
   "handlebars",
   exphbs({
      defaultLayout: "main",
      partialsDir: __dirname + "/views/partials/",
      helpers: helpers
   })
);
app.set("view engine", "handlebars");

app.use("/api", apiRoutes);
app.use(htmlRoutes);

// error handling
app.use(errorHandler);

// drops all tables on eevery restart
db.sequelize.sync({ force: true }).then(async () => {
   // seed db
   await seed(db.Test);

   app.listen(PORT, () => {
      console.log("🌎 => live on http://localhost:%s", PORT);
   });
});

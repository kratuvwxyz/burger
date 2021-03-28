var express = require("express"),
  PORT = process.env.PORT || 3000,
  app = express();
app.use(express.static(__dirname + "/public")),
  app.use(express.urlencoded({ extended: !0 })),
  app.use(express.json());
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" })),
  app.set("view engine", "handlebars");
var routes = require("./controllers/burgerController.js");
app.use(routes), app.listen(PORT, function () {});

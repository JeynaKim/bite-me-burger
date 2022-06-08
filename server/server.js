// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const sassMiddleware = require("../lib/sass-middleware");
const express = require("express");
const app = express();
const morgan = require("morgan");

const path = require("path");

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("../lib/db.js");
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(
  "/styles",
  sassMiddleware({
    source: path.join(__dirname, "../styles"),
    destination: path.join(__dirname, "../public/styles"),
    isSass: false, // false => scss, true => sass
  })
);

app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const usersRoutes = require("../routes/users");
const widgetsRoutes = require("../routes/widgets");
const itemsRoutes = require("../routes/items_route");
const ordersRoutes = require("../routes/orders_route");
const restaurauntOrderRoutes = require("../routes/restaurant_order_route.js");
const orderPost = require("../routes/order_post.js");
const orderCompleteRoutes = require("../routes/order_complete_route");
const { sendClientConfirmation } = require("./twilio/send_sms");

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/api/users", usersRoutes(db));
app.use("/api/widgets", widgetsRoutes(db));
app.use("/user/items", itemsRoutes(db));
app.use("/user/order", ordersRoutes(db));
app.use("/admin/order", restaurauntOrderRoutes(db));

// app.use("/user/successful_order", orderPost(db))
app.use("/admin/order/complete", orderCompleteRoutes(db));

//app.use("/user/successful_order", orderPost(db))
//app.use("/admin/order/complete", orderCompleteRoutes(db, orderID))

app.use("/user/successful_order", orderPost(db));
app.use("/admin/order/complete", orderCompleteRoutes(db));

// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/orders", (req, res) => {
  res.render("orders");
});

app.post("/user/checkout/complete", (req, res) => {
  sendClientConfirmation();
  res.render("confirmation_screen");
});

app.get("/user/checkout", (req, res) => {
  res.render("checkout");
});

app.get("/admin", (req, res) => {
  res.render("admin");
});
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

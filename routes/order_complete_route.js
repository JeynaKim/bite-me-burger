const express = require('express');
const router  = express.Router();

// Restaurant marks order as complete
// res.json omitted since nothing needs to be displayed

module.exports = (db, orderID) => {
  router.post("/", (req, res) => {
    let query = `INSERT INTO orders(order_complete) VALUES(true) WHERE orders.id = ${orderID};`;

    db.query(query);
  })
  return router;
}

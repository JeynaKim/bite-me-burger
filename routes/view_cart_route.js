const express = require('express');
const router  = express.Router();

// View items in a user's cart (prior to submission)

module.exports = (db, userID) => {
  router.post("/", (req, res) => {
    let query = `INSERT INTO orders(order_complete) VALUES(true) WHERE orders.id = ${orderID};`;

    db.query(query);
  })
  return router;
}

const express = require('express');
const router  = express.Router();

// Restaurant marks order as complete
// res.json omitted since nothing needs to be displayed

module.exports = (db) => {
  router.post("/", (req, res) => {
    let query = `INSERT INTO orders(order_complete) VALUES(true) WHERE orders.id = ${req.body.orders.id};`;

    db.query(query);
    // res.sendStatus(200) ---> HAVE TO RE-DIRECT TO ORDERS PAGE, IF FAILS RES.SENDSTATUS(400);
  })
  return router;
}

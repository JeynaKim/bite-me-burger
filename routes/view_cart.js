const express = require('express');
const router = express.Router();

// View items in user's order

module.exports = (db) => {

  router.get("/:orderID", (req, res) => {
    console.log("I got here")
    console.log(`order ID: ${req.params.orderID}`)

    let query = `SELECT * FROM order_items JOIN items ON items_id = items.id JOIN orders ON order_id = orders.id JOIN users ON users.id = orders.users_id WHERE order_id = ${req.params.orderID};`


    db.query(query)
      .then(data => {
        console.log(data.rows)
        res.json(data.rows)
      })
      .catch(err => {
        console.log(`Error: ${err}`);
      })
  })

  return router;
}

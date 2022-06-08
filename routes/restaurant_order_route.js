const express = require('express');
const res = require('express/lib/response');
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    let query = `
    SELECT *
    FROM orders
    JOIN order_items ON order_id = orders.id
    JOIN users ON users_id = users.id
    WHERE order_complete = false
    GROUP BY orders_items.items_id;`

    db.query(query)
      .then(data => {
        items = data.rows;
        res.json({ items })
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message })
      })
  })
  return router;
}

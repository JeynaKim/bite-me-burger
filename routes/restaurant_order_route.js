const express = require('express');
const router = express.Router();

// ADMIN SIDE: Restauraunt views all incomplete orders

module.exports = (db) => {
  router.get("/", (req, res) => {
    let query = `
    SELECT *
    FROM orders
    JOIN order_items ON order_items.order_id = orders.id
    JOIN users ON orders.users_id = users.id
    JOIN items ON items.id = order_items.items_id
    ORDER BY orders.id;`

    db.query(query)
      .then(data => {
        const orders = data.rows;
        res.json({ orders });
        console.log(orders)
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message })
      })
  })
  return router;
}


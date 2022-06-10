const express = require('express');
const router = express.Router();

// ADMIN SIDE: Restauraunt views all incomplete orders

module.exports = (db) => {
  router.get("/", (req, res) => {
    let query =
    `
      SELECT users.whole_name AS name, ARRAY_AGG(item_name) AS items, SUM(price) AS price, created_at, estimate_time_minute, order_id, order_complete, phone_number, email, completed_at
      FROM orders
      JOIN order_items ON order_items.order_id = orders.id
      JOIN users ON orders.users_id = users.id
      JOIN items ON items.id = order_items.items_id
      GROUP BY  users.whole_name, created_at, estimate_time_minute, order_id, order_complete ,phone_number, email, completed_at
      ORDER BY order_id DESC;
    `
    db.query(query)
      .then(data => {
        const orders = data.rows;
        res.json({ orders });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message })
      })
  })
  return router;
}


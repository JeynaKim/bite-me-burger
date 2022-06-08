const express = require('express');

const router = express.Router();

// ADMIN SIDE: Restauraunt views all incomplete orders

module.exports = (db) => {
  router.get("/", (req, res) => {
    let query = `
    SELECT *
    FROM orders
    JOIN order_items ON order_id = orders.id
    JOIN users ON users_id = users.id
    WHERE order_complete = false
    ORDER BY orders.id;`

    db.query(query)
      .then(data => {
        const items = data.rows;
        res.json({ items });
        console.log(items)
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message })
      })
  })
  return router;
}


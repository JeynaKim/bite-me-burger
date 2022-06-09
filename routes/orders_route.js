const express = require('express');
const router  = express.Router();

// Displays all orders, sorts by order ID
module.exports = (db) => {
  router.get("/", (req, res) => {
    let query = `SELECT * FROM orders LEFT JOIN order_items ON orders.id = order_items.order_id JOIN items ON order_items.items_id = items.id;`
    console.log('in orders:', query)
    db.query(query)
    .then(data => {
      console.log(data.rows)
      const orders = data.rows;
      res.json({ orders });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});
return router;
};


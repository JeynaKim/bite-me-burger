const express = require('express');
const router  = express.Router();


// View all orders

module.exports = (db) => {
  router.get("/", (req, res) => {
    let query = `SELECT * FROM orders LEFT JOIN order_items ON orders.id = order_id;`
    console.log('in orders:', query)
    db.query(query)
    .then(data => {
      console.log(data.rows)
      const items = data.rows;
      res.json({ items });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});
return router;
};

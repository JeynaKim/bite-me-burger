const express = require('express');
const router  = express.Router();

// Displays all orders, sorts by order ID
module.exports = (db) => {
  router.post("/", (req, res) => {
    console.log(req.body);
    const orderId = Number(req.body.order_id);
    db.query(
      `
        UPDATE orders
        SET order_complete = TRUE, completed_at = NOW()
        WHERE id = $1
        RETURNING id;
      `, [orderId])
      .then(data => {
        res.status(200).json({"message": "OK"});
      })
      .catch(error => {
        res.status(400).json({"message": "could not update orders table"});
      });
  });
return router;
};


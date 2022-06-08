const express = require('express');
const router  = express.Router();


module.exports = (db) => {
  router.post("/", (req, res) => {
    let query = `INSERT INTO order_items (items_id, order_id, quantity) VALUES ()`
  })
}

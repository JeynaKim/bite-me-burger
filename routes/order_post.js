const express = require('express');
const router  = express.Router();

// Updates databases with relevant info after order submission

module.exports = (db, whole_name, phone_number, email) => {
  router.post("/", (req, res) => {
    let query1 = `INSERT INTO users(whole_name, phone_number, email) VALUES($1, $2, $3);`

    db.query(query1, [whole_name, phone_number, email] )



  })
}
let query2 = `INSERT INTO orders(users_id, created_at, )
VALUES(SELECT users.id FROM users WHERE users.id)`;
let query3 = `INSERT INTO order_items(items_id, order_id, quantity) VALUES()`

const express = require('express');
const router  = express.Router();

// Updates databases with relevant info after order submission

module.exports = (db, whole_name, phone_number, email) => {
  router.post("/", (req, res) => {
    let query = `INSERT INTO users(whole_name, phone_number, email) VALUES($1, $2, $3);`
    let query2 = `INSERT INTO orders(users_id, created_at, )
                  VALUES(SELECT users.id FROM users)`;
    let query3 = `INSERT INTO order_items(items_id, order_id, quantity) VALUES()`
    db.query(query, [whole_name, phone_number, email] )



  })
}

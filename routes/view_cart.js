const express = require('express');
const router = express.Router();

// View items in user's order

module.exports = (db) => {

  router.get("/", (req, res) => {
    console.log("I got here")

    let query = `SELECT * FROM orders
                JOIN users ON users.id = users_id
                JOIN order_items ON order_id = orders.id
                JOIN items ON items.id = items_id
                ORDER BY users_id DESC LIMIT 1;`


    db.query(query)
      .then(data => {
        console.log(data.rows)
        console.log(req.body)

       res.json(data.rows[0])
      //send({message: "Here are your orders:", orders: data.rows})
      })
      .catch(err => {
        console.log(`Error: ${err}`);
      })
  })

  return router;
}

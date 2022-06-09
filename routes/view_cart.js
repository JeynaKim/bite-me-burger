const express = require('express');
const router = express.Router();

// View items in user's cart

module.exports = (db) => {

  router.get("/", (req, res) => {
    const user_id = 1;
    let query = `SELECT * FROM orders WHERE users_id = $1;`
    let values = [user_id]

    db.query(query, values)
      .then(data => {
        console.log(data.rows)
        res.status(200).send({message: "Here are your orders:", orders: data.rows})
      })
      .catch(err => {
        console.log(`Error: ${err}`);
      })
  })

  return router;
}

const express = require('express');
const { reservationsUrl } = require('twilio/lib/jwt/taskrouter/util');
const router  = express.Router();

// Restaurant marks order as complete
// res.json omitted since nothing needs to be displayed

module.exports = (db) => {
  router.post("/", (req, res) => {
    //let query = `INSERT INTO orders(order_complete) VALUES(true) WHERE orders.id = ${req.body.orders.id};`;
    let query1 = `INSERT INTO users(whole_name, phone_number, email) VALUES($1, $2, $3) RETURNING id;`
    let query2 = `INSERT INTO orders(users_id) VALUES($1) RETURNING id`;
    let query3 = `INSERT INTO order_items(items_id, order_id, quantity) VALUES($1, $2, $3);`

    console.log('This is the body:',req.body)
    const {items, user_name,user_email,user_address,user_phone_number} = req.body;

    const shouldAbort = err => {
      if (err) {
        console.error('Error in transaction', err.stack)
        db.query('ROLLBACK', err => {
          if (err) {
            console.error('Error rolling back db', err.stack)
            res.send(`Error: ${err}`)
          }
          // release the db back to the pool
        })
      }
      return !!err
    }

    db.query('BEGIN', err => {
      if (shouldAbort(err)) return
     db.query(query1, [user_name, user_phone_number, user_email], (err, firstResponse) => {
        if (shouldAbort(err)) return
        console.log(`userID: ${firstResponse.rows[0].id}`)
        db.query(query2, [firstResponse.rows[0].id], (err, secondResponse) => {
          if (shouldAbort(err)) return
          db.query('COMMIT', err => {
            if (err) {
              console.error('Error committing transaction', err.stack)
            }
          })

          const lengthOfItem = (JSON.parse(items)).length
          let index = 1
          for (const item of JSON.parse(items)) {
            console.log({item})
            console.log("second response:", secondResponse.rows[0].id )
            db.query(query3, [item.id, secondResponse.rows[0].id, item.quantity], (err, thirdResponse) => {
              //  console.log(thirdResponse);
              if (shouldAbort(err)) return;
              if (index >= lengthOfItem) {
                db.query('COMMIT', err => {
                  if (err) {
                    console.error('Error committing transaction', err.stack)
                  }
                   return res.send(`Success`)
                })
              }
              index++
            })
          }
        })
      })
    })
 })
  return router;
}








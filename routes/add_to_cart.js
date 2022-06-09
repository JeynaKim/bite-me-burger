const express = require('express');
const router  = express.Router();

// Add items to user's cart (updates database directly)
// *No need to send the information again after confirmation button is clicked!*

module.exports = (db) => {
  router.post("/", (req, res) => {

    const {whole_name, phone_number, email, items_id, quantity } = req.body;

    //let query1 = `INSERT INTO users(whole_name, phone_number, email) VALUES($1, $2, $3) RETURNING id;`

    let query2 = `INSERT INTO orders(users_id) VALUES($1) RETURNING id`;

    let query3 = `INSERT INTO order_items(items_id, order_id, quantity) VALUES($1, $2, $3);`

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

     // db.query(query1, [whole_name, phone_number, email], (err, firstResponse) => {
      //  if (shouldAbort(err)) return
        console.log(`userID: ${firstResponse.rows[0].id}`)
        db.query(query2, [1], (err, secondResponse) => {
          if (shouldAbort(err)) return
          db.query(query3, [items_id, secondResponse.rows[0].id, quantity], (err, thirdResponse) => {
            console.log(thirdResponse);
            if (shouldAbort(err)) return;
            db.query('COMMIT', err => {
              if (err) {
                console.error('Error committing transaction', err.stack)
              }
              res.json({or})


            })

          })


        })
      })
    })

 // })
  return router;
}


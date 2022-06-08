const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    let query = `SELECT * FROM items;`;
    console.log("in API/items:", query);
    db.query(query)
      .then((data) => {
        console.log(data);
        const items = data.rows;
        res.json({ items });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};

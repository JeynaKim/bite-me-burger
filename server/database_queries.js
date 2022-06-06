const { Pool } = require('pg');

const pool = new Pool();

// USER SIDE

// Lists all menu items (least to most expensive)
const allMenuItems = function () {
  return pool.query(`
  SELECT *
  FROM items
  ORDER BY price
  `)
    .then(res => {
      return res;
    })
    .catch(err => {
      console.log(`Query error: ${err}`);
    })
};

// Add item to user's cart
// Parameters come from user menu input
const addItemToCart = function (item, quantity) {
 return pool.query(`
  INSERT INTO order_items(items_id, quantity)
  VALUES(
    SELECT id
    FROM items
    WHERE id = ${item.id},
    $1)`,
    [quantity]
  )
    .then(res => {
      console.log(`Added ${quantity} ${item.name} to cart!`);

    })
    .catch(err => {
      console.log(`Error: ${err}`);
    })
} // order_id not yet added, to be added on order finalization or prior?
// (latter might clog database with orders that were never finalized/put through)


// View items in user's cart
const viewCart = function () {
  pool.query(`
  SELECT item_photo_url, item_name, price, quantity
  FROM items
  JOIN order_items
  ON items_id = items.id
  `)
    .then(res => {
      return
    })

}



// ADMIN SIDE

// Add menu items
const addItemToMenu = function (price, itemName, itemPhotoURL) {
  pool.query(`
  INSERT INTO items(price, item_name, item_photo_url)
  VALUES ($1, $2, $3)`,
    [price, itemName, itemPhotoURL]
  )
    .then(res => {
      console.log(`Successfully added ${itemName} at the price of ${price}. Photo URL: ${itemPhotoURL}`);
    })
    .catch(err => {
      console.log(err);
    })
}

// After order finalization, order is sent to ADMIN



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
      console.log(`Error: ${err}`);
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
  return pool.query(`
  SELECT item_photo_url, item_name, price, quantity
  FROM items
  JOIN order_items
  ON items_id = items.id
  `)
    .then(res => {
      return res;
    })
    .catch(err => {
      console.log(`Error: ${err}`);
    })

}



// ADMIN SIDE

// Add menu items
const addItemToMenu = function (price, itemName, itemPhotoURL) {
  return pool.query(`
  INSERT INTO items(price, item_name, item_photo_url)
  VALUES ($1, $2, $3)`,
    [price, itemName, itemPhotoURL]
  )
    .then(res => {
      console.log(`Successfully added ${itemName} at the price of ${price}. Photo URL: ${itemPhotoURL}`);
    })
    .catch(err => {
      console.log(`Error: ${err}`);
    })
}

// After order finalization, order is sent to ADMIN
const getOrders = function () {
  return pool.query(`
  SELECT whole_name, created_at, items_id, order_id, quantity
  FROM orders
  JOIN order_items ON order_id = orders.id
  JOIN users ON users_id = users.id
  WHERE order_complete = false
  GROUP BY order_id
  `)
    .then(res => {
      return res;
    })
    .catch(err => {
      console.log(`Error: ${err}`);
    })
}

// Restaurant marks order as complete
const orderComplete = function (orderID) {
  return pool.query(`
  UPDATE orders
  SET order_complete = true
  WHERE id = ${orderID}
  `)
    .then(res => {
      console.log(`Order ${orderID} complete!`);
      return res;
    })
    .catch(err => {
      console.log(`Error: ${err}`);
    })
}




module.export =  { allMenuItems };

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  whole_name VARCHAR(255) NOT NULL,
  phone_number VARCHAR(20) NOT NULL,
  email VARCHAR(255) NOT NULL,
  is_admin BOOLEAN DEFAULT FALSE
);

CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  price DECIMAL(4, 2),
  item_name TEXT,
  item_photo_url VARCHAR(255) NOT NULL
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  users_id INTEGER,
  order_status TEXT,
  created_at TIMESTAMP,
  estimate_time_minute INTEGER DEFAULT 25,
  started_at TIMESTAMP,
  completed_at TIMESTAMP,
  bill_paid BOOLEAN DEFAULT TRUE,
  message TEXT,
  FOREIGN KEY (users_id) REFERENCES users(id)
);

CREATE TABLE order_items (
  items_id INTEGER,
  order_id INTEGER,
  quantity INTEGER NOT NULL,
  FOREIGN KEY (items_id) REFERENCES items(id),
  FOREIGN KEY (order_id) REFERENCES orders(id)
);

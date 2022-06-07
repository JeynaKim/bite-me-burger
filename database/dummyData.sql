INSERT INTO items(price, item_name, item_photo_url)
VALUES (5.95, 'Classic Smash Burger', 'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Smash-Burgers_EXPS_TOHcom20_246232_B10_06_10b.jpg'),
(6.95, 'Barbecue Smash Burger', 'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/exps28800_UG143377D12_18_1b_RMS.jpg'),
(4.95, 'Double Ranch Burger', 'https://assets.epicurious.com/photos/5580664481ac1e502367643f/2:1/w_2000,h_1000,c_limit/56389654_double-rl-ranch-burger_1x1.jpg'),
(6.95, 'Buttermilk Fried Crispy Chicken Burger', 'https://girlheartfood.com/wp-content/uploads/2020/06/Crispy-Chicken-Burger-10.jpg'),
(5.95, 'Vegan Mushroom Bean Burger', 'https://www.thespruceeats.com/thmb/KAgMssHoQUmx30uuYL_FTahXA0A=/2048x1360/filters:fill(auto,1)/vegan-mushroom-bean-burger-recipe-3378623-13_preview1-5b241897fa6bcc0036d2c9bf.jpeg'),
(6.45, 'Vegan Sweet Potato Burger', 'https://thishealthykitchen.com/wp-content/uploads/2019/03/vegan-sweet-potato-burgers-Feat-Image-Square-1200x1200-1.jpg'),
(6.95, 'Crispy Fish Burger with Jalapeno Mayo', 'https://www.unileverfoodsolutions.com.au/dam/global-ufs/mcos/ANZ/calcmenu/recipes/AU-recipes/fish-&-other-seafood-dishes/crispy-fish-burger-with-jalapeno-tartare-sauce/main-header.jpg'),
(5.95, 'Spicy Chicken Burger', 'https://thecozyapron.com/wp-content/uploads/2014/03/spicy-chicken-sandwich_thecozyapron_1.jpg');


INSERT INTO users(whole_name, phone_number, email)
VALUES ('Bob Ross', '111-111-1111', 'BobRoss@gmail.com'),
('Bob Builder', '222-222-2222', 'BobBuilder@gmail.com'),
('Charlie Chaplin', '333-333-3333', 'CharlieChaplin@hotmail.com');

INSERT INTO orders(users_id, order_complete, created_at, estimate_time_minute, started_at, completed_at, bill_paid, message)
VALUES (1, true, '2022-06-06 20:15:00', 25, '2022-06-06 20:20:00', '2022-06-06 20:21:00', true, 'Your order is ready Mr. Ross'),
(2, true, '2022-06-06 `19:15:00', 25, '2022-06-06 19:30:00', '2022-06-06 19:45:00', true, 'Your order is ready Mr. Builder'),
(3, true, '2022-06-06 10:15:00', 25, '2022-06-06 10:20:00', '2022-06-06 10:21:00', true, 'Your order is ready Mr. Chaplin');

INSERT INTO order_items(items_id, order_id, quantity)
VALUES (1, 2, 3), (2, 3, 4), (3, 4, 5);

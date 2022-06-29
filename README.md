# Food-Ordering WebApp “Bite Me Burger”

- Welcome to Bite Me Burger! A food ordering experience for fictitious restaurant where user can select desired menus, add items to cart and place an order for pick-up
- Notification will be sent by using SMS telecomm API service, Twilio  when the order is ready with order details and estimated preparation time.

## Final Product

_Main Page_
![Main](https://user-images.githubusercontent.com/100962211/176346364-2d40aaee-99e1-4bb5-8087-effd1a8f9a5e.png)
_Check-Out Page_
![check-out](https://user-images.githubusercontent.com/100962211/176346397-b2eec2cb-48bb-45bc-b06d-91f40880db3f.png)
_Incomplete Order(Admin Page)_ 
![incomplete-order](https://user-images.githubusercontent.com/100962211/176346408-4e68bd10-f241-45b5-89b5-93b6c630a2f5.png)

_"Bite Me Burger" Project Demo_
![Bite-Me-Burger-Demo](https://user-images.githubusercontent.com/100962211/176345778-104dc511-40db-4c91-b151-e22035dbf8cb.gif)

## Getting Started
1. Install dependencies: `npm i`
2. Fix to binaries for sass: `npm rebuild node-sass`
3. Reset database: `npm run db:reset`
  - Check the db folder to see what gets created and seeded in the SDB
4. Run the server: `npm run local`
  - Note: nodemon is used, so you should not have to restart your server
5. Visit `http://localhost:8080/`

## Dependencies
- chalk: ^2.4.2,
- dotenv: ^2.0.0,
- ejs: ^2.6.2,
- express: ^4.17.1,
- morgan: ^1.9.1,
- pg: ^8.5.0,
- sass: ^1.35.1,
- twilio: ^3.77.2
- "nodemon": ^2.0.10


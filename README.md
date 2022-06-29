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

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information 
  - username: `labber` 
  - password: `labber` 
  - database: `midterm`
3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Reset database: `npm run db:reset`
  - Check the db folder to see what gets created and seeded in the SDB
7. Run the server: `npm run local`
  - Note: nodemon is used, so you should not have to restart your server
8. Visit `http://localhost:8080/`

## Dependencies

- Node 10.x or above
- NPM 5.x or above
- PG 6.x

// Client facing scripts here

// MAKES REQUEST AND ASSEMBLE THE MENU BASED ON ALL MENU ITEMS FUNCTION //
// import { allMenuItems }

// Function getAllItems: GET our burger menu's information(name,price,description) from the database

$(() => {
  getAllOrders();
});

const getAllOrders = () => {
  $.ajax({
    url: `/user/view_cart/${localStorage.getItem(`finalOrderId`)}`,
    type: "GET",
    success: (result) => {
      console.log(result)
        $(".box-container").append(renderOrderItems(result));
    },
    error: (err) => {
      console.log("error:", err.message);
    },
  }); 
};

const renderOrderItems = (orders) => {
  console.log(orders)
  const data = order.created_at.split("T");
  const date = data[0];
  const time = data[1].split('.')[0];
  const { whole_name, email, phone_number, price, created_at } = orders[0];

  const orderInfo = orders.map((order) => {
    return ` <span> ${order.item_name} (x ${order.quantity}) </span>`

  })
    const totalPrice = orders.reduce((previous, current) => {
      console.log(previous.price, current.price)

      return previous + Number(current.price);
    }, 0)
    const $orderList = `
  <div class="box">
  <p>Name: <span>${whole_name}</span></p>
  <p>Email: <span>${email}</span></p>
  <p>Phone number: <span>${phone_number}</span></p>
  <p>Your orders: ${orderInfo}</p>

    <p>Total price: <span>$${totalPrice}</span></p>
    <p>Order placed: <span>${date + " " + time}</span></p>

  </div>
`;
console.log($orderList)
    $(".box-container").append($orderList);



  return $orderList;
};

// Client facing scripts here

// MAKES REQUEST AND ASSEMBLE THE MENU BASED ON ALL MENU ITEMS FUNCTION //
// import { allMenuItems }

// Function getAllItems: GET our burger menu's information(name,price,description) from the database

$(() => {
  getAllOrders();
});

const getAllOrders = () => {
  $.ajax({
    url: "/user/view_cart",
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

const renderOrderItems = (order) => {
  console.log(order);
  const data = order.created_at.split("T");
  const date = data[0];
  const time = data[1].split('.')[0];
  const $orderList = `
              <div class="box">
              <p>Name: <span>${order.whole_name}</span></p>
              <p>Email: <span>${order.email}</span></p>
              <p>Phone number: <span>${order.phone_number}</span></p>
                <p>Your orders: <span> ${order.item_name} </span></p>
                <p>Total price: <span>${order.price}</span></p>
                <p>Order placed: <span>${date + " " + time}</span></p>
              </div>
            `;
  return $orderList;
};

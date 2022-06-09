// Client facing scripts here

// MAKES REQUEST AND ASSEMBLE THE MENU BASED ON ALL MENU ITEMS FUNCTION //
// import { allMenuItems }

// Function getAllItems: GET our burger menu's information(name,price,description) from the database

$(() => {
  getAllOrders();
  // $(".order-status").on("click", function (e) {
  //   e.preventDefault();
  //   $(".choose-order").text("");
  // });
});

const getAllOrders = () => {
  $.ajax({
    url: "/user/orders",
    type: "GET",
    success: (result) => {
      for (const order of result.orders) {
        if (order.users_id === 1) {
        $(".box-container").append(renderOrderItems(order));
        }
      }
    },
    error: (err) => {
      console.log("error:", err.message);
    },
  });
};

const renderOrderItems = (order) => {
  const $orderList = `
              <div class="box">
              <p>Name: <span>${order.whole_name}</span></p>
              <p>Email: <span>${order.email}</span></p>
              <p>Phone number: <span>${order.phone_number}</span></p>
                <p>Your orders: <span> ${order.item_name} </span></p>
                <p>Total price: <span>${order.price}</span></p>
                <p>Order placed: <span>${order.created_at}</span></p>

                <p>Completed at: <span>${order.completed_at}</span></p>
              </div>
            `;
  return $orderList;
};

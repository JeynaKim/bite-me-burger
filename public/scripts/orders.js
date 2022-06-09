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
    url: "/user/order",
    type: "GET",
    success: (result) => {
      for (const order of result.items) {
        console.log(order);
        $(".box-container").append(renderOrderItems(order));
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
                <p>placed on : <span>${order.created_at}</span></p>
                <p>name : ${order.user_id}</span>
                <p>your orders : <span>BiteMe Burger (1), Chicken Sandwich (2) </span></p>
                <p>total price : <span>${order.price}</span></p>
                <p>payment method : <span>cash on delivery</span></p>
                <p>payment status : <span>${order.message}</span></p>
                <p>order placed : <span>${order.created_at}</span></p>
                <p>completed at : <span>${order.completed_at}</span></p>
              </div>
            `;
  return $orderList;
};

// Client facing scripts here

// MAKES REQUEST AND ASSEMBLE THE MENU BASED ON ALL MENU ITEMS FUNCTION //
// import { allMenuItems }

// Function getAllItems: GET our burger menu's information(name,price,description) from the database

$(() => {
  getAllIncompleteOrders();
  getAllCompleteOrders();
});

const getAllIncompleteOrders = () => {
  $.ajax({
    url: "/admin/orders",
    type: "GET",
    success: ({orders}) => {
      // console.log(orders);
      for (const order of orders) {
        console.log(order);
        if(!order.order_complete) {
        $(".incomplete-orders").append
        (renderIncompleteOrderItems(order));
        }
      }
    },
    error: (err) => {
      console.log("error:", err.message);
    },
  });
};

const renderIncompleteOrderItems = (order) => {
  const $orderList = `
              <section class="orders">
              <div class="box-container">
                <div class="box">
                <p>Customer name: <span>${order.whole_name}</span></p>
                <p>Customer email: <span>${order.email}</span></p>
                <p>Customer phone number: <span>${order.phone_number}</span></p>
                  <p>Customer order: <span> ${order.item_name} </span></p>
                  <p>Total price: <span>${order.price}</span></p>
                  <p>Order placed: <span>${order.created_at}</span></p>
                  <p>Estimated time: <span>${order.estimate_time_minute}</span></p>
<div>
                  <form action="/admin" class="estimate-time-btn" method="post">
                    <input type="number" name="name" required>
                    <input type="hidden" name="order_id" value="${order.order_id}">
                    <input type="submit" value="Estimated Time For Pickup" class="btn order-btn btn-primary estimate-btn">
                  </form>
                  <div>

                    <img src="https://cdn-icons-png.flaticon.com/512/4698/4698094.png" class="completed-icon">
                    <input type="submit" value="Order Completed" class="btn order-btn btn btn-outline-success completed-btn">
                </div>
                </div>
             </section>
            `;
  return $orderList;
};


const getAllCompleteOrders = () => {
  $.ajax({
    url: "/admin/orders",
    type: "GET",
    success: (result) => {
      for (const order of result.orders) {
        if(order.order_complete) {
        $(".complete-orders").append(renderCompleteOrderItems(order));
        }
      }
    },
    error: (err) => {
      console.log("error:", err.message);
    },
  });
};

const renderCompleteOrderItems = (order) => {
  const $orderList = `
  <section class="orders">
  <div class="box-container">
    <div class="box">
    <p>Customer name: <span>${order.whole_name}</span></p>
    <p>Customer email: <span>${order.email}</span></p>
    <p>Customer phone number: <span>${order.phone_number}</span></p>
      <p>Customer order: <span> ${order.item_name} </span></p>
      <p>Total price: <span>${order.price}</span></p>
      <p>Order placed: <span>${order.created_at}</span></p>
      <p>Completed at: <span>${order.completed_at}</span></p>

    </div>
  </div>
 </section>
                </div>
              </div>
             </section>
            `;
  return $orderList;
};


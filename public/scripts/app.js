// Client facing scripts here

// MAKES REQUEST AND ASSEMBLE THE MENU BASED ON ALL MENU ITEMS FUNCTION //
// import { allMenuItems }

// Function getAllItems: GET our burger menu's information(name,price,description) from the database

$(() => {
  getAllItems();
  getAllOrders();
});

const getAllOrders = () => {
  $.ajax({
    url:"/user/orders",
    type: "GET",
    success: (result) => {
      console.log('result:', result)
      const orders = result.orders;
      console.log('orders:', orders)
      for (const order of orders) {
        $(".order-items").append(renderOrderItems(order));
      }
    },
    error: (err) => {
      console.log('error:', err.message)
    },
  });
};

const renderOrderItems = (order) => {
  console.log(order);
  const $orderList = `
            <div class="box-container">
              <div class="box">
                <p>placed on: ${order.created_at} <span></span></p>
                <p>your orders: <span></span></p>
                <p>total price: <span></span></p>
                <p>payment status:${order.bill_paid} <span></span></p>
                <p>estimated time left : <span></span></p>
                <p>completed at: ${order.completed_at} <span></span></p>
              </div>

              </div>
            </div>
            `;
          return $orderList;
};


const getAllItems = () => {
  $.ajax({
    url: "/user/items",
    type: "GET",
    success: (result) => {
      const items = result.items;
      for (const item of items) {
        $(".choose-order").append(renderMenuItems(item));
      }
    },
    error: (err) => {
      console.log("ERROR", err.message);
    },
  });
};

const renderMenuItems = (item) => {
  // console.log(item);
  const $itemList = `
  <div class="col-3">
  <div class="items food1">
  <img class="burger-img1" src="../${item.item_photo_url}">
  <div class="text-center mt-4">
  <h5 class="text">${item.item_name}</h5>
  <p>${item.item_description}</p>
  </div>
  <div class="food-card-footer">
  <div class="btn-group align-items-center" role="group" aria-label="Basic example">
  <div class="quantity-and-price d-flex flex-row justify-content-between align-items-end">
  <div class="quantity">
    <input type="number" value="1" min="0" max="100" step="1"/>
  </div>
  <div class="d-flex align-items-center">
  <div class="pe-2">
  <h3 class="mb-0">$${item.price}</h3>
  </div>
  <button class="cards-icon-container btn btn-light">
  <i class="bx bx-cart" type="button" name="select" value="addToCart"></i>
  </button>
  </div>
  </div>
  </div>
  </div>
  `;
  return $itemList;
};



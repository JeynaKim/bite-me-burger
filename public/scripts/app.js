// Client facing scripts here

const res = require("express/lib/response");

// MAKES REQUEST AND ASSEMBLE THE MENU BASED ON ALL MENU ITEMS FUNCTION //
// import { allMenuItems }

// Function getAllItems: GET our burger menu's information(name,price,description) from the database

$(() => {
  getAllItems();
});

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
  console.log(item);
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


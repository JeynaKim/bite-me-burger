// Client facing scripts here

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

  <div class="row quantity-and-price align-items-center justify-content-end">
  <div class="col-4"></div>
  <div class="quantity col-2">
  <input type="number" value="1" min="0" max="100" step="1"/>
  </div>
  <div class="col-3">
  <h3 class="">$${item.price}</h3>
  </div>
  <div class="col-1">
  <button class="cards-icon-container btn btn-light">
  <i class="bx bx-cart" type="button" name="select" value="addToCart"></i>
  </button>
  </div>
  </div>
  </div>
  `;
  return $itemList;
};

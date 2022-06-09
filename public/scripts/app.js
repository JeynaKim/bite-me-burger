// Client facing scripts here

// MAKES REQUEST AND ASSEMBLE THE MENU BASED ON ALL MENU ITEMS FUNCTION //
// import { allMenuItems }

// Function getAllItems: GET our burger menu's information(name,price,description) from the database

$(() => {
  getAllItems();
});

const getAllItems = () => {
  $.get("/user/items")
    .then((result) => {
      const items = result.items;
      for (const item of items) {
        $(".choose-order").append(renderMenuItems(item));
      }
    })
    .then((response) => {
      $(".cart-add-button").on("click", function () {
        const itemId = $(this).find(".item_id").val();
        const itemQuantity = $(this).parent().parent().parent().find(".item_quantity").val();
        console.log(itemQuantity);
        localStorage.setItem(itemId, itemQuantity);
      });
    })
    .catch((err) => {
      console.log("ERROR", err.message);
    });
};

const renderMenuItems = (item) => {
  const $itemList = `
  <div class="col-3">
    <div class="items food1">
      <img class="burger-img1" src="../${item.item_photo_url}">
      <div class="text-center mt-4">
        <h5 class="text">${item.item_name}</h5>
        <p>${item.item_description}</p>
      </div>

    <div class="food-card-footer">
      <div class="quantity">
        <input class="item_quantity" type="number" value="1" min="0" max="100" step="1"/>
      </div>
      <div class="d-flex align-items-center">
        <div>
          <h3 class="mb-0">$${item.price}</h3>
        </div>
        <div>
          <button class="cards-icon-container btn btn-light cart-add-button">
            <input class="item_id" type="hidden" name="item_id" value="${item.id}">
            <i class="bx bx-cart" type="button" name="select" value="addToCart"></i>
          </button>
        </div>
      </div>
    </div>
    </div>
  </div>
  `;
  return $itemList;
};

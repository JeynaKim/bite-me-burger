$(() => {
  console.log(localStorage);
  $.get("/user/items")
  .then((result) => {
    const items = result.items;
    // const
    let cartTotal = 0;
    for (const item of items) {
      const quantity = localStorage.getItem(item.id);
      if (quantity > 0) {
        $(".cart_items").append(
          `
            <li class="list-group-item list-group-item-secondary">${item.item_name} - $${item.price} x ${quantity}</li>
          `
        );
      }
      cartTotal += Number(item.price);
    }
    $(".cart_items").append(
      `
        <li class="list-group-item list-group-item-primary">Total: $${cartTotal}</li>
      `
    );
  })
  .catch((err) => {
    console.log("ERROR", err.message);
  });

  $(".place_order_form").on("submit", function(e) {
    e.preventDefault();
    const userInfo = $(this).serialize();
    const data = { "user-info": userInfo };
    console.log(data);
    for (const key of Object.keys(localStorage)) {
      const quantity = localStorage.getItem(key);
      if (quantity > 0) {
        data[key] = localStorage.getItem(key);
      }
    }
    $.post("/admin/order/complete", data)
    .then(response => {
      window.location.replace("/orders");
    })
    .catch(error => {
      console.log(error);
    });
  })
});

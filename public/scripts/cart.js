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
        cartTotal += Number(item.price * quantity);
      }
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
    const data = { userInfo: userInfo };
    console.log(data);
    const items = [];

    for (const key of Object.keys(localStorage)) {
      const quantity = localStorage.getItem(key);
      if (quantity > 0) {
        // data[key] = localStorage.getItem(key);
        items.push({ id: key, quantity: localStorage.getItem(key) })
      }
    }
    data.items = items
    console.log(data.items)
    $.post("/admin/order/complete", userInfo + "&items=" + JSON.stringify(items))
    .then(response => {
      localStorage.clear();
      window.location.replace("/orders");
    })
    .catch(error => {
      console.log(error);
    });
  })
});

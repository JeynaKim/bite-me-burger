// Client facing scripts here

// STILL WORKING ON THIS SCRIPT //

$(() => {
  $.ajax({
    method: "GET",
    url: "/user/items"
  }).done((items) => {
    for(items of items) {
      $("<div>").text(items.item_name).appendTo($)
    }
  })
})

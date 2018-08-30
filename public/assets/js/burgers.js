// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".burgerAvailable").on("click", function(event) {
    var id = $(this).data("id");
    var newDevoured = $(this).data("newDevoured");

    var newDevouredState = {
      devoured: newDevoured
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(function() {
      console.log("changed devoured too", newDevoured);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  // Need Code for AJAX to DELETE a Burger

  // $("#Lamo").on("click", function(event) {
  //   var id = $(this).data("id");

  //   // Send the DELETE request.
  //   $.ajax("/api/burgers/" + id, {
  //     type: "DELETE",
  //     data: id
  //   }).then(function() {
  //     ;
  //     // Reload the page to get the updated list
  //     location.reload();
  //   });
  // });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#burger")
        .val()
        .trim(),
      devoured: $("[name=devoured]:checked")
        .val()
        .trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });
});

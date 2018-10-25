$(document).ready(function() {
  "use strict";
  $(document).on("click", ".burgerAvailable", function(e) {
    // $(".burgerAvailable").on("click", function(e) {
    // console.log(e);
    // console.log("IN SUBMIT");
    e.preventDefault();
    var newDevouredState = $(this).attr("data-devoured");
    console.log(Boolean(newDevouredState));
    var burgerId = $(this).attr("data-value");
    $.ajax("/burgers/" + burgerId, {
      type: "PUT",
      data: newDevouredState
    }).then(function(data) {
      console.log(data);
      // Reload the page to get the updated list
      location.reload();
    });
  });
  // Need Code for AJAX to DELETE a Burger
  $(document).on("click", ".deleteburger", function(event) {
    // $(".Lamo").on("click", function(event) {
    // console.log("delete button: ", event);
    event.preventDefault();
    var id = $(this).attr("data-value");
    // .toString();
    console.log(id);

    // );
    // $(this)
    //   .parent()
    //   .attr("data-devoured = " + !newDevouredState);

    //   console.log(
    //     "console.log from inside 'if' statement set up to make sure that the 'devoured' state is equal too true!"
    //   );
    // Send the DELETE request.
    $.get("/burgers/delete/" + id).then(function() {
      // Reload the page to get the updated list
      location.reload();
    });
    // } else {
    //   alert("Did Not Send!!");
    // }
  });

  $(document).on("click", ".addBurgerButton", function(eve) {
    eve.preventDefault();
    console.log(eve);
    // $(".addBurgerButton").on("click", function() {
    // Make sure to preventDefault on a submit event.
    // var id = $(this).data("id");
    console.log("--------------------------- work");

    var devouredState = $("#boogie").attr("data-devoured");
    var newDevState = Boolean(devouredState);
    console.log(
      "value of html input (true/FALSE) which we will use to allow this new burger to be placed in devour section: ",
      devouredState
    );
    console.log(
      "value of TRUE/false to allow this new burger to be devourable, this time set to a Boolean: ",
      newDevState
    );
    var newBurger = {
      name: $("#boogie")
        .val()
        .trim(),
      devoured: devouredState
    };
    console.log("burger name from user input in the form", newBurger.name);
    console.log(
      "value of true/false to allow this new burger to be devourable, this time set to a !Boolean: ",
      !newDevState
    );

    // Send the POST request.$.post( "test.php", { name: "John", time: "2pm" } )
    $.ajax({
      type: "POST",
      url: "/new",
      data: newBurger,
      success: 200,
      dataType: "JSON"
    })

      // $.post("/new", [newBurger], function(error, data) {
      //     if (error) {
      //       throw error;
      //     } else {
      //       location.reload();
      //       console.log(data, "POST AJAX");
      //       console.log("successfully sent info of new burger to ORM");
      //     }
      //   // type: "POST",
      //   // data: newBurger
      // });

      .then(function(x) {
        console.log(x, "POSTED AJAX");
        console.log("successfully created new burger: ", newBurger);
        // Reload the page to get the updated list
        location.reload();
      });
  });
});

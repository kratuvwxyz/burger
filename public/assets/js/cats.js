// Make sure we wait to attach our handlers until the DOM is fully loaded.
let burgersInPlace = [];

$(function () {
  $(".change-devoured").on("click", function (event) {
    event.preventDefault();
    var id = $(this).data("id");
    var newDevoured = $(this).data("neworder");

    var newDevouredState = {
      devoured: newDevoured,
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState,
    }).then(function () {
      console.log("changed devoured to", newDevoured);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".submit").on("click", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    let timeSeconds = 9;
    let orderName = $("#ca").val().trim();
    burgersInPlace.push(orderName);
    localStorage.setItem("items", JSON.stringify(burgersInPlace));
    let timer = setInterval(thisFunction, 1000);
    function thisFunction() {
      if (timeSeconds === 0) {
        clearInterval(timer);
        var newBurger = {
          name: $("#ca").val().trim(),
          devoured: $("[name=devoured]:checked").val(),
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger,
        }).then(function () {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        });
      } else {
        timeSeconds--;
        $(".placeinList")
          .html(`<li class="list-group-item d-flex align-items-center justify-content-between">
            ${orderName}
        <span>Cooking :<strong class="timeSeconds">${timeSeconds}</strong></span>
        </li>`);
      }
    }
  });

  $(".delete-burger").on("click", function (event) {
    event.preventDefault();
    var id = $(this).data("id");
    console.log(id);

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE",
    }).then(function () {
      console.log("deleted burger", id);
      // Reload the page to get the updated list
      location.reload();
    });
  });
});

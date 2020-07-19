// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");
       //var newDev = $(this).data("newDev");
  
    //   var newDevState = {
    //     devoured: newDev
    //   };
  
      //Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: { devoured: 1 }
      }).then(
        function() {
          //console.log("changed burger to", devoured);
          // Reload the page to get the updated list
          location.reload();
        }
     );
  });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#bu").val().trim(),
        //devoured: $("[name=newBurger]:checked").val().trim()
      };

      //need to return/display/store burger....
      $("#bu").val("");

      //if statement to call ajax post method...
      if (!newBurger.burger_name.lenth)
        return;
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  
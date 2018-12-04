
  // Get the form inputs
  $("#btnSubmit").on("click", function(event) {
      event.preventDefault();
      console.log(  $("#q1").val());
    console.log( $("#photo").val());
    console.log( $("#name").val());
      // Form validation
      function validateForm() {
        var isValid = true;
        $(".form-control").each(function() {
          if ($(this).val() === "") {
            isValid = false;
          }
        });

        $(".custom-select").each(function() {

          if ($(this).val() === "") {
            isValid = false;
          }
        });
        return isValid;
      }

      // If all required fields are filled
      if (validateForm()) {
        // Create an object for the user"s data
        var friendData = {
          name: $("#name").val(),
          photo: $("#photo").val(),
          scores: [
            $("#q1").val(),
            $("#q2").val(),
            $("#q3").val(),
            $("#q4").val(),
            $("#q5").val(),
            $("#q6").val(),
            $("#q7").val(),
            $("#q8").val(),
            $("#q9").val(),
            $("#q10").val()
          ]
        };
console.log(friendData);
        // Post the data to the friends API.
        $.post("/api/friends", friendData).then( function(data) {

          // Show match's name 
          $("#matchName").text(data.name);
          $("#matchPhoto").attr("src",data.photo);
          

          // Show the modal with the best match
          $("#results").modal("toggle");

        });
      } else {
        alert("Please fill out all fields and answer all questions before submitting!");
      }
    });

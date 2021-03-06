$(document).ready(() => {
  
    var jobInput = $("#jobtitle");
    var cityInput = $("#city");
    var stateInput = $("#state");
    var urlInput = $("#joburl");

   
  
    $.get("/api/user_data").then(data => {
      $(".member-name").text(data.email);
    });
  
   
  
    //When the create gig button is clicked, capture the user input and call the upsertGigs function
    $("#gigbtn").on("click", function () {
      event.stopPropagation();
      

      upsertGigs({
        jobTitle: jobInput.val().trim(),
        city: cityInput.val().trim(),
        state: stateInput.val().trim(),
        jobURL: urlInput.val().trim(),

      })
    });

    //update the gigs db with input
      function upsertGigs(data) {
        $.post("/api/gig", data)
        .then(res=>{
          if(res === "OK"){
            window.location = "/recruitergigs"
          }
        })
     
        }

});




    
      
    
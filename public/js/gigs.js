$(document).ready(() => {
  
    var jobInput = $("#jobtitle");
    var cityInput = $("#city");
    var stateInput = $("#state");
    var urlInput = $("#joburl");

   
  
    $.get("/api/user_data").then(data => {
      $(".member-name").text(data.email);
    });
  
   
  
    //When the create gig button is clicked, capture the user input
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
     //getGigs()
        }


        

         // This function grabs posts from the database and updates the view
  // function getGigs(recruiter) {
  //   userId = recruiter || "";
  //   if (userId) {
  //     userId = "/?User_id=" + userId;
  //   }
  //   $.get("/api/gigs" + userId, function(data) {
  //     console.log("Gigs", data);
  //     gigs = data;
  //     if (!gigs || !gigs.length) {
  //       displayEmpty(recruiter);
  //     }
  //     else {
  //       initializeRows();

  //     }
  //   });
  // }
      


});




    
      
    
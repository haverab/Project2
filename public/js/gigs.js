$(document).ready(() => {
  
    var jobInput = $("#jobtitle");
    var cityInput = $("#city");
    var stateInput = $("#state");
    var urlInput = $("#joburl");
    //var authorContainer = $(".author-container");
   
  
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

      function upsertGigs(gigData) {
        $.post("/api/gig", gigData)
      
      }




//       $.post("/api/gigs").then(data => {

//         for (var i = 0; i < data.length; i++) {
//           $(".container2").append(`
//       <div class="card">
//         <div class="card-body">
//           <h5 class="card-title">${data[i].jobTitle}</h5>
//           <p class="card-text">${data[i].city} ${data[i].state}</p>
//           <p class="card-text">${data[i].jobUrl}</p>
//           <a href=${data[i].jobUrl} target="_blank" class="btn btn-primary" id="gig">Gig It!</a>
//         </div>
//       </div>
//       `)
//         };
//     })
// })
      
    })
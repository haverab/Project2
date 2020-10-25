$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  var nameInput = $(".container2");
 

  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });

  

  $.get("/api/available").then(data=> {
    $(".container2").text(data)
 
  })

  // upsertgigs()

  // function upsertgigs(gigsData) {
  //   $.post("/api/available", gigsData)
  //     .then(getGigs);
  // }

  // function getAuthors() {
  //   $.get("/api/available", function(data) {
  //     var rowsToAdd = [];
  //     for (var i = 0; i < data.length; i++) {
  //       rowsToAdd.push(createGigRow(data[i]));
  //     }
  //     renderGigList(rowsToAdd);
  //     nameInput.val("");
  //   });
  // }

  // function renderGigList(rows) {
  
   
  //     gigList.prepend(rows);
  //   }
   
});

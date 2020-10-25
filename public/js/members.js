$(document).ready(() => {
  
  
  
 

  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });

  

  $.get("/api/gigs").then(data => {

    for (var i = 0; i < data.length; i++) {
      $(".container").append(`
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${data[i].jobTitle}</h5>
          <p class="card-text">${data[i].city} ${data[i].state}</p>
          <a href="#" class="btn btn-primary">Gig It!</a>
        </div>
      </div>
      `)
    }

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

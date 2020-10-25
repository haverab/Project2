$(document).ready(() => {
  
  var nameInput = $(".container2");
  
 

  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });

  $.get("/api/available").then(data => {

    for (var i = 0; i < data.length; i++) {
      $(".container").append(`
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${data[i].firstName} ${data[i].lastName}</h5>
          <p class="card-text">Email: ${data[i].email}</p>
          <a href="#" class="btn btn-primary">Hire Me!</a>
        </div>
      </div>
      `)
    }

  })

  $.get("/api/gigs").then(data => {

    for (var i = 0; i < data.length; i++) {
      $(".container").append(`
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${data[i].jobTitle} ${data[i].city}</h5>
          <p class="card-text">Email: ${data[i].state}</p>
          <a href="#" class="btn btn-primary">Hire Me!</a>
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

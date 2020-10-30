$(document).ready(() => {

//If the city search button is clicked, call the searchCity function
  $("#cityButton").on("click", function () {
    event.stopPropagation();
    searchCity();
  })

// When the clear button is clicked, refresh by rendering all gigs 
  $("#clearButton").on("click", function () {
    event.stopPropagation();


    $.get("/api/gig").then(data => {

      for (var i = 0; i < data.length; i++) {
        $(".container2").append(`
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${data[i].jobTitle}</h5>
        <p class="card-text">${data[i].city} ${data[i].state}</p>
        <p class="card-text">${data[i].jobUrl}</p> 
        <img src="stylesheets/computer.png">
        <a href=${data[i].jobUrl} target="_blank" class="btn btn-primary" id="gig">Gig It!</a>
      </div>
    </div>
    `)
      }

    })

  })


//function to render all gigs based on city and state entered in the input box by the user
  function searchCity() {

    let citySearch = $('#input').val().toLowerCase()
    let stateSearch = $('#state').val().toLowerCase()

    $(".container2").empty();
    $(".container2").append(`<div id= "main-row"class="grid-row"></div>`)

    $.get("/api/gig").then(data => {

      //console.log(data)

      for (var i = 0; i < data.length; i++) {
        if (data[i].city.toLowerCase() === citySearch && data[i].state.toLowerCase() == stateSearch) {

          console.log(data[i].city)
          $(".container2").append(`

      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${data[i].jobTitle}</h5>
          <p class="card-text">${data[i].city} ${data[i].state}</p>
          <p class="card-text">${data[i].jobUrl}</p>
          <img src="stylesheets/computer.png">
          <a href=${data[i].jobUrl} class="btn btn-primary" id="gig">Gig It!</a>
        </div>
      </div>
      `)
        }
      }


    })
  }


  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });


  //function to render all gigs
  $.get("/api/gig").then(data => {



    for (var i = 0; i < data.length; i++) {
      $(".container2").append(`
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${data[i].jobTitle}</h5>
          <p class="card-text">${data[i].city} ${data[i].state}</p>
          <p class="card-text">${data[i].jobUrl}</p>
          <img src="stylesheets/computer.png">
          <a href=${data[i].jobUrl} target="_blank" class="btn btn-primary" id="gig">Gig It!</a>
        </div>
      </div>
      `)
    }

  })


})

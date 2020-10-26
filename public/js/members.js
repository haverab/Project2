$(document).ready(() => {





  $("#cityButton").on("click", function () {
    event.stopPropagation();
    searchCity();
  })

  function searchCity() {

    let citySearch = $('#input').val()

    $(".container2").empty();
    $(".container2").append(`<div id= "main-row"class="grid-row"></div>`)

    $.get("/api/gigs").then(data => {

      //console.log(data)
      
      for (var i = 0; i < data.length; i++) {
        if (data[i].city === citySearch) {
        
        console.log(data[i].city)
          $(".container2").append(`

      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${data[i].jobTitle}</h5>
          <p class="card-text">${data[i].city} ${data[i].state}</p>
          <p class="card-text">${data[i].jobUrl}</p>
          <a href="${data[i].jobUrl}" class="btn btn-primary" id="gig">Gig It!</a>
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



      $.get("/api/gigs").then(data => {

        for (var i = 0; i < data.length; i++) {
          $(".container2").append(`
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${data[i].jobTitle}</h5>
          <p class="card-text">${data[i].city} ${data[i].state}</p>
          <p class="card-text">${data[i].jobUrl}</p>
          <a href="#" class="btn btn-primary" id="gig">Gig It!</a>
        </div>
      </div>
      `)
        }

      })


    });

$(document).ready(() => {
  
       
   
  
    $.get("/api/user_data").then(data => {
      $(".member-name").text(data.email);
    });
  
    
  
    $.get("/api/available").then(data => {
  
      for (var i = 0; i < data.length; i++) {
        if(data[i].userType!=="recruiter"){
        $(".container").append(`
        
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${data[i].firstName} ${data[i].lastName}</h5>
            <p class="card-text">${data[i].email}</p>
            <p class="card-text">${data[i].phone}</p>
            <p class="card-text">${data[i].userType}</p>
            <a href="mailto:${data[i].email}" class="btn btn-primary">Hire Me!</a>
          </div>
        </div>
        `)
      }
    }
  
    })

    
    $(".gig").on("click", function () {
      event.stopPropagation();
      $.get("/gigs")
        });
      
    })
    
  
$(document).ready(() => {
  
       
   
  
    $.get("/api/user_data").then(data => {
      $(".member-name").text(data.email);
    });
  
    
    //function to render all available candidates(students/recent grad) if the userType=recruiter
  
    $.get("/api/available").then(data => {
  
      for (var i = 0; i < data.length; i++) {
        if(data[i].userType!=="recruiter"){
        $(".container").append(`
        
        <div class="card" >
          <div class="card-body">
            <h5 class="card-title">${data[i].firstName} ${data[i].lastName}</h5>
            <p class="card-text">${data[i].email}</p>
            <p class="card-text">${data[i].phone}</p>     
            <p class="card-text">${data[i].message}</p>     
            <img src="${data[i].imgUrl}" id="cardImg"  class="animate__animated animate__tada" alt="alternatetext">                 
            <a href="mailto:${data[i].email}" class="btn btn-primary">Hire Me!</a>
          </div>
        </div>
        `)
      }
    }
  
    })

    //When the button is clicked, call route to show all gigs specific to the recruiter    
    $("#gigbtn").on("click", function () {
      event.stopPropagation();
      $.get("/gigs")
        });



       
      
    })
    
  
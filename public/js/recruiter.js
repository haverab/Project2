$(document).ready(() => {
  
       
   
  
    $.get("/api/user_data").then(data => {
      $(".member-name").text(data.email);
    });
  
    
  
    $.get("/api/available").then(data => {
  
      for (var i = 0; i < data.length; i++) {
        $(".container").append(`
        
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${data[i].firstName} ${data[i].lastName}</h5>
            <p class="card-text">${data[i].email}</p>
            <a href="#" class="btn btn-primary">Hire Me!</a>
          </div>
        </div>
        `)
      }
  
    })
    
  });
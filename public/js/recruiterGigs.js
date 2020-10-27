const init =()=>{
    $.get("/api/recruitergigs")
    .then(res=>{
        console.log(res)
    for (var i = 0; i < res.length; i++) {
        $(".container3").append(`
          <div class="card">
            <div class="card-body">
          
              <h5 class="card-title">JobTitle: ${res[i].jobTitle}</h5>
              <p class="card-text">${res[i].city} ${res[i].state}</p>
              
               </div>
          </div>
          `)
      }
    })
}
init()

  

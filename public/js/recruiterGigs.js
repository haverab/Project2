const init =()=>{
    $.get("/api/recruitergigs")
    .then(res=>{
        console.log(res)
    for (var i = 0; i < res.length; i++) {
        $(".container3").append(`
          <div class="card">
            <div class="card-body">
          
              <h4 class="card-title">JobTitle: ${res[i].jobTitle}</h4>
              <h5 class="card-text">${res[i].city} ${res[i].state}</h5>
              <hr>
               </div>
          </div>
          `)
      }
    })
}
init()

  

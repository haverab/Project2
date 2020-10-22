var trailsURL;
var job;



$('#submit').click(function () {
    job = $("#search-bar").val();
    var indeedURL = `https://rapidapi.p.rapidapi.com/search``https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=420fa54141903a76b9ac423622e9920d`
    $.ajax({
        url: indeedURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
     
        
        showJobs();
    })
})

//This function renders an array of trails based on the users current location or a city of their choice
function showJobs() {
    $(".splash-container").empty();
  
    
    $(".splash-container").append(`<div id= "main-row"class="grid-row"></div>`)
    //createAside ();
    $.ajax({
        url: trailsURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        $("#main-row").append(`<div id= "main-col"class="grid-col-8"></div>`)
        $("#main-col").append(`<section id= "displayBox" class= "slideshow-container"></section>`)
        $("#displayBox").append(`<div id= "displayBox1"class="row card-row"></div>`)
        let x = 1
        for (i = 0; i < response.trails.length; i++) {
            if (i === 5) {
                $("#displayBox").append(`<div id= "displayBox2"class="row card-row mySlides"></div>`)
                x = 2
            }
            

            $(`#displayBox${x}`).append(`<div id = "displayAll${i}"></div>`)
            $(`#displayAll${i}`).attr("class", "card col trailCard")
            // $(`#displayAll${i}`).attr("data-position", i)
            $(`#displayAll${i}`).attr("data-trailId", response.trails[i].id)
            // NAME 
            var trailname = $("<h4> ")
            $(trailname).html(response.trails[i].name)
            $(trailname).attr("id", i)
            $(`#displayAll${i}`).append(trailname)
          
        }

    })

}




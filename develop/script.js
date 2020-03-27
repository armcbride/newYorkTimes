var searchName = $("#search-term").val().trim();
   
    $("#run-search").on("click", function(event){
        event.preventDefault();
        var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchName + "api-key=R1a31F4tBjCUaM2ho8GtIFsrSdtXt30M" ;
        $.ajax({
            url: queryUrl,
            method: "GET"
        })
        
        .then(function(response){
        console.log(response.data);
        
        
        console.log(searchName);

        
        });
     
    })
var searchName = $("#search-term").val().trim();
   
    $("#run-search").on("click", function(event){
        event.preventDefault();
        var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchName + "api-key=B9Pap5ILlkpGw0xji42v1mq4ErAWc4aA" ;
        $.ajax({
            url: queryUrl,
            method: "GET"
        })
        
        .then(function(response){
        console.log(response.data);
        
        
        console.log(searchName);

        
        });
     
    })
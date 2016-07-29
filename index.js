 $(function (){
  $('input:submit').on('click', function(event){
    var beer 
    event.preventDefault(); 
    beer = $('#artist_name').val()

  $.ajax({    
    method: "GET",
    url: "https://api.brewerydb.com/v2/beer/oeGSxs?key=2cd702ee1233c8ef6a6d1c74507e587a",

  }).done(function(res) {
      res.artists.items[0].images.forEach(function(element) {
        var image = element.url
        $('.images').empty().append(`<img src=${image}>`)  
      })
    })
  })
})

// http://api.brewerydb.com/v2/beer/oeGSxs?key=2cd702ee1233c8ef6a6d1c74507e587a
// kick off function on click
// 247c8522b93a971f3eaa641d07aa8dc79210edc6
// 6f4eef2c65b21ff642aa80ea898edd1c27c44983
$(document).ready(() => {

    $('#artist_form').on('submit',function(event){
      let artist = $('#artist').val()
      $('#articles').empty()
      $('#artist_shows').remove()
      $('#location-input').remove()
      $('#location-submit').remove()
      $('#image').empty()
      $('.artist_name').empty()
      $('.albums').empty()
      $('#event_form').append(`<h3 id="artist_shows">${artist} Concerts by City:</h3><input id="location-input" type="text" ><input id="location-submit" type="submit">`)
      store.articles = []
      spotify_store.artist_albums = []
      event.preventDefault()
      var spotify = spotifyGetArtist(artist)
      articleAdapter(artist).then(function appendData() {
          renderArticles()
          appendAlbums()
        })
      
      })

      function renderArticles(){
          var articleTemplate = $('#article-template').html();
          var template = Handlebars.compile(articleTemplate);
          var htmlString = template({articles: store.articles.slice(0, 4)})
          $('.article-row').empty();
          $('.article-row').append(htmlString);
        }

      $('body').on('submit', '#event_form', function(event){
           event.preventDefault();
           let location = $('#location-input').val()
           let artist = $('#artist').val().replace((/[" "]/),"%20")
           var eventFind = findEventNear(artist,location)

       });//actions kicked off by second submit button

})//return results from APIs and and appends to HTML

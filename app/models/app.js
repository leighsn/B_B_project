// kick off function on click

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
      var article = articleAdapter(artist).then(function appendData() {
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

      // function renderAlbums(){
      //     var albumTemplate = $('#album-template').html();
      //     var template = Handlebars.compile(albumTemplate);
      //     var htmlString = template({artist_albums: spotify_store.artist_albums.slice(0, 4)})
      //     $('.album-row').empty();
      //     $('.album-row').append(htmlString);
      //   }

      $('body').on('submit', '#event_form', function(event){
           event.preventDefault();
           let location = $('#location-input').val()
           let artist = $('#artist').val().replace((/[" "]/),"%20")
           var eventFind = findEventNear(artist,location)

       });//actions kicked off by second submit button

})//return results from NYT API and append to HTML

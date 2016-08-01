// kick off function on click
$(document).ready(() => {

    $('#artist_form').on('submit',function(event){
      $('#articles').empty()
      $('#image').empty()
      $('.artist_name').empty()
      $('.albums').empty()
 //
 // 247c8522b93a971f3eaa641d07aa8dc79210edc6
 // 6f4eef2c65b21ff642aa80ea898edd1c27c44983
      store.articles = []
      spotify_store.artist_albums = []
      event.preventDefault()
      var artist = $('#artist').val()
      var spotify = spotifyGetArtist(artist)
      var article = articleAdapter(artist).then(function appendData() {
          appendArticles()
          appendAlbums()
        })
      })

  })

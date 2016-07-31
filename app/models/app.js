// kick off function on click
$(document).ready(() => {
  $(function(){
    $('#artist_form').on('submit',function(event){
      $('#articles').empty()
      $('.image').empty()
<<<<<<< HEAD
      $('.albums').empty()
=======
>>>>>>> 247c8522b93a971f3eaa641d07aa8dc79210edc6
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
  })

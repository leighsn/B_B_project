// kick off function on click
$(document).ready(() => {
  $(function(){
    $('#artist_form').on('submit',function(event){
      $('#articles').empty()
      $('.image').empty()
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

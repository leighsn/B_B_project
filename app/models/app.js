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
      $('.image').empty()
      $('.artist_name').empty()
      $('.albums').empty()
      $('#event_form').append(`<h3 id="artist_shows">${artist} Concerts by City:</h3><input id="location-input" type="text" ><input id="location-submit" type="submit">`)
      store.articles = []
      spotify_store.artist_albums = []
      event.preventDefault()
      var spotify = spotifyGetArtist(artist)
      var article = articleAdapter(artist).then(function appendData() {
          appendArticles()
          appendAlbums()
        })//return results from NYT API and append to HTML
    })//actions kicked off by first submit button


 $('body').on('submit', '#event_form', function(event){
      event.preventDefault();
      let location = $('#location-input').val()
      let artist = $('#artist').val().replace((/[" "]/),"%20")
      var eventFind = findEventNear(artist,location)

  });//actions kicked off by second submit button 

})

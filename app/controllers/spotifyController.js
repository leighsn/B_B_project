
function spotifyGetArtist(artist) {
  $.ajax({
    method: "GET",
    url: `https://api.spotify.com/v1/search?q=${artist}&type=artist`,
  }).done(function(artist) {
      var artist_id = artist.artists.items[0].id
      spotify_store.artist_albums.push({name: artist.artists.items[0].name, image: artist.artists.items[0].images[1].url})
      getAlbums(artist_id)
        })
    }

  function getAlbums(artist_id){
    $.ajax({
      method: "GET",
      url: `https://api.spotify.com/v1/artists/${artist_id}/albums`,
    }).done(function(albums) {
      // map the objects into a new object
      // if the album_type === album, add id and name into an object
      // pass the name and album id to the getTracks function
         albums.items.map(function(album) {
          if (album.album_type === 'album') {
             spotify_store.artist_albums.push({id: album.id, album_image: album.images[2].url, tracks: ""})
           }
        })
         getTracks()
      })
  }

  const getTracks = (function() {
    counter = 1
    for (var i = 1; i < 6; i++) {
      $.ajax({
        method: "GET",
        url: `https://api.spotify.com/v1/albums/${spotify_store.artist_albums[i].id}/tracks`
      }).done(function(tracks) {
        // create an array of tracks and then update it in the store for that album
        var artist_tracks = []
        for (var n = 0; n < tracks.items.length; n++) {
          artist_tracks.push(tracks.items[n].name)
        }
        spotify_store.artist_albums[counter].tracks = artist_tracks
        counter++
      })
    }
  })


  function appendAlbums() {
    $('#artist_image .container .row .col-sm-6 #image').append(`<img src=${spotify_store.artist_albums[0].image} height="500" width="450">`)
    $('.artist_name').append(`<h2> ${spotify_store.artist_albums[0].name}</h2>`)
    $('.albums').append(`<h3> Albums by ${spotify_store.artist_albums[0].name}</h3>`)

    for (var i = 1; i < 6; i++) {
      $('.albums').append(`<div id=album${[i]}><ul> <img src=${spotify_store.artist_albums[i].album_image} height="75" width="75"></ul></div>`)
      var album_tracks = spotify_store.artist_albums[i].tracks
        album_tracks.forEach((track)=>{
            $(`.albums #album${i} ul`).append(`<li> ${track}</li>`)
        })
    }
    $(function() {
      $('li').hide()
      // var hoverElem = null;
      //   $('*').hover(function() {hoverElem = this});

      $('#album1 ul').mouseenter(function() {
        $('#album1 ul li').show()
      })
      $('ul').mouseleave(function() {
        $('li').hide()
      })
      $('#album2 ul').mouseenter(function() {
        $('#album2 ul li').show()
      })
      $('ul').mouseleave(function() {
        $('li').hide()
      })
        $('#album3 ul').mouseenter(function() {
        $('#album3 ul li').show()
      })
      $('ul').mouseleave(function() {
        $('li').hide()
      })
        $('#album4 ul').mouseenter(function() {
        $('#album4 ul li').show()
      })
      $('ul').mouseleave(function() {
        $('li').hide()
      })
        $('#album5 ul').mouseenter(function() {
        $('#album5 ul li').show()
      })
      $('ul').mouseleave(function() {
        $('li').hide()
      })
    })
  }


// map
// url: `https//api.spotify.com/v1/artists/${artist id}/albums`,
// get the artist id from
//   https//api.spotify.com/v1/search?q=" + artist_name + "&type=artist

// use the artist id to get the artist's album ids from
//   https//api.spotify.com/v1/artists/{artist id}/albums

// use the album ids to get the album tracks from
//   https://api.spotify.com/v1/albums/{id}/tracks

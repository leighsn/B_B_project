
// to do:
// make the store a nested hash of {name, id, {albums, tracks}}
// post/format the data

const spotify_store = {
  artist_albums: [],
}

  function spotifyGetArtist(artist) {
  // $('input:submit').on('click', function(event){
    // $('images').empty()
    // var artist_name 
    // event.preventDefault(); 
    // artist_name = $('#artist_name').val()

  $.ajax({    
    method: "GET",
    url: `https://api.spotify.com/v1/search?q=${artist}&type=artist`,
  }).done(function(artist) {    
      var artist_id = artist.artists.items[0].id
      spotify_store.artist_albums.push({name: artist.artists.items[0].name, image: artist.artists.items[0].images[1].url})
      getAlbums(artist_id)
        })
      // })
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
             spotify_store.artist_albums.push({id: album.id, name: album.name, tracks: ""})
           }        
        })
         getTracks()
      })
  }

  const getTracks = (function() {
    counter = 1
      
    for (var i = 1; i < 5; i++) { 
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

  // (postTracks())


 
  



// map
// url: `https//api.spotify.com/v1/artists/${artist id}/albums`,    
// get the artist id from 
//   https//api.spotify.com/v1/search?q=" + artist_name + "&type=artist

// use the artist id to get the artist's album ids from 
//   https//api.spotify.com/v1/artists/{artist id}/albums

// use the album ids to get the album tracks from
//   https://api.spotify.com/v1/albums/{id}/tracks
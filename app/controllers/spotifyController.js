function spotifyGetArtist(artist) {
  $.ajax({
    method: "GET",
    url: `https://api.spotify.com/v1/search?q=${artist}&type=artist`,
  }).done(function(artist) {
    var artistId = artist.artists.items[0].id
    var artistResult = artist.artists.items[0]
    var artist = new Artist(artistResult.name, artistResult.images[1].url, artistId, artistResult.popularity, artistResult.followers.total)

    getAlbums(artistId)
    })
}

function getAlbums(artistId){
  $.ajax({
    method: "GET",
    url: `https://api.spotify.com/v1/artists/${artistId}/albums`,
  }).done(function(albums) {
    var albums = albums.items
    albums.forEach((album)=> {
      if (album.album_type === 'album') {
      new Album(album.id, album.name, album.images[2].url, artistId)
      }
    })
    artist_store.artist[0].albums.splice(6,14)
    var storedAlbums = artist_store.artist[0].albums
    getTracks(storedAlbums)
  })
}

  function getTracks(albums) {
      albums.forEach((album) =>
      $.ajax({
          method: "GET",
          url: `https://api.spotify.com/v1/albums/${album.id}/tracks`
        }).done(function(tracks) {
          var trackArray = tracks.items
          trackArray.forEach((track) =>
            new Track(track.name, album.id)
          )
        })
      )
    }


  function compareArtists (){
    // https://api.spotify.com/v1/artists/{id}/related-artists
      $.ajax({
        method: "GET",
        url: `https://api.spotify.com/v1/artists/${artist_store.artist[0].id}/related-artists`
      }).done(function(artists) {
          related_artists = []
            artists.artists.forEach((artist)=> {
              related_artists.push({id: artist.id, name: artist.name, popularity: artist.popularity, followers: artist.followers.total})
            })
            drawChart(related_artists)
        })
    }
  
      function drawChart(related_artists) {
       // Create the data table.
       // <a class="btn btn-embossed btn-info" href="#" role="button">View Article</a></p>
        var data = new google.visualization.DataTable();
        if (related_artists !== undefined) {
          data.addColumn('string', 'Artist');
          data.addColumn('number', 'Followers');
          related_artists.forEach((artist)=> {
            data.addRows([
            [artist.name, artist.followers],
            ]);
          })
        // Set chart options
        var options = {'title':'Related Artists by popularity',
                       'width':800,
                       'height':700,
                       'colors': ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
                        'legend': 'none'};
  
        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
        chart.draw(data, options);
  
        // google.visualization.events.addListener(chart, 'select', selectHandler);
  
        //   function selectHandler(e) {
        //     chart.setSelection(chart, kickOff())
        //   }
        }
      }
  //
  //
  //
  //
  //
  //
  //
  //
  //
  // function appendAlbums() {
  //   $('#artist_image .col-sm-6 #image').append(`<img src=${spotify_store.artist_albums[0].image} height="500" width="450">`)
  //   $('.artist_name').append(`<h2> ${spotify_store.artist_albums[0].name}</h2>`)
  //   $('.albums').append(`<h3> Albums by ${spotify_store.artist_albums[0].name}</h3>`)
  //
  //   for (var i = 1; i < 6; i++) {
  //     $('.albums').append(`<div id=album${[i]}><ul> <img src=${spotify_store.artist_albums[i].album_image} height="75" width="75"></ul></div>`)
  //     var album_tracks = spotify_store.artist_albums[i].tracks
  //       album_tracks.forEach((track)=>{
  //           $(`.albums #album${i} ul`).append(`<li> ${track}</li>`)
  //       })
  //   }
  //


  // (function () {
  //   if (artist_store.artist[0] !== undefined) {
  //     $(`.track-names`).hide()
  //     $(`#${artist_store.artist[0].albums[0].id}`).mouseenter(function() {
  //       $(`#${artist_store.artist[0].albums[0].id}`).show()
  //     })
  //     $(`#${artist_store.artist[0].albums[0].id}`).mouseleave(function() {
  //       $(`#${artist_store.artist[0].albums[0].id}`).hide()
  //     })
  //   }
  // }())

    // $(function() {
    //   if (artist_store.artist[0] !== undefined) {
    //     $(`.artist-albums .album-tracks`).hide()
    //     $(`.artist-albums .album-tracks #${artist_store.artist[0].albums[0].id}`).mouseenter(function() {
    //       $(`.artist-albums .album-tracks #${artist_store.artist[0].albums[0].id}`).show()
    //     })
    //     $(`.artist-albums .album-tracks #${artist_store.artist[0].albums[0].id}`).mouseleave(function() {
    //       $(`.artist-albums .album-tracks #${artist_store.artist[0].albums[0].id}`).hide()
    //   })
    // }
    // })

// kick off function on click


$(document).ready(() => {

// 247c8522b93a971f3eaa641d07aa8dc79210edc6
// 6f4eef2c65b21ff642aa80ea898edd1c27c44983function kickItOff() {

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
    artist_store.artist = []
    $(`.track-names`).hide()
    event.preventDefault()
    var spotify = spotifyGetArtist(artist)
    articleAdapter(artist).then(function appendData() {
        renderArticles()
        renderArtist()
        renderAlbums()
        // hideMe()
        // appendAlbums()
        compareArtists()
      })//return results from NYT API and append to HTML
  })//actions kicked off by first submit button

  $('body').on('submit', '#event_form', function(event){
     event.preventDefault();
     let location = $('#location-input').val()
     let artist = $('#artist').val().replace((/[" "]/),"%20")
     var eventFind = findEventNear(artist,location)

  });//actions kicked off by second submit button
})



  function renderArticles(){
      var articleTemplate = $('#article-template').html();
      var template = Handlebars.compile(articleTemplate);
      var htmlString = template({articles: store.articles.slice(0, 4)})
      $('.article-row').empty();
      $('.article-row').append(htmlString);
    }

  function renderArtist() {
    var artistTemplate = $(`#artist-template`).html();
    var template = Handlebars.compile(artistTemplate);
    var htmlString = template({artistImage: artist_store.artist[0].artistImage})
    $('.artist-name').empty();
    $('.artist-name').append(`<h3>${artist_store.artist[0].name}</h3>`);
    $('.artist-image').empty();
    $('.artist-image').append(htmlString);
  }

  function renderAlbums() {
    var albumTemplate = $(`#album-template`).html();
    var template = Handlebars.compile(albumTemplate);
    var htmlString = template({albums: artist_store.artist[0].albums})//, tracks: artist_store.artist[0].albums.tracks.name})
    // var trackString = template({tracks: artist_store.artist[0].albums.tracks.name})

    $('.artist-albums').empty();
    $('.artist-albums').append(htmlString);
    // $('.album-tracks').empty();
    // $('.album-tracks').append(trackString);

    // albumStore.forEach((album)=> {
    //   var htmlString = template({albums: album.albumImage})
    //   $('.artist-albums').append(htmlString);
    // })


  // function renderTracks() {
  //   var albumTemplate = $(`#album-template`).html();
  //   var template = Handlebars.compile(albumTemplate);
  //   var htmlString = template({tracks: artist_store.artist[0].albums.tracks.name})
  //   $('.album-tracks').append(htmlString);
  // }

    $('body').on('mouseenter', '.track-names', function(event){
        // $(`.track-names`).hide()
          $(`#${artist_store.artist[0].albums[0].id}`).show()
      })
    $('body').on('mouseleave', '.track-names', function(event){
          $(`#${artist_store.artist[0].albums[0].id}`).hide()
        })
    $('body').on('mouseenter', '.track-names', function(event){
        // $(`.track-names`).hide()
          $(`#${artist_store.artist[0].albums[1].id}`).show()
      })
    $('body').on('mouseleave', '.track-names', function(event){
          $(`#${artist_store.artist[0].albums[1].id}`).hide()
        })

    $('body').on('mouseenter', '.track-names', function(event){
        // $(`.track-names`).hide()
          $(`#${artist_store.artist[0].albums[2].id}`).show()
      })
    $('body').on('mouseleave', '.track-names', function(event){
          $(`#${artist_store.artist[0].albums[2].id}`).hide()
        })
        // $('body').on('mouseenter', '.track-names', function(event){
        //     // $(`.track-names`).hide()
        //       $(`#${artist_store.artist[0].albums[3].id}`).show()
        //   })
        // $('body').on('mouseleave', '.track-names', function(event){
        //       $(`#${artist_store.artist[0].albums[3].id}`).hide()
        //     })
        // $('body').on('mouseenter', '.track-names', function(event){
        //     // $(`.track-names`).hide()
        //       $(`#${artist_store.artist[0].albums[4].id}`).show()
        //   })
        // $('body').on('mouseleave', '.track-names', function(event){
        //       $(`#${artist_store.artist[0].albums[4].id}`).hide()
        //     })
        //
        // $('body').on('mouseenter', '.track-names', function(event){
        //     // $(`.track-names`).hide()
        //       $(`#${artist_store.artist[0].albums[5].id}`).show()
        //   })
        // $('body').on('mouseleave', '.track-names', function(event){
        //       $(`#${artist_store.artist[0].albums[5].id}`).hide()
        //     })
  }//return results from APIs and and appends to HTML


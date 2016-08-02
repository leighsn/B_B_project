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
    artist_store.artist = []
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
     findEventNear(artist,location).then(function appendConcerts() {
      debugger
      renderConcerts()
     })
  });//actions kicked off by second submit button





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

  function renderConcerts(){
    debugger
    var concertTemplate = $(`#concert-template`).html();
    var template = Handlebars.compile(concertTemplate);
    var htmlString = template({concerts: concert_store.concerts})
    $('.concert-row').empty();
    $('.concert-row').append(htmlString);
  }

  function renderAlbums() {
    var albumTemplate = $(`#album-template`).html();
    var template = Handlebars.compile(albumTemplate);
    var htmlString = template({albums: artist_store.artist[0].albums})
    // var trackString = template({tracks: artist_store.artist[0].albums.tracks.name})

    $('.artist-albums').empty();
    $('.artist-albums').append(htmlString);
    $('.track-names').hide()
    $('.col-sm-2').on('mouseenter', function(event){
        // $(`.track-names`).hide()
          $('.track-names').show()
      })
    $('.col-sm-2').on('mouseleave', function(event){
          $('.track-names').hide()
        })
        var modal = $('#myModal')
        // Get the image and insert it inside the modal - use its "alt" text as a caption
        var img = $('#myImg');
        var modalImg = $('#img01');
        img.onclick = function(){
            modal.style.display = "block";
            modalImg.src = this.src;
            modalImg.alt = this.alt;
            captionText.innerHTML = this.alt;
        }
        // Get the <span> element that closes the modal
        var span = $('.close')[0];
        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
          modal.style.display = "none";
        }
      }
  })//return results from APIs and and appends to HTML

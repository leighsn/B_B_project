var rootURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json"
const store = {
  articles: []
}

class Articles{

  constructor(headline, snippet, web_url) {
    this.headline = headline
    this.snippet = snippet
    this.web_url = web_url
    store.articles.push(this)
  }
}

 
  // function render(articles) {
  //   debugger
  //   let orange = $(`#articles_template`).html()
  //   let template = Handlebars.compile(orange)
  //   var articleInfo = template(articles)
  //     $(`#articles`).empty()
  //     $(`#articles`).append(articleInfo)
  // }
  // render(articles)
// function getArtistNYT(){
//   $('#artist_form').on('submit',function(event){
//     debugger
//     $('#articles').empty()
//     event.preventDefault()
//     });
//     //render handlebars template
//     function render(articles) {
//       debugger
//       let orange = $(`#articles_template`).html()
//       let template = Handlebars.compile(orange)
//       var articleInfo = template(articles)
//         $(`#articles`).empty()
//         $(`#articles`).append(articleInfo)
//     }
//         //get uri for API
//     var artist = $('#artist_name').val();
//     var uri = rootURL += '?' + $.param({
//       'api-key': "d16a974a6cd841c183bcce7d8cb34816",
//       'q': artist
//     })
//     //ajax API request
//     $.ajax({
//       url: uri,
//       method: 'GET',
//       }).done(function(result) {
//         // debugger
//         // result.response.docs.forEach((obj)=>{
//         //   // debugger
//         //  var article_headline = obj.headline.main
//         //  var article_snippet = obj.snippet
//         //  var article_url = obj.web_url
//         //  var link = `<a href=${article_url}>${article_headline}</a>`
//
//         //  // $(`#articles`).append(link)
//         //  // $(`.snippet`).append(article_snippet)
//         //  debugger
//         // })//outside map
//         // //start appending cwap
//         var articles = result.response.docs
//          // render(articles)
//         render(articles)
//         // $(`.article_title`).append(article_headline)
//       }).fail(function(err) {
//         throw err;
//       });
//
//   // return false;
// }
//
// $(document).ready(() => {
//   getArtistNYT()
// })
//
//
//
// const store = {
//   artists: []
// }
//
// class Artist{
//   constructor(name, popularity, imageUrl){
//     this.name = name;
//     this.popularity = popularity;
//     this.imageUrl = imageUrl;
//     store.artists.push(this);
//   }
// }
//
// function artistAdapter(artist_name){
//   return $.ajax({
//       method: "GET",
//       url: "https://api.spotify.com/v1/search?query=" + artist_name + "&type=artist",
//
//     }).done(function(data){
//       var artistData = data.artists.items[0];
//
//       new Artist(artistData.name, artistData.popularity, artistData.images[0].url)
//       // data.artists.items[0].images.forEach(function(element){
//       // })
//     })
// }
//
//
// $(function(){ // on document ready,
//   $('input:submit').on('click', function(event){ //attach a listener to my submit, such that on click
//     var artist_name;
//     $('.images').empty();
//     event.preventDefault(); // we prevent default
//     artist_name = $('#artist_name').val(); // we get the artist name
//
//     var artist = artistAdapter(artist_name).then(function(){
//       store.artists.forEach(function(artist){
//       $('.images').append('<img src="' +  artist.imageUrl + '" >');
//     })
//     })
//   })
// })
// // nyt key books
// // e566c3ccb7a044fdbda8fa4a46c33930
// //
// //
// //
// // goodreads api
// // key: UEqGcQdC5a19xHNk6C7WQ
// // secret: mEAjMFcs3WQh9oNUgS4Df2LButFV73zbgbkFan8c

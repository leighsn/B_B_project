// hits api and grabs data
function articleAdapter(artist) {
  var uri = rootURL += '?' + $.param({
    'api-key': "d16a974a6cd841c183bcce7d8cb34816",
    'q': artist
  })
  return $.ajax({
    method: "GET",
    url: uri
  }).done(function(result) {
    var articleResults = result.response.docs
    articleResults.forEach((article) => new Articles(article.headline.main, article.snippet, article.web_url) )
  })
}

// function appendArticles() {
//
//   store.articles.slice(0, 4).forEach((article)=>{
//     // $('#artist_articles .row .col-sm-6 #articles').append(`<img src=${article.multimedia} height="50", width="100">`)
//     $('#article1').append(`<h4>${article.headline}</h4></div>`)
//     // $('#articles').append(`<p>${article.snippet}<p>`)
//     // $('#articles').append(`<a href=${article.web_url}>Link to Article</a>`)
//     })
// }

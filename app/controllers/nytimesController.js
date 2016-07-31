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

// adds articles to the page
function appendArticles() {
  store.articles.forEach((article)=>{
    $('#articles').append(`<div class="headline"><h3>${article.headline}</h3></div>`)
    $('#articles').append(`<div class="snippet">${article.snippet}</div>`)
    $('#articles').append(`<div class="link"><a href=${article.web_url}>Link to Article</a>`)
    })
}

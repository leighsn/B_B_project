//http://api.bandsintown.com/artists/drake/events/search.json?api_version=2.0&app_id=eman125&location=New+York,NY&radius=25
const rootUri = 'http://api.bandsintown.com/artists/'
const app_id = 'eman14'

function findEventNear(artist,location) {
  var formattedLocation = locationFormatter(location) 
  var myUri = rootUri + artist + '/events/search.json?api_version=2.0&app_id='+app_id+'&location='+formattedLocation+'&radius=25'
  debugger
  $.ajax({
    method: "GET",
    url: myUri,
    crossDomain: true,
    dataType: 'jsonp',
  }).done(function(result){
      if (!result.length){
      return "There are no concerts in the area. Sorry!"
    } 
    else{
      var concertResults = results 
      concertResults.forEach((result) => new Concert(result.title, result.formatted_datetime, result.formatted_location, result.ticket_url))
    }
  })
}

function locationFormatter(location){
  let locationArray = location.split(",")
  let formattedCity = locationArray[0].replace((/[" "]/),'+')
  let formattedState = locationArray[1].replace((/[" "]/),"")
  var cityState = formattedCity + "," + formattedState
  return cityState
}

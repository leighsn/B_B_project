const concert_store = {
  concerts: []
}

class Concert {
  
  constructor(title, dateTime, location, ticket_url) {
    this.title = title
    this.dateTime = dateTime
    this.location = location
    this.ticket_url = ticket_url
    concert_store.concerts.push(this)
  }

}

 // <!-- concert finder form --> 
// <!--   <form id = 'event_form'>
//   </form>
//    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
//   </body>
// </html>
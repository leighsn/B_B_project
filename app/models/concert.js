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
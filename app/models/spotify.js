
// to do:
// make the store a nested hash of {name, id, {albums, tracks}}
// post/format the data
// make sure the albums are uniq

const artist_store = {
  artist: []
}

class Artist {
  constructor(name, artistImage, id, popularity, followers)
  this.name = name
  this.artistImage = artistImage
  this.id = id
  this.popularity = popularity
  this.followers = followers
  artist_store.artist.push(this)
}


const album_store = {
  
}
class Album {
  constructor(name, albumImage, artistId, tracks)
}

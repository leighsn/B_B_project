
// to do:
// make the store a nested hash of {name, id, {albums, tracks}}
// post/format the data
// make sure the albums are uniq

const artist_store = {
  artist: []
}

class Artist {
  constructor(name, artistImage, id, popularity, followers, albums) {
  this.name = name
  this.artistImage = artistImage
  this.id = id
  this.popularity = popularity
  this.followers = followers
  this.albums = []
  artist_store.artist.push(this)
  }
}

class Album {
  constructor(id, name, albumImage, artistId, tracks) {
  this.id = id
  this.name = name
  this.albumImage = albumImage
  this.artistId = artistId
  this.tracks = []
  artist_store.artist[0].albums.push(this)
  }
}

class Track {
  constructor(name, albumId){
    this.name = name,
    this.albumId = albumId
    artist_store.artist[0].albums[0].tracks.push(this)
  }
}

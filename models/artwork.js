class Artwork {
  constructor(id, title, artists, year, material, dimensions, location, latitude, longitude, infoUrls, pictureUrl) {
    this.id = id;
    this.title = title;
    this.artists = artists;
    this.year = year;
    this.material = material;
    this.dimensions = dimensions;
    this.location = location;
    this.longitude = longitude;
    this.latitude = latitude;
    this.infoUrls = infoUrls;
    this.pictureUrl = pictureUrl;
  }
}

export default Artwork;

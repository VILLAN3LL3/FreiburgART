class Artwork {
  constructor(id, title, artists, year, material, dimensions, location, latitude, longitude, infoUrls, imageUrl, isCurrentlyAccessible, visitedOn, type, sketchfabUri) {
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
    this.imageUrl = imageUrl;
    this.isCurrentlyAccessible = isCurrentlyAccessible;
    this.visitedOn = visitedOn;
    this.type = type;
    this.sketchfabUri = sketchfabUri;
  }
}

export default Artwork;

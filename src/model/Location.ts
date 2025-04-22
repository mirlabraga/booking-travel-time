class Location {
  constructor(
    private id: string,
    private name: string,
    private description: string,
    private coordinates: { lat: number; lng: number },
    private imageUrl: string
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.coordinates = coordinates;
    this.imageUrl = imageUrl;
  }

  public getId(): string {
    return this.id;
  }
  public getName(): string {
    return this.name;
  }
  public setName(): string {
    return this.name;
  }
  public getDescription(): string {
    return this.description;
  }
  public setDescription(description: string): void {
    this.description = description;
  }
  public getImageUrl(): string {
    return this.imageUrl;
  }
  public setImageUrl(imageUrl: string): void {
    this.imageUrl = imageUrl;
  }
  public getCoordinates(): { lat: number; lng: number } {
    return this.coordinates;
  }
  public setCoordinates(coordinates: { lat: number; lng: number }): void {
    this.coordinates = coordinates;
  }
}
export default Location;

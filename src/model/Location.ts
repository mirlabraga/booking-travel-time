class Location {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public coordinates: { lat: number; lng: number },
    public imageUrl: string
  ) {}
}
export default Location;
    
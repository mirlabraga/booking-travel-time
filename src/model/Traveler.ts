// src/model/Traveler.ts is a TypeScript file that defines a Traveler class.
// The Traveler class contains properties related to a traveler's personal information.
// The properties include id, name, email, phone, address, city, state, zip, country and so on.
class Traveler {
  private id: string;
  private name: string;
  private email: string;
  private phone: string;
  private address: string;
  private city: string;
  private state: string;
  private zip: string;
  private country: string;
  private passportNumber: string;
  private passportExpirationDate: Date;
  private dateOfBirth: Date;

  constructor(
    id: string,
    name: string,
    email: string,
    phone: string,
    address: string,
    city: string,
    state: string,
    zip: string,
    country: string,
    passportNumber: string,
    passportExpirationDate: Date,
    dateOfBirth: Date
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.country = country;
    this.passportNumber = passportNumber;
    this.passportExpirationDate = passportExpirationDate;
    this.dateOfBirth = dateOfBirth;
  }
}
export default Traveler;
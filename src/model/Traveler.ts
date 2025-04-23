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
  private superClean: boolean;

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
  getId(): string {
    return this.id;
  }
  getName(): string {
    return this.name;
  }
  getEmail(): string {
    return this.email;
  }
  getPhone(): string {
    return this.phone;
  }
  getAddress(): string {
    return this.address;
  }
  getCity(): string {
    return this.city;
  }
  getState(): string {
    return this.state;
  }
  getZip(): string {
    return this.zip;
  }
  getCountry(): string {
    return this.country;
  }
  getPassportNumber(): string {
    return this.passportNumber;
  }
  getPassportExpirationDate(): Date {
    return this.passportExpirationDate;
  }
  getDateOfBirth(): Date {
    return this.dateOfBirth;
  }
  getAge(): Number {
    return new Date().getFullYear() - this.dateOfBirth.getFullYear();
  }

  isSuperClean(): boolean {
    // return checkjustice and chekthe health recentely (Mirla and Victoria)
    return true;
  }
}
export default Traveler;
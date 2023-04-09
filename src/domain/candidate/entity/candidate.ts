import Entity from '@domain/shared/entity';

export class Candidate extends Entity {
  _name: string;
  _email: string;
  _phone: string;
  _address: string;
  _experience: string[];
  _education: string[];

  constructor(
    id: string,
    name: string,
    email: string,
    phone: string,
    address: string,
    experience: string[],
    education: string[],
  ) {
    super();
    this._id = id;
    this._name = name;
    this._email = email;
    this._phone = phone;
    this._address = address;
    this._experience = experience;
    this._education = education;
  }

  get name(): string {
    return this._name;
  }

  get email(): string {
    return this._email;
  }

  get phone(): string {
    return this._phone;
  }

  get address(): string {
    return this._address;
  }

  get experience(): string[] {
    return this._experience;
  }

  get education(): string[] {
    return this._education;
  }
}

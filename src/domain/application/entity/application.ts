import { Vacancy } from '@domain/vacancy/entity/vacancy';
import { Candidate } from '@domain/candidate/entity/candidate';
import Entity from '@domain/shared/entity';

export class Application extends Entity {
  _vacancy: Vacancy;
  _candidate: Candidate;
  _applicationDate: Date;

  constructor(id: string, vacancy: Vacancy, candidate: Candidate, applicationDate: Date) {
    super();
    this._id = id;
    this._vacancy = vacancy;
    this._candidate = candidate;
    this._applicationDate = applicationDate;
  }

  get vacancy(): Vacancy {
    return this._vacancy;
  }

  get candidate(): Candidate {
    return this._candidate;
  }

  get applicationDate(): Date {
    return this._applicationDate;
  }
}

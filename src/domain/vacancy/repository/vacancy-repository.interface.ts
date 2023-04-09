import { Vacancy } from '@domain/vacancy/entity/vacancy';
import RepositoryInterface from '@domain/shared/repository.interface';

// eslint-disable-next-line
export default interface VacancyRepositoryInterface extends RepositoryInterface<Vacancy> { }

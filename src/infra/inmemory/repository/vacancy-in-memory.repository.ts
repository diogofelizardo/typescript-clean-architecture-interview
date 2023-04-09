import { Vacancy } from '@domain/vacancy/entity/vacancy';
import VacancyRepositoryInterface from '@domain/vacancy/repository/vacancy-repository.interface';

export default class VacancyInMemoryRepository implements VacancyRepositoryInterface {
  private vacancies: Vacancy[] = [];

  async create(vacancy: Vacancy): Promise<void> {
    const vacancyIndex = this.vacancies.findIndex((v) => v.id === vacancy.id);

    if (vacancyIndex === -1) {
      this.vacancies.push(vacancy);
    } else {
      throw new Error('Vacancy already exists');
    }

    return Promise.resolve();
  }

  async update(vacancy: Vacancy): Promise<void> {
    const vacancyIndex = this.vacancies.findIndex((v) => v.id === vacancy.id);

    if (vacancyIndex === -1) {
      throw new Error('Vacancy not found');
    }

    this.vacancies[vacancyIndex] = vacancy;
    return Promise.resolve();
  }

  async find(id: string): Promise<Vacancy> {
    const vacancy = this.vacancies.find((v) => v.id === id);
    if (!vacancy) {
      throw new Error('Vacancy not found');
    }
    return vacancy;
  }

  async findAll(): Promise<Vacancy[]> {
    return this.vacancies;
  }
}

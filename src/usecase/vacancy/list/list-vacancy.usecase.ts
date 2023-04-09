import { Vacancy } from '@domain/vacancy/entity/vacancy';
import VacancyRepositoryInterface from '@domain/vacancy/repository/vacancy-repository.interface';
import { outputVacancyDTO } from './list-vacancy.dto';

export default class ListVacancyUseCase {
  vacancyRepository: VacancyRepositoryInterface;

  constructor(vacancyRepository: VacancyRepositoryInterface) {
    this.vacancyRepository = vacancyRepository;
  }

  async execute(): Promise<outputVacancyDTO[]> {
    const vacancies = await this.vacancyRepository.findAll();
    return vacancies.map((vacancy: Vacancy) => {
      return {
        id: vacancy.id,
        title: vacancy.title,
        description: vacancy.description,
        requirements: vacancy.requirements,
        salary: vacancy.salary,
        deadline: vacancy.deadline,
      };
    });
  }
}

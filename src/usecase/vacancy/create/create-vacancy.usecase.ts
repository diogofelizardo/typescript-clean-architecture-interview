import { Vacancy } from '@domain/vacancy/entity/vacancy';
import VacancyRepositoryInterface from '@domain/vacancy/repository/vacancy-repository.interface';
import { inputVacancyDTO, outputVacancyDTO } from './create-vacancy.dto';

export default class CreateVacancyUseCase {
  private vacancyRepository: VacancyRepositoryInterface;

  constructor(vacancyRepository: VacancyRepositoryInterface) {
    this.vacancyRepository = vacancyRepository;
  }

  async execute(input: inputVacancyDTO): Promise<outputVacancyDTO> {
    const vacancy = new Vacancy(
      input.id,
      input.title,
      input.description,
      input.requirements,
      input.salary,
      input.deadline,
    );

    await this.vacancyRepository.create(vacancy);

    return {
      id: vacancy.id,
      title: vacancy.title,
      description: vacancy.description,
      requirements: vacancy.requirements,
      salary: vacancy.salary,
      deadline: vacancy.deadline,
    };
  }
}

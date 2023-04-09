import VacancyRepositoryInterface from '@domain/vacancy/repository/vacancy-repository.interface';
import { inputVacancyDTO, outputVacancyDTO } from './update-vacancy.dto';

export default class UpdateVacancyUseCase {
  private vacancyRepository: VacancyRepositoryInterface;

  constructor(vacancyRepository: VacancyRepositoryInterface) {
    this.vacancyRepository = vacancyRepository;
  }

  async execute(input: inputVacancyDTO): Promise<outputVacancyDTO> {
    const vacancyFind = await this.vacancyRepository.find(input.id);
    if (!vacancyFind) {
      throw new Error('Vacancy not found');
    }

    // const vacancy = new Vacancy(

    // return this.vacancyRepository.update(vacancy);

    return {
      id: input.id,
      title: input.title,
      description: input.description,
      requirements: input.requirements,
      salary: input.salary,
      applicationDeadline: input.applicationDeadline,
    };
  }
}

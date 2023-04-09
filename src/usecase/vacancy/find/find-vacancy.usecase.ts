import VacancyRepositoryInterface from '@domain/vacancy/repository/vacancy-repository.interface';
import { outputVacancyDTO } from './find-vacancy.dto';

export default class FindVacancyUseCase {
  private vacancyRepository: VacancyRepositoryInterface;

  constructor(vacancyRepository: VacancyRepositoryInterface) {
    this.vacancyRepository = vacancyRepository;
  }

  async execute(id: string): Promise<outputVacancyDTO> {
    const vacancy = await this.vacancyRepository.find(id);

    if (!vacancy) {
      throw new Error('Vacancy not found');
    }

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

import ApplicationRepositoryInterface from '@domain/application/repository/application-repository.interface';
import { outputApplicationDTO } from './list-application.dto';

export default class ListApplicationUseCase {
  private applicationRepository: ApplicationRepositoryInterface;

  constructor(applicationRepository: ApplicationRepositoryInterface) {
    this.applicationRepository = applicationRepository;
  }

  async execute(): Promise<outputApplicationDTO[]> {
    return this.applicationRepository.findAll();
  }
}

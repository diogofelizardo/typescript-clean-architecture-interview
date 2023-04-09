import ApplicationRepositoryInterface from '@domain/application/repository/application-repository.interface';
import { outputApplicationDTO } from './find-application.dto';

export default class FindApplicationUseCase {
  private applicationRepository: ApplicationRepositoryInterface;

  constructor(applicationRepository: ApplicationRepositoryInterface) {
    this.applicationRepository = applicationRepository;
  }

  async execute(id: string): Promise<outputApplicationDTO> {
    return this.applicationRepository.find(id);
  }
}

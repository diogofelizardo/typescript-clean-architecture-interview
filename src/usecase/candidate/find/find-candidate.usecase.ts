import CandidateRepositoryInterface from '@domain/candidate/repository/candidate-repository.interface';
import { outputCandidateDTO } from './find-candidate.dto';

// implemente o método execute() da interface UseCase
export default class FindCandidateUseCase {
  private candidateRepository: CandidateRepositoryInterface;

  constructor(candidateRepository: CandidateRepositoryInterface) {
    this.candidateRepository = candidateRepository;
  }

  async execute(id: string): Promise<outputCandidateDTO> {
    const candidate = await this.candidateRepository.find(id);
    return {
      id: candidate.id,
      name: candidate.name,
      email: candidate.email,
      phone: candidate.phone,
      address: candidate.address,
      experience: candidate.experience,
      education: candidate.education,
    };
  }
}

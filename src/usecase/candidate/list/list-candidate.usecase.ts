import CandidateRepositoryInterface from '@domain/candidate/repository/candidate-repository.interface';
import { outputCandidateDTO } from './list-candidate.dto';

export default class ListCandidateUseCase {
  private candidateRepository: CandidateRepositoryInterface;

  constructor(candidateRepository: CandidateRepositoryInterface) {
    this.candidateRepository = candidateRepository;
  }

  async execute(): Promise<outputCandidateDTO[]> {
    const candidates = await this.candidateRepository.findAll();

    return candidates.map((candidate) => ({
      id: candidate.id,
      name: candidate.name,
      email: candidate.email,
      phone: candidate.phone,
      address: candidate.address,
      experience: candidate.experience,
      education: candidate.education,
    }));
  }
}

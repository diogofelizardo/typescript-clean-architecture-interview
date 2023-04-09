import { Candidate } from '@domain/candidate/entity/candidate';
import CandidateRepositoryInterface from '@domain/candidate/repository/candidate-repository.interface';
import { inputCandidateDTO, outputCandidateDTO } from './create-candidate.dto';

export default class CreateCandidateUseCase {
  private candidateRepository: CandidateRepositoryInterface;

  constructor(candidateRepository: CandidateRepositoryInterface) {
    this.candidateRepository = candidateRepository;
  }

  async execute(input: inputCandidateDTO): Promise<outputCandidateDTO> {
    const candidate = new Candidate(
      input.id,
      input.name,
      input.email,
      input.phone,
      input.address,
      input.experience,
      input.education,
    );

    await this.candidateRepository.create(candidate);

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

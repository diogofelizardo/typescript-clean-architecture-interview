import { Candidate } from '@domain/candidate/entity/candidate';
import CandidateRepositoryInterface from '@domain/candidate/repository/candidate-repository.interface';

export default class CandidateInMemoryRepository implements CandidateRepositoryInterface {
  private candidates: Candidate[] = [];

  async create(candidate: Candidate): Promise<void> {
    const candidateIndex = this.candidates.findIndex((find_candidate) => find_candidate.id === candidate.id);

    if (candidateIndex !== -1) {
      throw new Error('Candidate already exists');
    }
    this.candidates.push(candidate);
    Promise.resolve();
  }

  async update(candidate: Candidate): Promise<void> {
    const candidateIndex = this.candidates.findIndex((find_candidate) => find_candidate.id === candidate.id);
    if (candidateIndex === -1) {
      throw new Error('Candidate not found');
    }
    this.candidates[candidateIndex] = candidate;
    return Promise.resolve();
  }

  async find(id: string): Promise<Candidate> {
    const candidate = this.candidates.find((candidate) => candidate.id === id);
    if (!candidate) {
      throw new Error('Candidate not found');
    }
    return candidate;
  }

  async findAll(): Promise<Candidate[]> {
    return Promise.resolve(this.candidates);
  }
}

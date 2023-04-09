import { Candidate } from '@domain/candidate/entity/candidate';
import RepositoryInterface from '@domain/shared/repository.interface';

// eslint-disable-next-line
export default interface CandidateRepositoryInterface extends RepositoryInterface<Candidate> { }

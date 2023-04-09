import CreateCandidateUseCase from './create-candidate.usecase';

const input = {
  id: '123',
  name: 'John Doe',
  email: 'john@email.com',
  phone: '123456789',
  address: '123 Main St',
  experience: ['Experience 1', 'Experience 2'],
  education: ['Education 1', 'Education 2'],
};

const MockRepository = () => {
  return {
    create: jest.fn().mockReturnValue(Promise.resolve(input)),
    update: jest.fn(),
    findAll: jest.fn(),
    find: jest.fn(),
  };
};

describe('CreateCandidate test for create candidate', () => {
  it('should create a candidate', async () => {
    const candidateRepository = MockRepository();
    const createCandidate = new CreateCandidateUseCase(candidateRepository);
    const createdCandidate = await createCandidate.execute(input);

    expect(createdCandidate).toEqual(input);
  });
});

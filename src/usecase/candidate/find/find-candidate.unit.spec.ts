import FindCandidateUseCase from './find-candidate.usecase';

const input = {
  id: '123',
  name: 'John Doe',
  email: 'john@email.com',
  phone: '123456789',
  address: '123 Main St',
  experience: ['Trabalhou na empresa X'],
  education: ['Estudou na escola Y'],
};

const MockRepository = () => {
  return {
    create: jest.fn(),
    update: jest.fn(),
    findAll: jest.fn(),
    find: jest.fn().mockReturnValue(Promise.resolve(input)),
  };
};

describe('FindCandidate test for find candidate', () => {
  it('should find a candidate', async () => {
    const candidateRepository = MockRepository();

    const findCandidate = new FindCandidateUseCase(candidateRepository);
    const foundCandidate = await findCandidate.execute(input.id);

    expect(foundCandidate).toEqual(input);
    expect(foundCandidate.id).toEqual(input.id);
    expect(foundCandidate.email).toEqual(input.email);
    expect(foundCandidate.phone).toEqual(input.phone);
    expect(foundCandidate.address).toEqual(input.address);
    expect(foundCandidate.experience[0]).toEqual(input.experience[0]);
    expect(foundCandidate.education[0]).toEqual(input.education[0]);
  });
});

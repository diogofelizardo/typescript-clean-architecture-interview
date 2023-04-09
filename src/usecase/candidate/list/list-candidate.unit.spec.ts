import ListCandidateUseCase from './list-candidate.usecase';

const input1 = {
  id: '123',
  name: 'John Doe',
  email: 'john@email.com',
  phone: '123456789',
  address: '123 Main St',
  experience: ['Work at company XXXX'],
  education: ['Studied at school YYY'],
};

const input2 = {
  id: '321',
  name: 'Mary Doe',
  email: 'mary@email.com',
  phone: '987654321',
  address: '1233445 Main St',
  experience: ['Work at company X'],
  education: ['Studied at school Y'],
};

const MockRepository = () => {
  return {
    create: jest.fn(),
    update: jest.fn(),
    find: jest.fn(),
    findAll: jest.fn().mockReturnValue(Promise.resolve([input1, input2])),
  };
};

describe('ListCandidate test for list candidate', () => {
  it('should list two candidates', async () => {
    const candidateRepository = MockRepository();
    const listCandidate = new ListCandidateUseCase(candidateRepository);
    const listCandidates = await listCandidate.execute();

    expect(listCandidates).toEqual([input1, input2]);
    expect(listCandidates[0].id).toEqual(input1.id);
    expect(listCandidates[0].email).toEqual(input1.email);
    expect(listCandidates[0].phone).toEqual(input1.phone);
    expect(listCandidates[0].address).toEqual(input1.address);
    expect(listCandidates[0].experience[0]).toEqual(input1.experience[0]);
    expect(listCandidates[0].education[0]).toEqual(input1.education[0]);
    expect(listCandidates[1].id).toEqual(input2.id);
    expect(listCandidates[1].email).toEqual(input2.email);
    expect(listCandidates[1].phone).toEqual(input2.phone);
    expect(listCandidates[1].address).toEqual(input2.address);
    expect(listCandidates[1].experience[0]).toEqual(input2.experience[0]);
    expect(listCandidates[1].education[0]).toEqual(input2.education[0]);
  });
});

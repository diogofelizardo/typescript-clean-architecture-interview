import CreateApplicationUseCase from './create-application.usecase';

const inputCandidate = {
  id: '2',
  name: 'John Doe',
  email: 'john@email.com',
  phone: '123456789',
  address: '123 Main St',
  experience: [''],
  education: [''],
};

const inputVacancy = {
  id: '3',
  title: 'My Vacancy',
  description: 'My Vacancy Description',
  requirements: ['Requirement 1', 'Requirement 2'],
  salary: 1000,
  deadline: new Date(),
};

const output = {
  id: '1',
  vacancy: inputVacancy,
  candidate: inputCandidate,
  applicationDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()),
};

const MockCandidateRepository = () => {
  return {
    create: jest.fn(),
    update: jest.fn(),
    findAll: jest.fn(),
    find: jest.fn().mockReturnValue(Promise.resolve(inputCandidate)),
  };
};

const MockVacancyRepository = () => {
  return {
    create: jest.fn(),
    update: jest.fn(),
    findAll: jest.fn(),
    find: jest.fn().mockReturnValue(Promise.resolve(inputVacancy)),
  };
};

const MockApplicationRepository = () => {
  return {
    create: jest.fn().mockReturnValue(Promise.resolve(output)),
    update: jest.fn(),
    findAll: jest.fn(),
    find: jest.fn(),
  };
};

describe('CreateApplication', () => {
  it('should create an application', async () => {
    const applicationRepository = MockApplicationRepository();
    const vacancyRepository = MockVacancyRepository();
    const candidateRepository = MockCandidateRepository();

    const createApplication = new CreateApplicationUseCase(
      applicationRepository,
      vacancyRepository,
      candidateRepository,
    );
    const createdApplication = await createApplication.execute('1', inputVacancy.id, inputCandidate.id);

    expect(createdApplication).toEqual(output);
  });
});

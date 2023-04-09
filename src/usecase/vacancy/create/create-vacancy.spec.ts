import CreateVacancyUseCase from './create-vacancy.usecase';

const input = {
  id: '1',
  title: 'Software Engineer',
  description: 'Software Engineer',
  requirements: ['NodeJS', 'ReactJS'],
  salary: 1000,
  deadline: new Date(),
};

const MockRepository = () => {
  return {
    create: jest.fn().mockReturnValue(Promise.resolve(input)),
    update: jest.fn(),
    findAll: jest.fn(),
    find: jest.fn(),
  };
};

describe('Create Vacancy', () => {
  it('should create a vacancy', async () => {
    const vacancyRepository = MockRepository();
    const createVacancyUseCase = new CreateVacancyUseCase(vacancyRepository);
    const output = await createVacancyUseCase.execute(input);

    expect(output).toEqual(input);
  });
});

import UpdateVacancyUseCase from './update-vacancy.usecase';

const input = {
  id: '1',
  title: 'Software Engineer',
  description: 'Software Engineer',
  requirements: ['Software Engineer'],
  salary: 1000,
  applicationDeadline: new Date(),
};

const MockRepository = () => {
  return {
    create: jest.fn(),
    update: jest.fn().mockReturnValue(Promise.resolve(input)),
    findAll: jest.fn(),
    find: jest.fn().mockReturnValue(Promise.resolve(input)),
  };
};

describe('UpdateVacancy', () => {
  it('should update a vacancy', async () => {
    const vacancyRepository = MockRepository();
    const updateVacancy = new UpdateVacancyUseCase(vacancyRepository);
    const vacancy = await updateVacancy.execute(input);

    expect(vacancy).toEqual(input);
    expect(vacancy.id).toEqual(input.id);
    expect(vacancy.title).toEqual(input.title);
    expect(vacancy.description).toEqual(input.description);
    expect(vacancy.requirements).toEqual(input.requirements);
    expect(vacancy.salary).toEqual(input.salary);
    expect(vacancy.applicationDeadline).toEqual(input.applicationDeadline);
  });
});

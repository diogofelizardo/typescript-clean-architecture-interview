import ListVacancyUseCase from './list-vacancy.usecase';

const input1 = {
  id: '123',
  title: 'Software Engineer NodeJS',
  description: 'Software Engineer NodeJS XPTO',
  requirements: ['Experience with NodeJS'],
  salary: 1000,
  deadline: new Date(),
};

const input2 = {
  id: '321',
  title: 'Software Engineer ReactJS',
  description: 'Software Engineer ReactJS XPTO',
  requirements: ['Experience with ReactJS'],
  salary: 1000,
  deadline: new Date(),
};

const MockRepository = () => {
  return {
    create: jest.fn(),
    update: jest.fn(),
    find: jest.fn(),
    findAll: jest.fn().mockReturnValue(Promise.resolve([input1, input2])),
  };
};

describe('List Vacancy', () => {
  it('should list all vacancies', async () => {
    const vacancyRepository = MockRepository();
    const listVacancy = new ListVacancyUseCase(vacancyRepository);
    const vacancies = await listVacancy.execute();

    expect(vacancies).toHaveLength(2);
    expect(vacancies[0].id).toEqual(input1.id);
    expect(vacancies[0].title).toEqual(input1.title);
    expect(vacancies[0].description).toEqual(input1.description);

    expect(vacancies[1].id).toEqual(input2.id);
    expect(vacancies[1].title).toEqual(input2.title);
    expect(vacancies[1].description).toEqual(input2.description);
  });
});

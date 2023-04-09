import { Vacancy } from '@domain/vacancy/entity/vacancy';
import FindVacancyUseCase from './find-vacancy.usecase';

const vacancy = new Vacancy(
  '1',
  'Software Engineer',
  'We are looking for a software engineer',
  ['Node.js', 'React', 'TypeScript'],
  100000,
  new Date('2021-12-31'),
);

const MockRepository = () => {
  return {
    find: jest.fn().mockReturnValue(Promise.resolve(vacancy)),
    findAll: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
  };
};

describe('Find Vacancy', () => {
  it('should return a vacancy', async () => {
    const input = {
      id: '1',
    };

    const output = {
      id: '1',
      title: 'Software Engineer',
      description: 'We are looking for a software engineer',
      requirements: ['Node.js', 'React', 'TypeScript'],
      salary: 100000,
      deadline: new Date('2021-12-31'),
    };

    const vacancyRepository = MockRepository();
    const findVacancyUseCase = new FindVacancyUseCase(vacancyRepository);
    const vacancy = await findVacancyUseCase.execute(input.id);

    expect(vacancy).toEqual(output);
  });
});

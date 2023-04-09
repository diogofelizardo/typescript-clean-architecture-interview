import FindApplicationUseCase from './find-application.usecase';

const input = {
  id: '1',
  vacancy: {
    id: '1',
  },
  candidate: {
    id: '1',
  },
  applicationDate: new Date(),
};

const MockRepository = () => {
  return {
    create: jest.fn(),
    update: jest.fn(),
    findAll: jest.fn(),
    find: jest.fn().mockReturnValue(input),
  };
};

describe('FindApplication', () => {
  it('should find an application', async () => {
    const applicationRepository = MockRepository();
    const findApplication = new FindApplicationUseCase(applicationRepository);
    const application = await findApplication.execute('1');

    expect(application).toEqual(input);
    expect(application.id).toEqual(input.id);
    expect(application.vacancy).toEqual(input.vacancy);
    expect(application.candidate).toEqual(input.candidate);
  });
});

import ListApplicationUseCase from './list-application.usecase';

const input1 = {
  id: '1',
  vacancy: {
    id: '1',
  },
  candidate: {
    id: '1',
  },
  applicationDate: new Date(),
};

const input2 = {
  id: '2',
  vacancy: {
    id: '2',
  },
  candidate: {
    id: '2',
  },
  applicationDate: new Date(),
};

const MockRepository = () => ({
  create: jest.fn(),
  update: jest.fn(),
  findAll: jest.fn().mockReturnValue([input1, input2]),
  find: jest.fn(),
});

describe('ListApplication', () => {
  it('should list all applications', async () => {
    const applicationRepository = MockRepository();
    const listApplication = new ListApplicationUseCase(applicationRepository);
    const applications = await listApplication.execute();

    expect(applications).toEqual([input1, input2]);
    expect(applicationRepository.findAll).toBeCalledTimes(1);
    expect(applications[0]).toEqual(input1);
    expect(applications[1]).toEqual(input2);
    expect(applications[0].id).toEqual(input1.id);
    expect(applications[1].id).toEqual(input2.id);

    expect(applications[0].vacancy).toEqual(input1.vacancy);
    expect(applications[1].vacancy).toEqual(input2.vacancy);

    expect(applications[0].candidate).toEqual(input1.candidate);
    expect(applications[1].candidate).toEqual(input2.candidate);
  });
});

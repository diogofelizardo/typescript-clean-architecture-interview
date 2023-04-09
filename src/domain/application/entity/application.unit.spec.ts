import { Application } from './application';
import { Vacancy } from '@domain/vacancy/entity/vacancy';
import { Candidate } from '@domain/candidate/entity/candidate';

describe('Application', () => {
  it('should create a new application', () => {
    const vacancy: Vacancy = new Vacancy(
      '123',
      'Desenvolvedor Full Stack',
      'Desenvolvimento de aplicações web utilizando Angular e Node.js',
      ['Experiência com Angular e Node.js', 'Conhecimento em banco de dados MySQL'],
      5000,
      new Date('2023-04-30'),
    );

    const candidate: Candidate = new Candidate(
      '123',
      'João da Silva',
      'joao.silva@gmail.com',
      '(11) 98765-4321',
      'Rua das Flores, 123 - São Paulo, SP',
      ['Desenvolvedor Full Stack na empresa XYZ', 'Estagiário na empresa ABC'],
      ['Bacharelado em Ciência da Computação pela Universidade XYZ'],
    );

    const applicationDate: Date = new Date();

    const application: Application = new Application('123', vacancy, candidate, applicationDate);

    expect(application.id).toEqual('123');
    expect(application).toBeDefined();
    expect(application.vacancy).toEqual(vacancy);
    expect(application.candidate).toEqual(candidate);
    expect(application.applicationDate).toEqual(applicationDate);
  });
});

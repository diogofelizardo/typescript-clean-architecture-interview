import { Vacancy } from './vacancy';

describe('Vacancy', () => {
  it('should create a new vacancy', () => {
    const vacancy: Vacancy = new Vacancy(
      '123',
      'Desenvolvedor Full Stack',
      'Desenvolvimento de aplicações web utilizando Angular e Node.js',
      ['Experiência com Angular e Node.js', 'Conhecimento em banco de dados MySQL'],
      5000,
      new Date('2023-04-30'),
    );

    expect(vacancy).toBeDefined();
    expect(vacancy.id).toEqual('123');
    expect(vacancy.title).toEqual('Desenvolvedor Full Stack');
    expect(vacancy.description).toEqual('Desenvolvimento de aplicações web utilizando Angular e Node.js');
    expect(vacancy.requirements).toEqual(['Experiência com Angular e Node.js', 'Conhecimento em banco de dados MySQL']);
    expect(vacancy.salary).toEqual(5000);
    expect(vacancy.deadline).toEqual(new Date('2023-04-30'));
  });

  it('should throw an error when title is not provided', () => {
    expect(() => {
      new Vacancy(
        '123',
        '',
        'Desenvolvimento de aplicações web utilizando Angular e Node.js',
        ['Experiência com Angular e Node.js', 'Conhecimento em banco de dados MySQL'],
        5000,
        new Date('2023-04-30'),
      );
    }).toThrowError('Título da vaga é obrigatório');
  });

  it('should throw an error when salary is negative', () => {
    expect(() => {
      new Vacancy(
        '123',
        'Desenvolvedor Full Stack',
        'Desenvolvimento de aplicações web utilizando Angular e Node.js',
        ['Experiência com Angular e Node.js', 'Conhecimento em banco de dados MySQL'],
        -5000,
        new Date('2023-04-30'),
      );
    }).toThrowError('Salário da vaga deve ser positivo');
  });
});

import { Candidate } from './candidate';

describe('Candidate', () => {
  it('should create a new candidate', () => {
    const candidate: Candidate = new Candidate(
      '123',
      'João da Silva',
      'joao.silva@gmail.com',
      '(11) 98765-4321',
      'Rua das Flores, 123 - São Paulo, SP',
      ['Desenvolvedor Full Stack na empresa XYZ', 'Estagiário na empresa ABC'],
      ['Bacharelado em Ciência da Computação pela Universidade XYZ'],
    );

    expect(candidate).toBeDefined();
    expect(candidate.id).toEqual('123');
    expect(candidate.name).toEqual('João da Silva');
    expect(candidate.email).toEqual('joao.silva@gmail.com');
    expect(candidate.phone).toEqual('(11) 98765-4321');
    expect(candidate.address).toEqual('Rua das Flores, 123 - São Paulo, SP');
    expect(candidate.experience).toEqual(['Desenvolvedor Full Stack na empresa XYZ', 'Estagiário na empresa ABC']);
    expect(candidate.education).toEqual(['Bacharelado em Ciência da Computação pela Universidade XYZ']);
  });
});

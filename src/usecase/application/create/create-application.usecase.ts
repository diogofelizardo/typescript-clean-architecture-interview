import { Application } from '@domain/application/entity/application';
import ApplicationRepositoryInterface from '@domain/application/repository/application-repository.interface';
import CandidateRepositoryInterface from '@domain/candidate/repository/candidate-repository.interface';
import VacancyRepositoryInterface from '@domain/vacancy/repository/vacancy-repository.interface';
import { outputApplicationDTO } from './create-application.dto';

export default class CreateApplicationUseCase {
  private applicationRepository: ApplicationRepositoryInterface;
  private vacancyRepository: VacancyRepositoryInterface;
  private candidateRepository: CandidateRepositoryInterface;

  constructor(
    applicationRepository: ApplicationRepositoryInterface,
    vacancyRepository: VacancyRepositoryInterface,
    candidateRepository: CandidateRepositoryInterface,
  ) {
    this.applicationRepository = applicationRepository;
    this.vacancyRepository = vacancyRepository;
    this.candidateRepository = candidateRepository;
  }

  async execute(ApplicationId: string, vacancyId: string, candidateId: string): Promise<outputApplicationDTO> {
    const vacancyFind = await this.vacancyRepository.find(vacancyId);
    const candidateFind = await this.candidateRepository.find(candidateId);
    const application = new Application(
      ApplicationId,
      vacancyFind,
      candidateFind,
      new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()),
    );

    await this.applicationRepository.create(application);

    return {
      id: application.id,
      vacancy: {
        id: application.vacancy.id,
        title: application.vacancy.title,
        description: application.vacancy.description,
        requirements: application.vacancy.requirements,
        salary: application.vacancy.salary,
        deadline: application.vacancy.deadline,
      },
      candidate: {
        id: application.candidate.id,
        name: application.candidate.name,
        email: application.candidate.email,
        phone: application.candidate.phone,
        address: application.candidate.address,
        experience: application.candidate.experience,
        education: application.candidate.education,
      },
      applicationDate: application.applicationDate,
    };
  }
}

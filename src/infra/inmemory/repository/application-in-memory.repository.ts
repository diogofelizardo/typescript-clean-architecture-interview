import { Application } from '@domain/application/entity/application';
import ApplicationRepositoryInterface from '@domain/application/repository/application-repository.interface';

export default class ApplicationInMemoryRepository implements ApplicationRepositoryInterface {
  private applications: Application[] = [];

  async create(application: Application): Promise<void> {
    const applicationIndex = this.applications.findIndex((a) => a.id === application.id);

    if (applicationIndex !== -1) {
      throw new Error('Application already exists');
    }

    this.applications.push(application);
    return Promise.resolve();
  }

  async update(application: Application): Promise<void> {
    const applicationIndex = this.applications.findIndex((a) => a.id === application.id);

    if (applicationIndex === -1) {
      throw new Error('Application not found');
    }

    this.applications[applicationIndex] = application;
    return Promise.resolve();
  }

  async find(id: string): Promise<Application> {
    const application = this.applications.find((a) => a.id === id);
    if (!application) {
      throw new Error('Application not found');
    }
    return application;
  }

  async findAll(): Promise<Application[]> {
    return this.applications;
  }
}

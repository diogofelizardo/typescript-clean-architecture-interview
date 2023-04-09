import Entity from '@domain/shared/entity';

export class Vacancy extends Entity {
  private _title: string;
  private _description: string;
  private _requirements: string[];
  private _salary: number;
  private _deadline: Date;

  constructor(id: string, title: string, description: string, requirements: string[], salary: number, deadline: Date) {
    super();

    if (!title) {
      throw new Error('Título da vaga é obrigatório');
    }

    if (salary <= 0) {
      throw new Error('Salário da vaga deve ser positivo');
    }

    this._id = id;
    this._title = title;
    this._description = description;
    this._requirements = requirements;
    this._salary = salary;
    this._deadline = deadline;
  }

  get title(): string {
    return this._title;
  }

  get description(): string {
    return this._description;
  }

  get requirements(): string[] {
    return this._requirements;
  }

  get salary(): number {
    return this._salary;
  }

  get deadline(): Date {
    return this._deadline;
  }

  changeTitle(title: string): void {
    this._title = title;
  }

  changeDescription(description: string): void {
    this._description = description;
  }

  changeRequirements(requirements: string[]): void {
    this._requirements = requirements;
  }

  changeSalary(salary: number): void {
    this._salary = salary;
  }

  changeDeadline(deadline: Date): void {
    this._deadline = deadline;
  }
}

export type inputVacancyDTO = {
  id: string;
  title: string;
  description: string;
  requirements: string[];
  salary: number;
  applicationDeadline: Date;
};

export type outputVacancyDTO = {
  id: string;
  title: string;
  description: string;
  requirements: string[];
  salary: number;
  applicationDeadline: Date;
};

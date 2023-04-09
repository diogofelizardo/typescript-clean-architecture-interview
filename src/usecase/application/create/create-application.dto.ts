export type outputApplicationDTO = {
  id: string;
  vacancy: {
    id: string;
    title: string;
    description: string;
    requirements: string[];
    salary: number;
    deadline: Date;
  };
  candidate: {
    id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    experience: string[];
    education: string[];
  };
  applicationDate: Date;
};

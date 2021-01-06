export interface writeFirstRecruitRequest {
  personnel: number;
  name: string;
  entNo: string;
  phone: string;
  sales: number;
  sector: string;
  establishmentDate: string;
  address: string;
  zipCode: string;
  managerRank: string;
  managerPhone: string;
  managerEmail: string;
}

export interface writeSecondRecruitRequest {
  introduce: string;
  detail: string;
}

export interface writeThirdRecruitRequest {
  certificates: Array<string>;
  grade: number;
  specialties: Array<string>;
  startTime: string;
  endTime: string;
  salary: number;
  period: number;
  breakfast: boolean;
  lunch: boolean;
  dinner: boolean;
  mealSalary: boolean;
  fourMajor: boolean;
  selfDevelop: boolean;
  labtop: boolean;
  etc: string;
}

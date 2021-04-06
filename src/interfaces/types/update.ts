export interface EnterpriseUpdateType {
  entNo: string;
  name: string;
  phone: string;
  sales: number;
  sector: string;
  establishmentDate: string;
  address: string;
  workers: number;
  zipCode: string;
  introduce: string;
}

export interface RecruitUpdateType {
  reception: string;
  deadline: string;
  recruitPlan: boolean;
  startTime: string;
  endTime: string;
  allowance: number;
  salary: number;
  period: number;
  expired: boolean;
  personnel: number;
  detail: string;
  entNo: string;
}

export interface CertificateUpdateType {
  certificate: string;
}

export interface IntroductionUpdateType {
  originalName: string;
  fileUuid: string;
  entNo: string;
}

export interface ManagerUpdateType {
  entNo: string;
  managerRank: string;
  managerPhone: string;
  managerEmail: string;
  managerName: string;
}

export interface MealUpdateType {
  breakfast: boolean;
  lunch: boolean;
  dinner: boolean;
  mealSalary: boolean;
}

export interface QualificationUpdateType {
  grade: number;
  specialty: string;
}

export interface WelfareUpdateType {
  fourMajor: boolean;
  selfDevelop: boolean;
  labtop: boolean;
  etc: string;
}

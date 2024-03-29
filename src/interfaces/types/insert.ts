export interface EnterpriseInsertType {
  name: string;
  entNo: string;
  phone: string;
  sales: string;
  sector: string;
  establishmentDate: string;
  address: string;
  workers: number;
  zipCode: string;
  introduce: string;
}

export interface RecruitInsertType {
  recruitId: string;
  recruitNo: number;
  reception: string;
  deadline: string;
  recruitPlan: boolean;
  startTime: string;
  endTime: string;
  allowance: string;
  salary: string;
  period: number;
  expired: boolean;
  personnel: number;
  detail: string;
  entNo: string;
}

export interface CertificateInsertType {
  certificateId: string;
  certificate: string;
  qualificationId: string;
}

export interface IntroductionInsertType {
  introductionId: string;
  originalName: string;
  fileUuid: string;
  entNo: string;
}

export interface ManagerInsertType {
  entNo: string;
  managerRank: string;
  managerPhone: string;
  managerEmail: string;
  managerName: string;
}

export interface MealInsertType {
  recruitId: string;
  breakfast: boolean;
  lunch: boolean;
  dinner: boolean;
  mealSalary: boolean;
}

export interface QualificationInsertType {
  qualificationId: string;
  grade: number;
  specialty: string;
  recruitId: string;
}

export interface WelfareInsertType {
  recruitId: string;
  fourMajor: boolean;
  selfDevelop: boolean;
  labtop: boolean;
  etc: string;
}

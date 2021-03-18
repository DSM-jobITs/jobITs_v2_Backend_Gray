export interface EnterpriseInsertType {
  name: string;
  entNo: string;
  phone: string;
  sales: number;
  sector: string;
  establishmentDate: string;
  address: string;
  workers: number;
  zipCode: string;
  introduce: string;
}

export interface RecruitInsertType {
  recruitId: string;
  reception: string;
  deadline: string;
  recruitPlan: boolean;
  startTime: string;
  endTime: string;
  salary: number;
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

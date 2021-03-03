export interface EnterpriseInsertType {
  name: string;
  entNo: string;
  phone: string;
  sales: number;
  sector: string;
  establishmentDate: string;
  address: string;
  zipCode: string;
  introduce: string;
}

export interface CertificateInsertType {
  id: string;
  certificate: string;
  qualificationId: string;
}

export interface IntroductionInsertType {
  id: string;
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
  id: string;
  grade: number;
  recruitId: string;
}

export interface SpecialtyInsertType {
  id: string;
  specialty: string;
  qualificationId: string;
}

export interface WelfareInsertType {
  recruitId: string;
  fourMajor: boolean;
  selfDevelop: boolean;
  labtop: boolean;
  etc: string;
}

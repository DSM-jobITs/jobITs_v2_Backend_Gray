import {
  RecruitRepository,
  EnterpriseRepository,
  ManagerRepository,
  MealRepository,
  QualificationRepository,
  CertificateRepository,
  SpecialtyRepository,
  WelfareRepository,
} from "@/repositories";
import { Recruit, Enterprise } from "@/entities";
import {
  writeFirstRecruitRequest,
  writeFourthRecruitRequest,
  writeSecondRecruitRequest,
  writeThirdRecruitRequest,
} from "@/interfaces";
import { mkId } from "@/utils";
import { RecruitNotFound } from "@/exception";

export class RecruitService {
  constructor(
    private recruitRepository: RecruitRepository,
    private enterpriseRepository: EnterpriseRepository,
    private managerRepository: ManagerRepository,
    private mealRepository: MealRepository,
    private qualificationRepository: QualificationRepository,
    private certificateRepository: CertificateRepository,
    private specialtyRepository: SpecialtyRepository,
    private welfareRepository: WelfareRepository
  ) {}

  public async createRecruit(req: writeFirstRecruitRequest): Promise<string> {
    const uuid: string = await mkId();
    const enterprise: Enterprise = await this.enterpriseRepository.createEnterprise(
      req.name,
      req.entNo,
      req.phone,
      req.sales,
      req.sector,
      req.establishmentDate,
      req.address,
      req.zipCode
    );
    await this.recruitRepository.createRecruit(uuid, req.personnel, enterprise);
    await this.managerRepository.createManager(
      req.entNo,
      req.managerRank,
      req.managerPhone,
      req.managerEmail
    );
    await this.recruitRepository.addPage(uuid);
    return uuid;
  }

  public async updateSecondRecruit(req: writeSecondRecruitRequest, id: string) {
    const recruit = await this.recruitRepository.findOneById(id);
    if (!recruit) throw RecruitNotFound;
    await this.recruitRepository.addDetails(req.detail, id);
    await this.enterpriseRepository.addIntroduce(req.introduce, recruit.entNo);
    await this.recruitRepository.addPage(id);
  }

  public async updateThirdRecruit(req: writeThirdRecruitRequest, id: string) {
    const recruit = await this.recruitRepository.findOneById(id);
    if (!recruit) throw RecruitNotFound;
    await this.recruitRepository.addThirdPageInfo(
      req.startTime,
      req.endTime,
      req.salary,
      req.period,
      id
    );
    const qualificationId: string = await mkId();
    await this.qualificationRepository.createQualification(
      qualificationId,
      req.grade,
      id
    );
    for (let i = 0; i < req.certificates.length; i++) {
      await this.certificateRepository.createCertificate(
        await mkId(),
        req.certificates[i],
        qualificationId
      );
    }
    for (let i = 0; i < req.specialties.length; i++) {
      await this.specialtyRepository.createSpecialty(
        await mkId(),
        req.specialties[i],
        qualificationId
      );
    }
    await this.mealRepository.createMeal(
      id,
      req.breakfast,
      req.lunch,
      req.dinner,
      req.mealSalary
    );
    await this.welfareRepository.createWelfare(
      id,
      req.fourMajor,
      req.selfDevelop,
      req.labtop,
      req.etc
    );
    await this.recruitRepository.addPage(id);
  }
  public async getWritingRecruits(): Promise<Array<Recruit>> {
    return await this.recruitRepository.getWritingRecruit();
  }

  public async updateFourthRecruit(req: writeFourthRecruitRequest, id: string) {
    await this.recruitRepository.addFinalPageInfo(
      id,
      req.recruitPlan,
      req.reception,
      req.deadline
    );
  }
}

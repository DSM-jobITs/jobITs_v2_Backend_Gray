import {
  RecruitRepository,
  EnterpriseRepository,
  ManagerRepository,
  MealRepository,
} from "@/repositories";
import { Recruit, Enterprise } from "@/entities";
import {
  writeFirstRecruitRequest,
  writeSecondRecruitRequest,
  writeThirdRecruitRequest,
} from "@/interfaces";
import { mkId } from "@/utils";
import { RecruitNotFound } from "@/exception";
import {
  QualificationRepository,
  CertificateRepository,
  SpecialtyRepository,
} from "@/repositories";
import { WelfareRepository } from "@/repositories/welfare";

export class RecruitService {
  public static async createRecruit(
    req: writeFirstRecruitRequest
  ): Promise<string> {
    const uuid: string = await mkId();
    const enterprise: Enterprise = await EnterpriseRepository.createEnterprise(
      req.name,
      req.entNo,
      req.phone,
      req.sales,
      req.sector,
      req.establishmentDate,
      req.address,
      req.zipCode
    );
    await RecruitRepository.createRecruit(uuid, req.personnel, enterprise);
    await ManagerRepository.createManager(
      req.entNo,
      req.managerRank,
      req.managerPhone,
      req.managerEmail
    );
    await RecruitRepository.addPage(uuid);
    return uuid;
  }

  public static async updateSecondRecruit(
    req: writeSecondRecruitRequest,
    id: string
  ) {
    const recruit = await RecruitRepository.findOneById(id);
    if (!recruit) throw RecruitNotFound;
    await RecruitRepository.addDetails(req.detail, id);
    await EnterpriseRepository.addIntroduce(req.introduce, recruit.entNo);
    await RecruitRepository.addPage(id);
  }

  public static async updateThirdRecruit(
    req: writeThirdRecruitRequest,
    id: string
  ) {
    const recruit = await RecruitRepository.findOneById(id);
    if (!recruit) throw RecruitNotFound;
    await RecruitRepository.addThirdPageInfo(
      req.startTime,
      req.endTime,
      req.salary,
      req.period,
      id
    );
    const qualificationId: string = await mkId();
    await QualificationRepository.createQualification(
      qualificationId,
      req.grade,
      id
    );
    for (let i = 0; i < req.certificates.length; i++) {
      await CertificateRepository.createCertificate(
        await mkId(),
        req.certificates[i],
        qualificationId
      );
    }
    for (let i = 0; i < req.specialties.length; i++) {
      await SpecialtyRepository.createSpecialty(
        await mkId(),
        req.specialties[i],
        qualificationId
      );
    }
    await MealRepository.createMeal(
      id,
      req.breakfast,
      req.lunch,
      req.dinner,
      req.mealSalary
    );
    await WelfareRepository.createWelfare(
      id,
      req.fourMajor,
      req.selfDevelop,
      req.labtop,
      req.etc
    );
    await RecruitRepository.addPage(id);
  }
  public static async getWritingRecruits(): Promise<Array<Recruit>> {
    return await RecruitRepository.getWritingRecruit();
  }
}

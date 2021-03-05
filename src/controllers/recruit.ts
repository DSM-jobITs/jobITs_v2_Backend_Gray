import { RecruitService } from "@/services";
import { Request, Response, NextFunction } from "express";
import {
  CertificateRepository,
  EnterpriseRepository,
  ManagerRepository,
  MealRepository,
  QualificationRepository,
  RecruitRepository,
  SpecialtyRepository,
  WelfareRepository,
} from "@/repositories";
import { getCustomRepository } from "typeorm";
import { EnterpriseService } from "@/services/enterprise";
import { CertificateService } from "@/services/certificate";
import { ManagerService } from "@/services/manager";
import { MealService } from "@/services/meal";
import { QualificationService } from "@/services/qualification";
import { SpecialtyService } from "@/services/specialty";
import { WelfareService } from "@/services/welfare";
import {
  EnterpriseInsertType,
  ManagerInsertType,
  MealInsertType,
  QualificationInsertType,
  RecruitInsertType,
  WelfareInsertType,
} from "@/interfaces";
import { mkId } from "@/utils";

export class RecruitController {
  private recruitRepository: RecruitRepository = getCustomRepository(
    RecruitRepository
  );
  private enterpriseRepository: EnterpriseRepository = getCustomRepository(
    EnterpriseRepository
  );
  private certificateRepsitory: CertificateRepository = getCustomRepository(
    CertificateRepository
  );
  private managerRepository: ManagerRepository = getCustomRepository(
    ManagerRepository
  );
  private mealRepository: MealRepository = getCustomRepository(MealRepository);
  private qualificationRepository: QualificationRepository = getCustomRepository(
    QualificationRepository
  );
  private specialtyRepository: SpecialtyRepository = getCustomRepository(
    SpecialtyRepository
  );
  private welfareRepository: WelfareRepository = getCustomRepository(
    WelfareRepository
  );

  private recruitService: RecruitService = new RecruitService(
    this.recruitRepository
  );
  private enterpriseService: EnterpriseService = new EnterpriseService(
    this.enterpriseRepository
  );
  private certificateService: CertificateService = new CertificateService(
    this.certificateRepsitory
  );
  private managerService: ManagerService = new ManagerService(
    this.managerRepository
  );
  private mealService: MealService = new MealService(this.mealRepository);
  private qualificationService: QualificationService = new QualificationService(
    this.qualificationRepository
  );
  private specialtyService: SpecialtyService = new SpecialtyService(
    this.specialtyRepository
  );
  private welfareService: WelfareService = new WelfareService(
    this.welfareRepository
  );

  public async writeRecruit(req: Request, res: Response, next: NextFunction) {
    const recruitId: string = await mkId();
    const qualificationId: string = await mkId();
    Object.assign(req.body, { recruitId, qualificationId });
    await this.enterpriseService.createEnterprise(
      req.body as EnterpriseInsertType
    );
    await this.recruitService.createRecruit(req.body as RecruitInsertType);
    await this.qualificationService.createQualification(
      req.body as QualificationInsertType
    );
    await this.welfareService.createWelfare(req.body as WelfareInsertType);
    await this.mealService.createMeal(req.body as MealInsertType);
    await this.managerService.createManager(req.body as ManagerInsertType);
    for (let certificate of req.body.certificates) {
      const certificateId: string = await mkId();
      await this.certificateService.createCertificate({
        qualificationId,
        certificateId,
        certificate,
      });
    }
    for (let specialty of req.body.specialties) {
      const specialtyId: string = await mkId();
      await this.specialtyService.createSpecialty({
        qualificationId,
        specialtyId,
        specialty,
      });
    }
    res.status(201).end();
  }
}

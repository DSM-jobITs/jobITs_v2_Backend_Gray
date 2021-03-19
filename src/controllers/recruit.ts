import {
  CertificateService,
  EnterpriseService,
  IntroductionService,
  ManagerService,
  MealService,
  QualificationService,
  RecruitService,
  WelfareService,
} from "@/services";
import { Request, Response, NextFunction } from "express";
import {
  CertificateRepository,
  EnterpriseRepository,
  IntroductionRepository,
  ManagerRepository,
  MealRepository,
  QualificationRepository,
  RecruitRepository,
  WelfareRepository,
} from "@/repositories";
import { getCustomRepository } from "typeorm";
import {
  EnterpriseInsertType,
  ManagerInsertType,
  MealInsertType,
  QualificationInsertType,
  RecruitInsertType,
  WelfareInsertType,
} from "@/interfaces";
import { mkId } from "@/utils";
import _ from "lodash";
import { Recruit } from "@/entities";
import { RecruitNotFound } from "@/exception";

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
  private introductionRepository: IntroductionRepository = getCustomRepository(
    IntroductionRepository
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
  private introductionService: IntroductionService = new IntroductionService(
    this.introductionRepository
  );
  private welfareService: WelfareService = new WelfareService(
    this.welfareRepository
  );

  public writeRecruitRequest = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
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
    res.status(201).end();
  };

  public uploadIntroductionFiles = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const files = req["files"];
    const entNo: string = req.params.no;
    for (let i = 0; i < files.length; i++) {
      const introductionId: string = await mkId();
      this.introductionService.createIntroduction({
        introductionId,
        originalName: files[i]["originalname"],
        fileUuid: files[i]["key"],
        entNo,
      });
    }
    res.status(201).end();
  };

  public getTenRecruits = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const page = req.query["page"];
    const recruits = await this.recruitService.getRecruits(Number(page));
    const response = _.map(recruits, (e) => {
      return _.pick(e, [
        "recruitNo",
        "recruitId",
        "enterprise.name",
        "reception",
      ]);
    });
    res.status(200).json(response);
  };

  public removeRecruit = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const recruitId: string = req.params.id;
    const recruit: Recruit = await this.recruitService.findRecruit(recruitId);
    if (!recruit) next(RecruitNotFound);
    await this.enterpriseService.removeEnterprise(recruit.entNo);
    res.status(204).end();
  };
}

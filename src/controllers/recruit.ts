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
  EnterpriseUpdateType,
  ManagerInsertType,
  ManagerUpdateType,
  MealInsertType,
  MealUpdateType,
  QualificationInsertType,
  QualificationUpdateType,
  RecruitInsertType,
  RecruitUpdateType,
  WelfareInsertType,
  WelfareUpdateType,
} from "@/interfaces";
import { mkId } from "@/utils";
import _ from "lodash";
import { Enterprise, Recruit } from "@/entities";
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
    if (!req.body.reception) {
      const date = new Date();
      let year = date.getFullYear().toString();
      let month = (date.getMonth() + 1).toString();
      let day = date.getDate().toString();
      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;
      req.body.reception = year + "-" + month + "-" + day;
    }
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
    const files: Array<File> = req["files"];
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
    const allRecruits = await this.recruitService.getAllRecruits();
    const response = _.map(recruits, (e) => {
      return _.pick(e, [
        "recruitNo",
        "recruitId",
        "enterprise.name",
        "reception",
      ]);
    });
    res
      .status(200)
      .json({ response, maxPage: Math.ceil(allRecruits.length / 7) });
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

  public updateRecruit = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const recruitId: string = req.params.id;
    const recruit: Recruit = await this.recruitService.findRecruit(recruitId);
    const recruitNo: number = recruit.recruitNo;
    if (!recruit) next(RecruitNotFound);
    await this.enterpriseService.removeEnterprise(recruit.entNo);
    const qualificationId: string = await mkId();
    Object.assign(req.body, { recruitId, qualificationId, recruitNo });
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
    res.status(200).end();
  };

  public getDetailRecruit = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const recruitId: string = req.params.id;
    const recruit = await this.recruitService.getDetailRecruit(recruitId);
    const introductions = await this.introductionService.getIntroductions(
      recruit.entNo
    );
    const certificates = await this.certificateService.getCertificates(
      recruit.qualification.qualificationId
    );

    const file = introductions.map((e) => {
      return { name: e.originalName, url: e.fileUuid };
    });
    const certificate = certificates.map((e) => e.certificate);

    const response = {
      entName: recruit.enterprise.name,
      entNo: recruit.entNo.split("-").join(""),
      introduction: recruit.enterprise.introduce,
      deadline: recruit.deadline,
      workContent: recruit.detail,
      qualification: {
        certificate,
        grade: recruit.qualification.grade,
        specialty: recruit.qualification.specialty,
      },
      workingConditions: {
        allowance: recruit.allowance,
        salary: recruit.salary,
        period: recruit.period,
        meal: {
          breakfast: recruit.meal.breakfast,
          lunch: recruit.meal.lunch,
          dinner: recruit.meal.dinner,
          includeSalary: recruit.meal.mealSalary,
        },
        welfare: {
          fourMajor: recruit.welfare.fourMajor,
          selfDevelop: recruit.welfare.selfDevelop,
          laptop: recruit.welfare.laptop,
          etc: recruit.welfare.etc,
        },
      },
      entInfo: {
        numOfWorker: recruit.enterprise.workers,
        entPhone: recruit.enterprise.phone.split("-").join(""),
        entSales: recruit.enterprise.sales,
        address: recruit.enterprise.address,
        establishmentDate: recruit.enterprise.establishmentDate,
        startTime: recruit.startTime,
        endTime: recruit.endTime,
      },
      manager: {
        managerRank: recruit.enterprise.manager.managerRank,
        managerPhone: recruit.enterprise.manager.managerPhone
          .split("-")
          .join(""),
        managerEmail: recruit.enterprise.manager.managerEmail,
        managerName: recruit.enterprise.manager.managerName,
      },
      other: {
        personnel: recruit.personnel,
        recruitPlan: recruit.recruitPlan,
        reception: recruit.reception,
        file,
      },
    };
    res.status(200).json(response);
  };
}

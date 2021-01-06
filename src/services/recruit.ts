import {
  RecruitRepository,
  EnterpriseRepository,
  ManagerRepository,
} from "@/repositories";
import { Recruit, Enterprise } from "@/entities";
import {
  writeFirstRecruitRequest,
  writeSecondRecruitRequest,
} from "@/interfaces";
import { mkId } from "@/utils";
import { RecruitNotFound } from "@/exception";

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
  }

  public static async getWritingRecruits(): Promise<Array<Recruit>> {
    return await RecruitRepository.getWritingRecruit();
  }
}

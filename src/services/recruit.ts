import {
  RecruitRepository,
  EnterpriseRepository,
  ManagerRepository,
} from "@/repositories";
import { Recruit, Enterprise } from "@/entities";
import { writeFirstRecruitRequest } from "@/interfaces";
import { mkId } from "@/utils";

export class RecruitService {
  public static async createRecruit(
    req: writeFirstRecruitRequest
  ): Promise<string> {
    const uuid: string = await mkId();
    const enterprise: Enterprise = await EnterpriseRepository.createEnterprise(
      req
    );
    await RecruitRepository.createRecruit(req, uuid, enterprise);
    await ManagerRepository.createManager(req);
    return uuid;
  }

  public static async getWritingRecruits(): Promise<Array<Recruit>> {
    return await RecruitRepository.getWritingRecruit();
  }
}

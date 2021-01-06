import { Recruit, Enterprise } from "@/entities";
import { writeFirstRecruitRequest } from "@/interfaces";
import { getRepository } from "typeorm";

export class RecruitRepository {
  public static async getWritingRecruit() {
    return await getRepository(Recruit)
      .createQueryBuilder("recruit")
      .where("recruit.writing = :writing", { writing: true })
      .getMany();
  }

  public static async createRecruit(
    req: writeFirstRecruitRequest,
    id: string,
    enterprise: Enterprise
  ) {
    const recruit = new Recruit();
    recruit.id = id;
    recruit.personnel = req.personnel;
    recruit.enterprise = enterprise;
    await getRepository(Recruit).save(recruit);
  }
}

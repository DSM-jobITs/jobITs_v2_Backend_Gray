import { Recruit } from "@/entities";
import { mkId } from "@/utils/uuid";
import { getRepository } from "typeorm";

export class RecruitRepository {
  public static async getWritingRecruit() {
    return await getRepository(Recruit)
      .createQueryBuilder("recruit")
      .where("recruit.writing = :writing", { writing: true })
      .getOne();
  }

  public static async createRecruit() {
    const recruit = new Recruit();
    recruit.id = await mkId();
    return await getRepository(Recruit).save(recruit);
  }
}

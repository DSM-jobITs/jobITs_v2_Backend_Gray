import { Recruit } from "@/entities";
import { getRepository } from "typeorm";

export class RecruitRepository {
  public static async getWritingRecruit() {
    return await getRepository(Recruit)
      .createQueryBuilder("recruit")
      .where("recruit.writing = :writing", { writing: true })
      .getOne();
  }
}

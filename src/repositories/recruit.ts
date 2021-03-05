import { Recruit } from "@/entities";
import { RecruitInsertType } from "@/interfaces";
import { EntityRepository, getRepository } from "typeorm";

@EntityRepository(Recruit)
export class RecruitRepository {
  public async findOneById(id: string): Promise<Recruit> {
    return await getRepository(Recruit)
      .createQueryBuilder("recruit")
      .where("recruit.id = :id", { id })
      .getOne();
  }

  public async createRecruit(insertRequest: RecruitInsertType) {
    await getRepository(Recruit)
      .createQueryBuilder("recruit")
      .insert()
      .into(Recruit)
      .values(insertRequest);
  }
}

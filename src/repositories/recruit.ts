import { Recruit } from "@/entities";
import { AlreadyExistsData } from "@/exception";
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
    try {
      await getRepository(Recruit)
        .createQueryBuilder("recruit")
        .insert()
        .into(Recruit)
        .values(insertRequest)
        .execute();
    } catch (e) {
      throw AlreadyExistsData;
    }
  }

  public async findTenRecruits(page: number) {
    return await getRepository(Recruit)
      .createQueryBuilder("recruit")
      .leftJoinAndSelect("recruit.enterprise", "enterprise")
      .orderBy("recruit.recruitNo", "DESC")
      .skip(page * 10)
      .take(10)
      .getMany();
  }
}

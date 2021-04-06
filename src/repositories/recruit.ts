import { Recruit } from "@/entities";
import { AlreadyExistsData } from "@/exception";
import { RecruitInsertType, RecruitUpdateType } from "@/interfaces";
import { EntityRepository, getRepository } from "typeorm";

@EntityRepository(Recruit)
export class RecruitRepository {
  public async findOneById(id: string): Promise<Recruit> {
    return await getRepository(Recruit)
      .createQueryBuilder("recruit")
      .where("recruit.recruitId = :id", { id })
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

  public async findSevenRecruits(page: number) {
    return await getRepository(Recruit)
      .createQueryBuilder("recruit")
      .leftJoinAndSelect("recruit.enterprise", "enterprise")
      .orderBy("recruit.recruitNo", "DESC")
      .skip(page * 7)
      .take(7)
      .getMany();
  }

  public async findAllRecruits(): Promise<Array<Recruit>> {
    return await getRepository(Recruit).createQueryBuilder("recruit").getMany();
  }

  public async updateRecruit(
    recruitId: string,
    updateRequest: RecruitUpdateType
  ) {
    await getRepository(Recruit)
      .createQueryBuilder("recruit")
      .update(Recruit)
      .set(updateRequest)
      .where("recruitId = :recruitId", { recruitId })
      .execute();
  }

  public async getDetailRecruit(recruitId: string) {
    return await getRepository(Recruit)
      .createQueryBuilder("recruit")
      .where("recruit.recruitId = :recruitId", { recruitId })
      .leftJoinAndSelect("recruit.enterprise", "enterprise")
      .leftJoinAndSelect("recruit.qualification", "qualification")
      .leftJoinAndSelect("recruit.meal", "meal")
      .leftJoinAndSelect("recruit.welfare", "welfare")
      .leftJoinAndSelect("enterprise.manager", "manager")
      .getOne();
  }
}

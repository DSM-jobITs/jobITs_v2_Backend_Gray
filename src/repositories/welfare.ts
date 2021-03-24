import { Welfare } from "@/entities";
import { AlreadyExistsData } from "@/exception";
import { WelfareInsertType, WelfareUpdateType } from "@/interfaces";
import { EntityRepository, getRepository } from "typeorm";

@EntityRepository(Welfare)
export class WelfareRepository {
  public async createWelfare(insertRequest: WelfareInsertType) {
    try {
      await getRepository(Welfare)
        .createQueryBuilder("welfare")
        .insert()
        .into(Welfare)
        .values(insertRequest)
        .execute();
    } catch (e) {
      throw AlreadyExistsData;
    }
  }
  public async updateWelfare(
    recruitId: string,
    updateRequest: WelfareUpdateType
  ) {
    await getRepository(Welfare)
      .createQueryBuilder("welfare")
      .update(Welfare)
      .set(updateRequest)
      .where("recruitId = :recruitId", { recruitId })
      .execute();
  }
}

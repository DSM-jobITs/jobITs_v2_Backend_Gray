import { Welfare } from "@/entities";
import { WelfareInsertType } from "@/interfaces";
import { EntityRepository, getRepository } from "typeorm";

@EntityRepository(Welfare)
export class WelfareRepository {
  public async createWelfare(insertRequest: WelfareInsertType) {
    await getRepository(Welfare)
      .createQueryBuilder("welfare")
      .insert()
      .into(Welfare)
      .values(insertRequest)
      .execute();
  }
}

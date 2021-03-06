import { Enterprise } from "@/entities";
import { EnterpriseInsertType } from "@/interfaces";
import { EntityRepository, getRepository } from "typeorm";

@EntityRepository(Enterprise)
export class EnterpriseRepository {
  public async createEnterprise(insertRequest: EnterpriseInsertType) {
    await getRepository(Enterprise)
      .createQueryBuilder("enterprise")
      .insert()
      .into(Enterprise)
      .values(insertRequest)
      .execute();
  }

  public async addIntroduce(introduce: string, entNo: string) {
    return await getRepository(Enterprise)
      .createQueryBuilder("enterprise")
      .update(Enterprise)
      .set({ introduce })
      .where("entNo = :entNo", { entNo })
      .execute();
  }
}

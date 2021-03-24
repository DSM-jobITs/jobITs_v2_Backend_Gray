import { Enterprise } from "@/entities";
import { AlreadyExistsData } from "@/exception";
import { EnterpriseInsertType, EnterpriseUpdateType } from "@/interfaces";
import { EntityRepository, getRepository } from "typeorm";

@EntityRepository(Enterprise)
export class EnterpriseRepository {
  public async createEnterprise(insertRequest: EnterpriseInsertType) {
    try {
      await getRepository(Enterprise)
        .createQueryBuilder("enterprise")
        .insert()
        .into(Enterprise)
        .values(insertRequest)
        .execute();
    } catch (e) {
      throw AlreadyExistsData;
    }
  }

  public async addIntroduce(introduce: string, entNo: string) {
    return await getRepository(Enterprise)
      .createQueryBuilder("enterprise")
      .update(Enterprise)
      .set({ introduce })
      .where("entNo = :entNo", { entNo })
      .execute();
  }

  public async removeEnterprise(entNo: string) {
    await getRepository(Enterprise)
      .createQueryBuilder("enterprise")
      .delete()
      .where("entNo = :entNo", { entNo })
      .execute();
  }

  public async updateEnterprise(
    entNo: string,
    updateRequest: EnterpriseUpdateType
  ) {
    await getRepository(Enterprise)
      .createQueryBuilder("enterprise")
      .update(Enterprise)
      .set(updateRequest)
      .where("entNo = :entNo", { entNo })
      .execute();
  }

  public async findEnterprise(entNo: string): Promise<Enterprise> {
    return await getRepository(Enterprise)
      .createQueryBuilder("enterprise")
      .where("entNo = :entNo", { entNo })
      .getOne();
  }
}

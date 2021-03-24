import { Manager } from "@/entities";
import { AlreadyExistsData } from "@/exception";
import { ManagerInsertType, ManagerUpdateType } from "@/interfaces";
import { EntityRepository, getRepository } from "typeorm";

@EntityRepository(Manager)
export class ManagerRepository {
  public async createManager(insertRequest: ManagerInsertType) {
    try {
      await getRepository(Manager)
        .createQueryBuilder("manager")
        .insert()
        .into(Manager)
        .values(insertRequest)
        .execute();
    } catch (e) {
      throw AlreadyExistsData;
    }
  }
  public async updateManager(updateRequest: ManagerUpdateType) {
    await getRepository(Manager)
      .createQueryBuilder("manager")
      .update(Manager)
      .set(updateRequest)
      .where("entNo = :entNo", { entNo: updateRequest.entNo })
      .execute();
  }
}

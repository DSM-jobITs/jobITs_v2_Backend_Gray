import { Manager } from "@/entities";
import { ManagerInsertType } from "@/interfaces";
import { EntityRepository, getRepository } from "typeorm";

@EntityRepository(Manager)
export class ManagerRepository {
  public async createManager(insertRequest: ManagerInsertType) {
    await getRepository(Manager)
      .createQueryBuilder("manager")
      .insert()
      .into(Manager)
      .values(insertRequest);
  }
}

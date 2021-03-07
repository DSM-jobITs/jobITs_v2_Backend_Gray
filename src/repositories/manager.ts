import { Manager } from "@/entities";
import { AlreadyExistsData } from "@/exception";
import { ManagerInsertType } from "@/interfaces";
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
}

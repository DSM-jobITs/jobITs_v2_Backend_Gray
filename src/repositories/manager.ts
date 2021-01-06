import { Manager } from "@/entities";
import { writeFirstRecruitRequest } from "@/interfaces";
import { getRepository } from "typeorm";

export class ManagerRepository {
  public static async createManager(
    entNo: string,
    managerRank: string,
    managerPhone: string,
    managerEmail: string
  ) {
    const manager = new Manager();
    manager.entNo = entNo;
    manager.rank = managerRank;
    manager.phone = managerPhone;
    manager.email = managerEmail;
    await getRepository(Manager).save(manager);
  }
}

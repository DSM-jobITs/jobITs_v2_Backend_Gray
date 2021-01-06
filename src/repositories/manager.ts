import { Manager } from "@/entities";
import { writeFirstRecruitRequest } from "@/interfaces";
import { getRepository } from "typeorm";

export class ManagerRepository {
  public static async createManager(req: writeFirstRecruitRequest) {
    const manager = new Manager();
    manager.entNo = req.entNo;
    manager.rank = req.managerRank;
    manager.phone = req.managerPhone;
    manager.email = req.managerEmail;
    await getRepository(Manager).save(manager);
  }
}

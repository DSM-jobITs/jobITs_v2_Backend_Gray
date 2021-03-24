import { ManagerInsertType, ManagerUpdateType } from "@/interfaces";
import { ManagerRepository } from "@/repositories";

export class ManagerService {
  constructor(private readonly managerRepository: ManagerRepository) {}

  public async createManager(insertRequest: ManagerInsertType) {
    await this.managerRepository.createManager(insertRequest);
  }

  public async updateManager(updateRequest: ManagerUpdateType) {
    console.log(updateRequest);
    await this.managerRepository.updateManager(updateRequest);
  }
}

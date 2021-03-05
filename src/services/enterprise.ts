import { EnterpriseInsertType } from "@/interfaces";
import { EnterpriseRepository } from "@/repositories";

export class EnterpriseService {
  constructor(private readonly enterpriseRepository: EnterpriseRepository) {}

  public async createEnterprise(insertRequest: EnterpriseInsertType) {
    await this.enterpriseRepository.createEnterprise(insertRequest);
  }
}

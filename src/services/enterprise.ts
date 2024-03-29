import { Enterprise } from "@/entities";
import { EnterpriseInsertType, EnterpriseUpdateType } from "@/interfaces";
import { EnterpriseRepository } from "@/repositories";

export class EnterpriseService {
  constructor(private readonly enterpriseRepository: EnterpriseRepository) {}

  public async createEnterprise(insertRequest: EnterpriseInsertType) {
    await this.enterpriseRepository.createEnterprise(insertRequest);
  }

  public async removeEnterprise(entNo: string) {
    await this.enterpriseRepository.removeEnterprise(entNo);
  }

  public async updateEnterprise(
    entNo: string,
    updateRequest: EnterpriseUpdateType
  ) {
    console.log(updateRequest);
    await this.enterpriseRepository.updateEnterprise(entNo, updateRequest);
  }

  public async findEnterprise(entNo: string): Promise<Enterprise> {
    return await this.enterpriseRepository.findEnterprise(entNo);
  }
}

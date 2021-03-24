import { Recruit } from "@/entities";
import { RecruitInsertType, RecruitUpdateType } from "@/interfaces";
import { RecruitRepository } from "@/repositories";

export class RecruitService {
  constructor(private readonly recruitRepository: RecruitRepository) {}

  public async findRecruit(recruitId: string): Promise<Recruit> {
    return await this.recruitRepository.findOneById(recruitId);
  }

  public async createRecruit(insertRequest: RecruitInsertType) {
    await this.recruitRepository.createRecruit(insertRequest);
  }

  public async getRecruits(page: number) {
    return await this.recruitRepository.findTenRecruits(page);
  }

  public async updateRecruit(
    recruitId: string,
    updateRequest: RecruitUpdateType
  ) {
    await this.recruitRepository.updateRecruit(recruitId, updateRequest);
  }
}

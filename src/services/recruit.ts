import { RecruitInsertType } from "@/interfaces";
import { RecruitRepository } from "@/repositories";

export class RecruitService {
  constructor(private readonly recruitRepository: RecruitRepository) {}

  public async createRecruit(insertRequest: RecruitInsertType) {
    await this.recruitRepository.createRecruit(insertRequest);
  }

  public async getRecruits(page: number) {
    return await this.recruitRepository.findTenRecruits(page);
  }
}

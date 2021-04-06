import { IntroductionInsertType } from "@/interfaces";
import { IntroductionRepository } from "@/repositories/introuction";

export class IntroductionService {
  constructor(
    private readonly introductionRepository: IntroductionRepository
  ) {}

  public async createIntroduction(insertRequest: IntroductionInsertType) {
    await this.introductionRepository.creaetIntroduction(insertRequest);
  }

  public async getIntroductions(entNo: string) {
    return await this.introductionRepository.getIntroductions(entNo);
  }
}

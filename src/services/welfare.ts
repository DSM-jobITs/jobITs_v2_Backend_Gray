import { WelfareInsertType } from "@/interfaces";
import { WelfareRepository } from "@/repositories";

export class WelfareService {
  constructor(private readonly welfareRepository: WelfareRepository) {}

  public async createWelfare(insertRequest: WelfareInsertType) {
    await this.welfareRepository.createWelfare(insertRequest);
  }
}

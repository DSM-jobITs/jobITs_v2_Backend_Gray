import { RecruitRepository } from "@/repositories";

export class RecruitService {
  public static async getWritingRecruitId(): Promise<string> {
    const recruit = await RecruitRepository.getWritingRecruit();
    return recruit.id;
  }
}

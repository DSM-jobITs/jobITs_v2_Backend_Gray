import { RecruitRepository } from "@/repositories";

export class RecruitService {
  public static async getWritingRecruitId(): Promise<string> {
    const recruit = await RecruitRepository.getWritingRecruit();
    if (!recruit) {
      return (await RecruitRepository.createRecruit()).id;
    }
    return recruit.id;
  }
}

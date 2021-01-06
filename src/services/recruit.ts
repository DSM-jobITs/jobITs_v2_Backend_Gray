import { RecruitRepository } from "@/repositories";
import { UserNotFound } from "@/exception";

export class RecruitService {
  public static async getWritingRecruitId(): Promise<string> {
    const recruit = await RecruitRepository.getWritingRecruitId();
    return recruit.id;
  }
}

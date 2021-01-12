import { Introduction } from "@/entities";
import { getRepository } from "typeorm";

export class IntroductionRepository {
  public static async creaetIntroduction(
    id: string,
    originalName: string,
    fileUuid: string,
    entNo: string
  ) {
    const introduction: Introduction = new Introduction();
    introduction.id = id;
    introduction.originalName = originalName;
    introduction.fileUuid = fileUuid;
    introduction.entNo = entNo;
    await getRepository(Introduction).save(introduction);
  }
}

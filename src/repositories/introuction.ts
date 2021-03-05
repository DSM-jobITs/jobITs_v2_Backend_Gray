import { Introduction } from "@/entities";
import { IntroductionInsertType } from "@/interfaces";
import { EntityRepository, getRepository } from "typeorm";

@EntityRepository(Introduction)
export class IntroductionRepository {
  public async creaetIntroduction(insertRequest: IntroductionInsertType) {
    await getRepository(Introduction)
      .createQueryBuilder("introduction")
      .insert()
      .into(Introduction)
      .values(insertRequest);
  }
}

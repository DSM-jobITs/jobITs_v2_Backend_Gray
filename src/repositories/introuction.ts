import { Introduction } from "@/entities";
import { AlreadyExistsData } from "@/exception";
import { IntroductionInsertType } from "@/interfaces";
import { EntityRepository, getRepository } from "typeorm";

@EntityRepository(Introduction)
export class IntroductionRepository {
  public async creaetIntroduction(insertRequest: IntroductionInsertType) {
    try {
      await getRepository(Introduction)
        .createQueryBuilder("introduction")
        .insert()
        .into(Introduction)
        .values(insertRequest)
        .execute();
    } catch (e) {
      throw AlreadyExistsData;
    }
  }
}
